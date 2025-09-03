// import db from "~/db"
// import { topics, posts, postUpvotes } from "./schema"
// import { eq, count } from "drizzle-orm"
// import { profiles } from "../users/schema";


// export const getTopics = async () => {
//     const allTopics = await db.select({
//         name : topics.topic,
//         slug : topics.slug
//     }).from(topics);

//     return allTopics;
// }

// export const getPosts = async () => {
//     const allposts = await db.select({
//         postId : posts.post_id,
//         title : posts.title,
//         createdAt : posts.created_at,
//         topic : topics.topic,
//         author : profiles.name,
//         authorAvatarUrl : profiles.avatar,
//         username : profiles.username,
//         upvotes : count(postUpvotes.post_id),
//     }).from(posts)
//     .innerJoin(topics, eq(topics.topic_id, posts.topic_id))
//     .innerJoin(profiles, eq(profiles.profile_id, posts.profile_id))
//     .leftJoin(postUpvotes, eq(postUpvotes.post_id, posts.post_id))
//     .groupBy(posts.post_id, profiles.name, profiles.avatar, profiles.username, topics.topic)
//     return allposts;
// }

import client from "~/supa-client";


export const getTopics = async () => {
    const {data, error} = await client.from("topics").select("topic, slug");
    if (error) throw new Error(error.message);
    return data;
}

export const getPosts = async () => {
    const {data, error} = await client.from("community_post_list_view").select(`*`);
    if (error) throw new Error(error.message);
    return data;
}