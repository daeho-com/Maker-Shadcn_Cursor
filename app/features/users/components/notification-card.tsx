import { Card, CardFooter, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { EyeIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface NotificationCardProps {
    userName: string;
    avatarUrl: string;
    avatarFallback: string;
    message: string;
    timeAgo: string
    seen?: boolean;
}

export default function NotificationCard({ 
  userName, 
  avatarUrl, 
  avatarFallback, 
  message, 
  timeAgo, 
  seen = false
}: NotificationCardProps) {
  return (
    <Card className= {cn("min-w-[450px]", seen ?  "" : "bg-yellow-500/50")}>
      <CardHeader className="flex flex-row gap-5 items-start">
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-bold whitespace-pre">
            {userName} {message}
          </CardTitle>
          <small className="text-sm text-muted-foreground">{timeAgo}</small>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button variant="outline" size="icon" className="size-8">
          <EyeIcon className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
} 