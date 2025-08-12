import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
  jobId: string;
  title: string;
  company: string;
  companyLogo: string;
  timeAgo: string;
  salary: string;
  location: string;
  badges: string[];
  content?: React.ReactNode;
}

export default function JobCard({
  jobId,
  title,
  company,
  companyLogo,
  timeAgo,
  salary,
  location,
  badges,
  content
}: JobCardProps) {
  return (
    <Link to={`/jobs/${jobId}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-4 mb-8">
            <img
              src={companyLogo}
              alt={`${company} Logo`}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{company}</span>
              <span className="text-xs text-muted-foreground">{timeAgo}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
          {content && (
            <div className="mt-2">
              {content}
            </div>
          )}
        </CardHeader>
        <CardContent>
          {badges.map((badge, index) => (
            <Badge key={index} variant="outline" className="mr-2">
              {badge}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">{salary}</span>
            <span className="text-sm font-medium text-muted-foreground">{location}</span>
          </div>
          <Button variant="secondary" size="sm">Apply Now</Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 