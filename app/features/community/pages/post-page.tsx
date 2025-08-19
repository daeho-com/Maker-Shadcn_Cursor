import type { Route } from "./+types/post-page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "~/common/components/ui/breadcrumb";
import { Link } from "react-router";
import { useParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import { ChevronUpIcon, DotIcon } from "lucide-react";
import { Form } from "react-router";
import { Textarea } from "~/common/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

export const meta: Route.MetaFunction = () => {
  const { postID } = useParams();
  return [
    {title: `Discussion | ${postID}`},
    {name: "description", content: "Discussion page"},
  ];
};

export default function PostPage() {

  return (
    <div className="grid grid-cols-6 items-start gap-20">
      <div className="col-span-4 space-y-10">
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
          </div>
        </div>
      </div>
      <aside className="col-span-2 "></aside>

    </div>
  );
} 