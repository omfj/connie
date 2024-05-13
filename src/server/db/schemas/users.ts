import { relations } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

import { accounts, sessions, usersToWorkspaces } from ".";

export const users = sqliteTable("user", {
  id: text("id").notNull().primaryKey().$defaultFn(nanoid),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
});

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  accounts: many(accounts),
  memberships: many(usersToWorkspaces),
}));

export type User = (typeof users)["$inferSelect"];
