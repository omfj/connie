import { cookies } from "next/headers";
import { generateState } from "arctic";

import { github } from "@/server/auth/providers/github";

export const GET = async () => {
  const state = generateState();
  const url = await github.createAuthorizationURL(state);

  cookies().set("oauth_state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  });

  return Response.redirect(url);
};
