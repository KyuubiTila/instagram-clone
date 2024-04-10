ALTER TABLE "profiles" ADD COLUMN "image" text DEFAULT '';--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "photo";