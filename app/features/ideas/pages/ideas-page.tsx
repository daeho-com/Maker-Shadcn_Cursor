import { type MetaFunction } from "react-router";
import type {Route } from "./+types/ideas-page";
import { Hero } from "~/common/components/hero";
import IdeaCard from "../components/idea-card";

export const meta: Route.MetaFunction = () => {
    return [
        {title: `IdeasGPT | WeMake`},
        {name: "description", content: "Find the best ideas for your next project"},
    ]
}

export default function IdeasPage() {
    return (
        <div className = "space-y-20">
            <Hero 
                title="IdeasGPT" 
                subtitle="Find the best ideas for your next project" 
            />
            <div className = "grid grid-cols-4 gap-4">
                {Array.from({length: 10}).map((_, index) => (
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
        </div>
    )
}