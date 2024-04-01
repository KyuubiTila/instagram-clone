CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"image" text,
	"text" text,
	"authorId" integer
);
