import { pgTable, bigint, text, timestamp, integer, primaryKey } from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";
import { uuid } from "drizzle-orm/pg-core";

export const gptIdeas = pgTable("gpt_ideas", {
    gpt_idea_id : bigint({mode : "number"}).primaryKey().generatedAlwaysAsIdentity(),
    idea : text().notNull(),
    views : integer().notNull().default(0),
    claimed_at : timestamp(),
    claimed_by : uuid().references(() => profiles.profile_id, {onDelete: "cascade"}),
    created_at : timestamp().notNull().defaultNow(),
})

export const gptIdeasLikes = pgTable("gptIdeasLikes", {
    gpt_idea_id : bigint({mode : "number"}).references(() => gptIdeas.gpt_idea_id, {onDelete: "cascade"}),
    profile_id : uuid().references(() => profiles.profile_id, {onDelete: "cascade"}),
}, (table) => [
    primaryKey({ columns: [table.gpt_idea_id, table.profile_id] })
])