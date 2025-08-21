import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { SidebarMenuButton, SidebarMenuItem } from "~/common/components/ui/sidebar";
import { Link, useLocation } from "react-router";

interface MessagesCardProps {
  id: string;
  userName: string;
  avatarUrl: string;
  avatarFallback: string;
  lastMessage: string;
  className?: string;
}

export default function MessagesCard({
  id,
  userName, 
  avatarUrl, 
  avatarFallback, 
  lastMessage,
  className 
}: MessagesCardProps) {
    const location = useLocation();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton className={`h-16 ${className || ''}`} 
      asChild
      isActive={location.pathname === `/my/messages/${id}`}
      >
        <Link to = {`/my/messages/${id}`}>
            <div className="flex items-center gap-2">
            <Avatar>
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <span className="text-sm font-medium">{userName}</span>
                <span className="text-xs text-muted-foreground">{lastMessage}</span>
            </div>
            </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
} 