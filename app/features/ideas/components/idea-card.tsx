import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { EyeIcon, HeartIcon, DotIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  ideaId: string;
  title: string;
  views: number;
  timeAgo: string;
  likes: number;
  content?: React.ReactNode;
  claimed: boolean;
}

export default function IdeaCard({
  ideaId,
  title,
  views,
  timeAgo,
  likes,
  content,
  claimed,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={`/ideas/${ideaId}`}>
          <CardTitle className="text-xl">
            <span className= {cn(claimed ? "bg-muted-foreground selection:bg-muted-foreground text-muted-foreground" : "")}>{title}</span>
          </CardTitle>
        </Link>
        {content && (
          <div className="mt-2">
            {content}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex items-center gap-1 text-sm">
        <div className="flex items-center gap-1">
          <EyeIcon className="size-4" />
          <span>{views}</span>
        </div>
        <DotIcon className="size-4" />
        <span>{timeAgo}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">
          <HeartIcon className="size-4" />
          <span>{likes}</span>
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={`/ideas/${ideaId}/claim`}>Claim Idea now &rarr;</Link>
          </Button>
        ) : 
          <Button variant="outline" disabled className="cursor-not-allowed">
            <LockIcon className="size-4" />
            Claimed
          </Button>
        }
      </CardFooter>
    </Card>
  );
} 