import { createSafeActionClient } from "next-safe-action";

import { auth } from "./auth/nextjs";

export const action = createSafeActionClient();

export const authAction = createSafeActionClient({
  middleware: async () => {
    const a = await auth();

    if (!a.session) {
      throw new Error("Session not found!");
    }

    return { auth: a };
  },
});
