import type { Route } from "./+types/post-page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "~/common/components/ui/breadcrumb";
import { Link } from "react-router";
import { useParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import { ChevronUpIcon, DotIcon } from "lucide-react";
import { Form } from "react-router";
import { Textarea } from "~/common/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Reply } from "~/features/community/components/reply";

export const meta: Route.MetaFunction = () => {
  const { postID } = useParams();
  return [
    {title: `Discussion | ${postID}`},
    {name: "description", content: "Discussion page"},
  ];
};

export default function PostPage() {

  return (
    <div className = "space-y-10">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/community">
            Community
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/community/?topic=productivity">
              Productivity
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/community/postId">
              What is the best productivity tool?
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <div className="grid grid-cols-6 items-start gap-20">
      <div className="col-span-4 space-y-10">
        <div className = "flex w-full items-start gap-3">
          <Button variant="outline" className="flex h-14 flex-col">
                  <ChevronUpIcon className="size-4 shrink-0" />
                  <span>10</span>
          </Button>
          <div className = "space-y-20">
            <div className = "space-y-1">
              <h2 className = "text-xl font-bold">What is the best productivity tool?</h2>
              <div className = "flex items-center gap-1 text-sm text-muted-foreground">
                <span>
                  @Nico
                </span>
                <DotIcon className = "size-5" />
                <span>12 hours ago</span>
                <DotIcon className = "size-5" />
                <span>10 replies</span>
              </div>
              <p className = "text-sm text-muted-foreground w-2/3">
                I'm looking for a new productivity tool that can help me stay organized and focused.
                Any recommendations? I've tried Notion, but it's not for me. I'm looking for something 
                that is easy to use and has a lot of features.
              </p>
            </div>
            <Form className = "flex items-start gap-5 w-full">
              <Avatar className = "size-14">
                <AvatarFallback>N</AvatarFallback>
                <AvatarImage src="https://github.com/serranoarevalo.png" />
              </Avatar>
              <div className = "w-full flex flex-col items-end gap-5">
                <Textarea
                  placeholder="Write a reply"
                  className = "w-full resize-none"
                  rows={6}
                />
                <Button type="submit">Reply</Button>
              </div>
            </Form>
            <div className = "flex flex-col gap-4 items-start">
              <h4 className = "font-semibold">10 Replies</h4>
              <Reply 
                content="I'm looking for a new productivity tool that can help me stay organized and focused. Any recommendations? I've tried Notion, but it's not for me. I'm looking for something that is easy to use and has a lot of features."
                name="Nico"
                username="nico"
                avatarUrl="https://github.com/serranoarevalo.png"
                avatarFallback="N"
                timestamp="12 hours ago"
                topLevel
              />
            </div>
          </div>
        </div> 
      </div>
      <aside className="col-span-2 space-y-5 border rounded-lg p-6 shadow-sm">
        <div className = "flex gap-5">
          <Avatar className = "size-14">
            <AvatarFallback>N</AvatarFallback>
            <AvatarImage src="https://github.com/serranoarevalo.png" />
          </Avatar>
          <div className = "flex flex-col">
            <h4 className = "text-sm font-medium">Nico</h4>
            <Badge variant="secondary">Entrepreneur</Badge>
          </div>
        </div>
        <div className = "gap-2 text-sm flex flex-col">
          <span>🥳 Joined 3 months ago</span>
          <span>🖌️ Launched 10 products</span>
          <Button variant="outline" className = "w-full">Follow</Button>
        </div>
      </aside>
    </div>
    </div>
  );
} 