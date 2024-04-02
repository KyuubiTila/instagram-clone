import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username'),
  email: text('email'),
  password: varchar('password', { length: 256 }),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const userRelations = relations(users, ({ one, many }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
  posts: many(posts),
}));

export const profiles = pgTable('profiles', {
  id: serial('id').primaryKey(),
  bio: text('bio').default(''),
  website: text('website').default(''),
  gender: text('gender').default(''),
  photo: text('photo').default(''),
  followersCount: integer('followersCount').default(0),
  followingCount: integer('followingCount').default(0),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  userId: integer('userId')
    .notNull()
    .references(() => users.id),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  image: text('image'),
  text: text('text'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  author: integer('authorId')
    .notNull()
    .references(() => users.id),
});

export const postRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.author],
    references: [users.id],
  }),
}));
