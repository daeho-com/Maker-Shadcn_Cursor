import type {Route} from "./+types/dashboard-ideas-page"
import IdeaCard from "~/features/ideas/components/idea-card";


export const meta: Route.MetaFunction = () => {
  return [
    {title: "Dashboard Ideas"},
    {name: "description", content: "Dashboard Ideas"},
  ]
}



export default function DashboardIdeasPage() {
  return (
    <div className = "mt-10 space-y-5 h-full">
      <h1 className = "text-2xl text-muted-foreground mb-6">Claimed Ideas</h1>
      <div className = "grid grid-cols-4 gap-4">
        {Array.from({length: 5}).map((_, index) => (
                    <IdeaCard
              ideaId={`ideaId-${index}`}
              title="A startup that creates a chatbot that generates ideas for your next project, developing customerized fitness recommendations and tracking of your progress using a mobile app to track workouts and progress."
              views={123}
              timeAgo="12 hours ago"
              likes={12}
              claimed = {false}
            />
          ))}
        </div>
    </div>
  );
} 