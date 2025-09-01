import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { DotIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { DateTime } from "luxon";


interface PostCardProps {
  id: number;
  title: string;
  author: string;
  category: string;
  timeAgo: string;
  avatarSrc?: string | null;
  content?: React.ReactNode;
  expanded?: boolean;
  upvotes?: number;
}

export default function PostCard({
  id,
  title,
  author,
  category,
  timeAgo,
  avatarSrc,
  content,
  expanded = false,
  upvotes = 0,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`} className = "block">
      <Card className={cn("bg-transparent hover:bg-card/50 transition-colors", 
        expanded ? "flex flex-row items-center justify-between" : "")}>
        <CardHeader className={cn("flex flex-row items-center gap-2", expanded ? "flex-1" : "")}>
          <Avatar className="size-14">
            <AvatarFallback>
              <span>{author[0]}</span>
            </AvatarFallback>
            <AvatarImage src={avatarSrc || undefined} />
          </Avatar>
          <div className="space-y-2 flex-1">
            <CardTitle className="line-clamp-2">{title}</CardTitle>
            <div className="flex gap-2 text-sm leading-none text-muted-foreground">
              <span>{author} on {category}</span>
              <DotIcon className = "size-4" />
              <span>{DateTime.fromISO(timeAgo).toRelative()}</span>
            </div>
            {content && (
              <div className="mt-2">
                {content}
              </div>
            )}
          </div>
        </CardHeader>
        {!expanded && (
          <CardFooter className="flex justify-end">
            <Button variant="link" asChild>
              <Link to={`/community/${id}`}>Reply &rarr;</Link>
            </Button>
          </CardFooter>
        )}
        {expanded && (
          <CardFooter className="flex justify-end pt-0">
              <Button variant="outline" className="flex h-14 flex-col">
                <ChevronUpIcon className="size-4 shrink-0" />
                <span>{upvotes}</span>
              </Button>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
} 