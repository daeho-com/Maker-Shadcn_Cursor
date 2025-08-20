import type { Route } from "./+types/notifications-page";
import NotificationCard from "../components/notification-card";

export const meta: Route.MetaFunction = () => {
    return [
        {title: "Notifications | WeMake"},
        {name: "description", content: "Manage your notifications"},
    ];
};

export default function NotificationsPage() {
  return (
    <div className="space-y-20">
      <h1 className="text-2xl font-semibold">Notifications</h1>
      <div className="flex flex-col items-start gap-10">
        <NotificationCard
            userName = "Steve Jobs"
            avatarUrl = "https://github.com/stevejobs.png"
            avatarFallback = "SJ"
            message=" followed you."
            timeAgo="2 days ago"
            seen = {false}
        />
      </div>
    </div>
  );
} 