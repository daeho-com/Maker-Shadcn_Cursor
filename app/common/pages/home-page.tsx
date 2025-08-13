import { Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/home-page";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ChevronRightIcon, ChevronUpIcon, DotIcon, EyeIcon, HeartIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import ProductCard from "~/features/products/components/product-card";
import PostCard from "~/features/community/components/post-card";
import IdeaCard from "~/features/ideas/components/idea-card";
import JobCard from "~/features/jobs/components/job-card";
import TeamCard from "~/features/teams/components/team-card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";

export const meta: MetaFunction = () => {
    return [
        { title: "Home | WeMake" },
        { name: "description", content: "Welcome to our WeMake"},
    ];
};


export default function HomePage() {
    return (
    <div className = "px-20 py-10 space-y-40">
            <div className = "grid grid-cols-3 gap-4">
        <div>
          <h2 className = "text-5xl font-bold leading-tight tracking-tighter">Today's Products</h2> 
          <p className = "text-lg font-light text-foreground">the best products made by our community today.</p>
          <Button variant = "link" asChild className = "text-lg p-0">
            <Link to = "/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({length: 11}).map((_, index) => (
          <ProductCard
          productId={`product-${index}`}
          name={`Product Name ${index}`}
          description={`Product Description ${index}`}
          comments={12}
          views={12}
          upvotes={120}
        />
        ))}
      </div>
      <div className = "grid grid-cols-3 gap-4">
        <div>
          <h2 className = "text-5xl font-bold leading-tight tracking-tighter">Latest Discussions</h2> 
          <p className = "text-lg font-light text-foreground">the latest discussions from our community.</p>
          <Button variant = "link" asChild className = "text-lg p-0">
            <Link to = "/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({length: 11}).map((_, index) => (
                 <PostCard
           postId={`post-${index}`}
           title={`What is the best productivity tool?`}
           author={`John Doe ${index}`}
           category={`Productivity`}
           timeAgo="12 hours ago"
           avatarSrc="https://github.com/Apple.png"
           avatarFallback="N"
         />
         ))}
      </div>
      <div className = "grid grid-cols-3 gap-4">
        <div>
          <h2 className = "text-5xl font-bold leading-tight tracking-tighter">IdeasGPT </h2> 
          <p className = "text-lg font-light text-foreground">Find the best ideas for your next project.</p>
          <Button variant = "link" asChild className = "text-lg p-0">
            <Link to = "/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({length: 11}).map((_, index) => (
                   <IdeaCard
            ideaId="ideaId"
            title="A startup that creates a chatbot that generates ideas for your next project, developing customerized fitness recommendations and tracking of your progress using a mobile app to track workouts and progress."
            views={123}
            timeAgo="12 hours ago"
            likes={12}
            claimed = {index % 2 === 0}
          />
        ))}
      </div>
      <div className = "grid grid-cols-4 gap-4">
        <div>
          <h2 className = "text-5xl font-bold leading-tight tracking-tighter">Latest Jobs </h2> 
          <p className = "text-lg font-light text-foreground">Find your dream job.</p>
          <Button variant = "link" asChild className = "text-lg p-0">
            <Link to = "/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({length: 11}).map((_, index) => (
        <JobCard
          jobId="jobId"
          title="Software Engineer"
          company="Tesla"
          companyLogo="https://github.com/teslamotors.png"
          timeAgo="12 hours ago"
          salary="$100,000 - $120,000"
          location="San Francisco, CA"
          badges={["Full-time", "Remote"]}
        />
        ))}
      </div>
      <div className = "grid grid-cols-4 gap-4">
        <div className = "col-span-2">
          <h2 className = "text-5xl font-bold leading-tight tracking-tighter">Find a team mate </h2> 
          <p className = "text-lg font-light text-foreground">Join a team looking for a new member.</p>
          <Button variant = "link" asChild className = "text-lg p-0">
            <Link to = "/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({length: 6}).map((_, index) => (
                <TeamCard
          teamId={`team-${index}`}
          leaderUsername="lynn"
          leaderUserAvatar="https://github.com/inthetiger.png"
          leaderUserAvatarFallback="N"
          lookingFor={["React Developer", "Backend Developer", "Product Manager"]}
          projectDescription="a new social media platform"
        />
        ))}
      </div>
    </div>
    );
}