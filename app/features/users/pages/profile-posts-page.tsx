import type { Route } from "./+types/profile-posts-page";
import PostCard from "~/features/community/components/post-card";

export const meta : Route.MetaFunction = () => {
  return [
    {title: "User Posts | wemake"},
    {name: "description", content: "View user posts and information"},
  ]
}


export default function ProfilePostsPage() {
  return (
    <div className = "flex flex-col space-y-10">
        {Array.from({length: 11}).map((_, index) => (
                 <PostCard
           postId={`post-${index}`}
           title={`What is the best productivity tool?`}
           author={`John Doe ${index}`}
           category={`Productivity`}
           timeAgo="12 hours ago"
           avatarSrc="https://github.com/Apple.png"
           avatarFallback="N"
           expanded
         />
         ))}
    </div>
  );
} 