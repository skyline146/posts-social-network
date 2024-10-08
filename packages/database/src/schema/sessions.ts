import { bigint, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { users } from './users';

export const sessions = pgTable('sessions', {
  id: uuid('id').primaryKey(),
  refreshToken: text('refresh_token').notNull(),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expiresIn: bigint('expires_in', { mode: 'number' }).notNull(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
});
