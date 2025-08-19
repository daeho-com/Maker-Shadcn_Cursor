import type {Route} from "./+types/teams-page"
import { Hero } from "~/common/components/hero";
import TeamCard from "../components/team-card";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Teams | Product Hunt" },
        { name: "description", content: "Find the best teams on Product Hunt" },
    ];
};

export default function TeamsPage() {
  return (
    <div className = "space-y-20">
       <Hero 
        title = "Teams"
        subtitle = "Find the best teams on Product Hunt"
       />
       <div className = "grid grid-cols-4 gap-4">
        {Array.from({length: 8}).map((_, index) => (
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