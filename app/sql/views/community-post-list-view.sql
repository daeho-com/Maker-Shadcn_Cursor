 CREATE VIEW community_post_list_view AS
 SELECT
    posts.post_id,
    posts.title,
    posts.created_at,
    topics.topic AS topic,
    profiles.name AS author,
    profiles.avatar AS author_avatar,
    profiles.username AS author_username,
    COUNT("postUpvotes".post_id) AS upvotes
 FROM posts
 INNER JOIN topics USING (topic_id)
 INNER JOIN profiles USING (profile_id)
 LEFT JOIN "postUpvotes" USING (post_id)
 GROUP BY posts.post_id, topics.topic, profiles.name, profiles.avatar, profiles.username;
