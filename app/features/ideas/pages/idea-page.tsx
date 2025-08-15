import { type MetaFunction } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import { EyeIcon, HeartIcon, MessageCircleIcon, ShareIcon, BookmarkIcon, DotIcon } from "lucide-react";
import { Hero } from "~/common/components/hero";


export const meta: MetaFunction = () => {
  return [
    {title: `IdeaGPT | WeMake`},
    {name: "description", content: "Find ideas for your next project"},
  ]
}

export default function IdeaPage() {
    return (
        <div>
            <Hero 
                title="Idea #123123"
            />
            <div className = "max-w-screen-sm mx-auto flex flex-col items-center gap-10">
                <p className = "italic text-center">A startup that creates a chatbot that generates ideas for your next project, 
                    developing customerized fitness recommendations and 
                    tracking of your progress using a mobile app to track workouts and progress.
                </p>
                <div className="flex items-center text-sm">
                    <div className="flex items-center gap-1">
                        <EyeIcon className="size-4" />
                        <span>123</span>
                    </div>
                    <DotIcon className="size-4" /> 
                    <span>12 hours ago</span>
                    <DotIcon className="size-4" />
                    <Button variant="outline">
                        <HeartIcon className="size-4" />
                        <span>12</span>
                    </Button>
                </div>
                <Button size="lg">Claim Idea now &rarr;</Button>
             </div>
        </div>
    )
}