import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

interface TeamCardProps {
  teamId: string;
  leaderUsername: string;
  leaderUserAvatar: string;
  leaderUserAvatarFallback: string;
  lookingFor: string[];
  projectDescription: string;
  content?: React.ReactNode; 
}

export default function TeamCard({
  teamId,
  leaderUsername,
  leaderUserAvatar,
  leaderUserAvatarFallback,
  lookingFor,
  projectDescription,
  content
}: TeamCardProps) {
  return (
    <Link to={`/teams/${teamId}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge variant="secondary" className="inline-flex shadow-sm items-center text-base">
              <span>@{leaderUsername}</span>
              <Avatar className="size-5">
                <AvatarFallback>
                  {leaderUserAvatarFallback}
                </AvatarFallback>
                <AvatarImage src={leaderUserAvatar} />
              </Avatar>
            </Badge>
            <span> is looking for</span>
            {lookingFor.map((role, index) => (
              <Badge key={index} className="text-base">
                {role}
              </Badge>
            ))}
            <span> to build</span>
            <span> {projectDescription}</span>
            {content && (
              <div className="mt-2">
                {content}
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button variant="link">
            Join Team &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 