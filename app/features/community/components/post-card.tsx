import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { DotIcon } from "lucide-react";

interface PostCardProps {
  postId: string;
  title: string;
  author: string;
  category: string;
  timeAgo: string;
  avatarSrc?: string;
  avatarFallback: string;
  content?: React.ReactNode;
}

export default function PostCard({
  postId,
  title,
  author,
  category,
  timeAgo,
  avatarSrc,
  avatarFallback,
  content
}: PostCardProps) {
  return (
    <Link to={`/community/${postId}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarFallback>
              <span>{avatarFallback}</span>
            </AvatarFallback>
            <AvatarImage src={avatarSrc} />
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-sm leading-none text-muted-foreground">
              <span>{author} on {category}</span>
              <DotIcon className = "size-4" />
              <span>{timeAgo}</span>
            </div>
            {content && (
              <div className="mt-2">
                {content}
              </div>
            )}
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" asChild>
            <Link to={`/community/${postId}`}>Reply &rarr;</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 