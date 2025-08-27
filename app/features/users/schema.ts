import { pgTable, 
    pgSchema, 
    text, uuid, 
    pgEnum,
    jsonb, 
    timestamp, 
    bigint, 
    primaryKey, 
    integer,
} from "drizzle-orm/pg-core";
import { products } from "../products/schema";
import { posts } from "../community/schema";

export const users = pgSchema("auth").table("users", {
    id : uuid().primaryKey()
})

export const roles = pgEnum("role", [
    "developer", 
    "designer", 
    "marketer", 
    "founder", 
    "product-manager"
])

export const profiles = pgTable("profiles", {
    profile_id : uuid().primaryKey().references(() => users.id, {onDelete: "cascade"}),
    avatar : text(),
    name : text().notNull(),
    username : text().notNull(),
    headline : text(),
    bio: text(),
    role : roles("role").default("developer").notNull(),
    stats : jsonb().$type<{
        followers : number,
        following : number,
    }>(),
    views : jsonb(),
    created_at : timestamp().notNull().defaultNow(),
    updated_at : timestamp().notNull().defaultNow(),
}) 

export const follows = pgTable("follows", {
    follower_id : uuid().references(() => profiles.profile_id, {onDelete: "cascade"}),
    following_id : uuid().references(() => profiles.profile_id, {onDelete: "cascade"}),
    created_at : timestamp().notNull().defaultNow(),
})

export const notificationType = pgEnum("notification_type", [
    "follow",
    "review",
    "reply",
    "mention"
])

export const notifications = pgTable("notifications", {
    notification_id : bigint({mode : "number"})
        .primaryKey()
        .generatedAlwaysAsIdentity(),
    source_id : uuid().references(() => profiles.profile_id, 
      {onDelete: "cascade"}),
    target_id : uuid().references(() => profiles.profile_id, 
        {onDelete: "cascade"})
        .notNull(),
    product_id : bigint({mode : "number"}).references(() => 
        products.product_id, {onDelete: "cascade"}),
    post_id : bigint({mode : "number"}).references(() => 
        posts.post_id, {onDelete: "cascade"}),
    type : notificationType("notification_type").notNull(),
    created_at : timestamp().notNull().defaultNow(),
})

export const messageRoom = pgTable("messageRoom", {
    message_room_id : bigint({mode : "number"})
        .primaryKey()
        .generatedAlwaysAsIdentity(),
    created_at : timestamp().notNull().defaultNow(),
})

export const messageRoomMembers = pgTable("messageRoomMembers", {
    message_room_id : bigint({mode : "number"})
        .references(() => messageRoom.message_room_id, {onDelete: "cascade"})
        .notNull(),
    profile_id : uuid().references(() => profiles.profile_id, {onDelete: "cascade"}),
    created_at : timestamp().notNull().defaultNow(),
}, (table) => [
    primaryKey({columns : [table.message_room_id, table.profile_id]})
]);

export const messages = pgTable("messages", {
    message_id : bigint({mode : "number"})
        .primaryKey()
        .generatedAlwaysAsIdentity(),
    message_room_id : bigint({mode : "number"})
        .references(() => messageRoom.message_room_id, {onDelete: "cascade"}),
    sender_id : uuid().references(() => profiles.profile_id, {onDelete: "cascade"}),
    content : text().notNull(),
    seen_by : integer().notNull().default(0),
    created_at : timestamp().notNull().defaultNow(),
})