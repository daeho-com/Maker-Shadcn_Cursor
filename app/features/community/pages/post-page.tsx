import { Link, useParams } from "react-router";
import { Button } from "../../../common/components/ui/button";
import { Card, CardContent, CardHeader } from "../../../common/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../../common/components/ui/avatar";
import { Badge } from "../../../common/components/ui/badge";
import { Separator } from "../../../common/components/ui/separator";
import { Textarea } from "../../../common/components/ui/textarea";
import { 
  ChevronUpIcon, 
  ChevronDownIcon, 
  MessageCircleIcon, 
  BookmarkIcon, 
  ShareIcon,
  MoreHorizontalIcon,
  ArrowLeftIcon
} from "lucide-react";

export default function PostPage() {
  const { postID } = useParams<{ postID: string }>();

  return (
    <div className="px-20 py-10 space-y-8">
      {/* Back Navigation */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/community">
            <ArrowLeftIcon className="size-4 mr-2" />
            Back to Community
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Post */}
        <main className="col-span-8 space-y-6">
          <Card>
            <CardHeader className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/johndoe.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">@johndoe • 2 hours ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontalIcon className="size-4" />
                </Button>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold mb-3">
                  Building a Better Developer Experience with React Server Components
                </h1>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">#react</Badge>
                  <Badge variant="secondary">#servercomponents</Badge>
                  <Badge variant="secondary">#performance</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="prose prose-gray max-w-none">
                <p>
                  I've been experimenting with React Server Components for the past few months, 
                  and I wanted to share some insights about their performance benefits and potential use cases.
                </p>
                <p>
                  React Server Components represent a paradigm shift in how we think about rendering. 
                  Unlike traditional client-side React components, Server Components run on the server 
                  and can directly access backend resources like databases, file systems, or APIs without 
                  the need for additional API layers.
                </p>
                <h3>Key Benefits I've Discovered:</h3>
                <ul>
                  <li><strong>Zero Bundle Size:</strong> Server Components don't add to your client-side bundle</li>
                  <li><strong>Direct Backend Access:</strong> No need for API routes for simple data fetching</li>
                  <li><strong>Automatic Code Splitting:</strong> Each Server Component is automatically split</li>
                  <li><strong>Improved SEO:</strong> Content is rendered on the server for better crawling</li>
                </ul>
                <p>
                  However, there are also some challenges to consider, particularly around state management 
                  and interactivity. You need to be thoughtful about which components should be server vs client.
                </p>
              </div>

              <Separator />

              {/* Post Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <ChevronUpIcon className="size-4" />
                    </Button>
                    <span className="text-sm font-medium">47</span>
                    <Button variant="ghost" size="sm">
                      <ChevronDownIcon className="size-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircleIcon className="size-4" />
                    <span className="text-sm">12 comments</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <BookmarkIcon className="size-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ShareIcon className="size-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Comments (12)</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add Comment */}
              <div className="space-y-3">
                <Textarea placeholder="Write a comment..." className="min-h-[100px]" />
                <div className="flex justify-end">
                  <Button>Post Comment</Button>
                </div>
              </div>

              <Separator />

              {/* Comments List */}
              <div className="space-y-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Avatar className="size-8">
                        <AvatarImage src={`https://github.com/user${index}.png`} />
                        <AvatarFallback>U{index}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm">User {index + 1}</p>
                          <p className="text-xs text-muted-foreground">{index + 1} hours ago</p>
                        </div>
                        <p className="text-sm">
                          Great insights! I've been wondering about the performance implications. 
                          Have you measured the actual bundle size reduction in your projects?
                        </p>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="text-xs h-auto p-1">
                            <ChevronUpIcon className="size-3 mr-1" />
                            {3 + index}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs h-auto p-1">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                    {index < 4 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Sidebar */}
        <aside className="col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-base font-semibold">About the Author</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/johndoe.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Senior Frontend Developer</p>
                </div>
              </div>
              <p className="text-sm">
                Passionate about React, performance optimization, and developer experience.
                Building the future of web development one component at a time.
              </p>
              <Button variant="outline" className="w-full">
                Follow
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-base font-semibold">Related Posts</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <Link key={index} to={`/community/related-post-${index}`} className="block">
                  <div className="space-y-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <h4 className="text-sm font-medium line-clamp-2">
                      Understanding React Concurrent Features in 2024
                    </h4>
                    <p className="text-xs text-muted-foreground">5 min read • 1 day ago</p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
} 