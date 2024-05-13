import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { lucia } from "./lucia";

/**
 * Gets the user and session from the session cookie.
 */
export const auth = cache(async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  const result = await lucia.validateSession(sessionId);

  /**
   * Next.js throws when you attempt to set cookie when rendering page
   */
  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
  } catch {}

  return result;
});

/**
 * Gets the user from the session. Redirects to the
 * specified URL if the user is not logged in.
 *
 * @param opts
 * @returns
 */
export const ensureUser = async (
  opts = {
    redirectTo: "/log-in",
  },
) => {
  const a = await auth();

  if (!a.user) {
    return redirect(opts.redirectTo);
  }

  return a;
};
