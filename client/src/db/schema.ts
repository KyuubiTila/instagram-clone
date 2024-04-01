import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username'),
  email: text('email'),
  password: varchar('password', { length: 256 }),
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
  bio: text('bio'),
  website: text('website'),
  gender: text('gender'),
  photo: text('photo'),
  userId: integer('userId')
    .notNull()
    .references(() => users.id),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  image: text('image'),
  text: text('text'),
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
