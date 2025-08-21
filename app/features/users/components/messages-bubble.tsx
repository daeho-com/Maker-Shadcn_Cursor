import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { cn } from "~/lib/utils";

interface MessagesBubbleProps {
  message: string;
  avatarUrl: string;
  avatarFallback: string;
  isOwn?: boolean;
  className?: string;
}

export default function MessagesBubble({ 
  message, 
  avatarUrl, 
  avatarFallback, 
  isOwn = false,
  className 
}: MessagesBubbleProps) {
  return (
    <div className={cn(
      "flex items-end gap-4",
      isOwn && "flex-row-reverse",
      className
    )}>
      <Avatar>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className={cn(
        "rounded-lg p-4 text-sm w-1/3",
        isOwn ? "bg-accent rounded-br-none" : "bg-primary text-primary-foreground rounded-bl-none"
      )}>
        <p>{message}</p>
      </div>
    </div>
  );
} 