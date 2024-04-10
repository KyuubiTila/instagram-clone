ALTER TABLE "posts" DROP CONSTRAINT "posts_authorId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "bio" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "website" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "gender" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "photo" SET DEFAULT '';--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_authorId_users_id_fk" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
