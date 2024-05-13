import { relations } from "drizzle-orm";
import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { users, workspaces } from ".";

export const usersToWorkspaces = sqliteTable(
  "users_to_workspaces",
  {
    userId: text("userId").notNull(),
    workspaceId: text("workspaceId").notNull(),
    createdAt: integer("createdAt", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.workspaceId] }),
  }),
);

export const workspaceRelations = relations(usersToWorkspaces, ({ one }) => ({
  user: one(users, {
    fields: [usersToWorkspaces.userId],
    references: [users.id],
  }),
  workspace: one(workspaces, {
    fields: [usersToWorkspaces.workspaceId],
    references: [workspaces.id],
  }),
}));
