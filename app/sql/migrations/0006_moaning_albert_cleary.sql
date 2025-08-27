CREATE TYPE "public"."notification_type" AS ENUM('follow', 'review', 'reply', 'mention');--> statement-breakpoint
CREATE TABLE "messageRoom" (
	"message_room_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "messageRoom_message_room_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "messageRoomMembers" (
	"message_room_id" bigint NOT NULL,
	"profile_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "messageRoomMembers_message_room_id_profile_id_pk" PRIMARY KEY("message_room_id","profile_id")
);
--> statement-breakpoint
CREATE TABLE "messages" (
	"message_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "messages_message_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"message_room_id" bigint,
	"sender_id" uuid,
	"content" text NOT NULL,
	"seen_by" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notifications" (
	"notification_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "notifications_notification_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"source_id" uuid,
	"target_id" uuid NOT NULL,
	"product_id" bigint,
	"post_id" bigint,
	"notification_type" "notification_type" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "messageRoomMembers" ADD CONSTRAINT "messageRoomMembers_message_room_id_messageRoom_message_room_id_fk" FOREIGN KEY ("message_room_id") REFERENCES "public"."messageRoom"("message_room_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "messageRoomMembers" ADD CONSTRAINT "messageRoomMembers_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "messages" ADD CONSTRAINT "messages_message_room_id_messageRoom_message_room_id_fk" FOREIGN KEY ("message_room_id") REFERENCES "public"."messageRoom"("message_room_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "messages" ADD CONSTRAINT "messages_sender_id_profiles_profile_id_fk" FOREIGN KEY ("sender_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_source_id_profiles_profile_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_target_id_profiles_profile_id_fk" FOREIGN KEY ("target_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_product_id_products_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("product_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_post_id_posts_post_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("post_id") ON DELETE cascade ON UPDATE no action;