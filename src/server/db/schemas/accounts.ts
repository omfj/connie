import { relations } from "drizzle-orm";
import { primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { users } from ".";

export const accounts = sqliteTable(
  "account",
  {
    userId: text("userId").notNull(),
    providerId: text("providerId").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.providerId, t.providerAccountId] }),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));
