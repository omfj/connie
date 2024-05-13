import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { OAuth2RequestError } from "arctic";
import { nanoid } from "nanoid";

import { lucia } from "@/server/auth/lucia";
import { getGitHubUser, github, GITHUB_ID } from "@/server/auth/providers/github";
import { db } from "@/server/db/drizzle";
import { accounts, users } from "@/server/db/schemas";

export const GET = async (req: NextRequest) => {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const storedState = cookies().get("oauth_state")?.value ?? null;

  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);
    const githubUser = await getGitHubUser(tokens.accessToken);

    const existingAccount = await db.query.accounts.findFirst({
      where: (account, { eq, and }) =>
        and(
          eq(account.providerId, GITHUB_ID),
          eq(account.providerAccountId, String(githubUser.id)),
        ),
    });

    if (existingAccount) {
      const session = await lucia.createSession(existingAccount.userId, {});
      const sessionCookie = lucia.createSessionCookie(session.id);

      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    }

    const userId = nanoid();

    await db.transaction(async (tx) => {
      await tx.insert(users).values({
        id: userId,
        email: githubUser.email,
        name: githubUser.name ?? githubUser.login,
      });

      await tx.insert(accounts).values({
        userId,
        providerId: GITHUB_ID,
        providerAccountId: String(githubUser.id),
      });
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    console.error(e);

    if (e instanceof OAuth2RequestError) {
      return new Response(null, {
        status: 400,
      });
    }

    return new Response(null, {
      status: 500,
    });
  }
};
