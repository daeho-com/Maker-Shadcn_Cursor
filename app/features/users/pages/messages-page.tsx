import type { Route } from "./+types/messages-page";
import { MessageCircleIcon } from "lucide-react";

export const meta : Route.MetaFunction = () => {
  return [
    {title: "Messages | wemake"},
    {name: "description", content: "View messages and information"},
  ]
}

export default function MessagesPage() {
  return (
    <div className = "h-full w-full flex flex-col items-center justify-center gap-4">
        <MessageCircleIcon className = "size-16 font-semibold text-muted-foreground" />
        <h1 className = "text-2xl font-bold text-muted-foreground">Click on a message to view it</h1>
    </div>
  );
} 