"use server";

import { nanoid } from "nanoid";
import { z } from "zod";

import { db } from "@/server/db/drizzle";
import { usersToWorkspaces, workspaces } from "@/server/db/schemas";
import { authAction } from "@/server/safe-actions";

export const createWorkspace = authAction(
  z.object({
    name: z.string(),
    description: z.string(),
    type: z.enum(["company", "student"]),
  }),
  async ({ name, description, type }, { auth }) => {
    const id = nanoid();

    await db.transaction(async (tx) => {
      await db.insert(workspaces).values({
        id,
        name,
        description,
        type,
      });

      await db.insert(usersToWorkspaces).values({
        userId: auth.user.id,
        workspaceId: id,
      });
    });

    return id;
  },
);
