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
  id: serial('id').primaryKey().notNull(),
  username: text('username').notNull(),
  email: text('email').notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const profiles = pgTable('profiles', {
  id: serial('id').primaryKey().notNull(),
  bio: text('bio').default('').notNull(),
  website: text('website').default('').notNull(),
  gender: text('gender').default('').notNull(),
  image: text('image').default('').notNull(),
  followersCount: integer('followersCount').default(0).notNull(),
  followingCount: integer('followingCount').default(0).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  userId: integer('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey().notNull(),
  image: text('image').notNull(),
  text: text('text').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  author: integer('authorId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
});

export const comments = pgTable('comments', {
  id: serial('id').primaryKey().notNull(),
  comment: text('comment').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  author: integer('authorId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  post: integer('postId')
    .notNull()
    .references(() => posts.id, { onDelete: 'cascade' })
    .notNull(),
});

export const userRelations = relations(users, ({ one, many }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
  posts: many(posts),
  comments: many(comments),
}));

export const postRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.author],
    references: [users.id],
  }),
  comments: many(comments),
}));

export const commentRelations = relations(comments, ({ one }) => ({
  author: one(users, {
    fields: [comments.author],
    references: [users.id],
  }),
  post: one(posts, {
    fields: [comments.post],
    references: [posts.id],
  }),
}));
