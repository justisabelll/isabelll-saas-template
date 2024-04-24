import { pgTable, pgEnum, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const waitingList = pgTable('waiting-list', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  addedAt: timestamp('added_at').defaultNow(),
});

export const mailingList = pgTable('mailing-list', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull(),
  addedAt: timestamp('added_at').defaultNow(),
});

// users are stored in clerk, but you should have another
// table for stripe customers and related data
