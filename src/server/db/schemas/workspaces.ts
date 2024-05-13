import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { usersToWorkspaces } from ".";

export const workspaces = sqliteTable("workspace", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  type: text("type", { enum: ["company", "student"] }).notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp" })
    .notNull()
    .$onUpdateFn(() => new Date()),
});

export const workspacesRelations = relations(workspaces, ({ many }) => ({
  members: many(usersToWorkspaces),
}));
