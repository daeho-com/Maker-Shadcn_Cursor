import { Link } from "react-router";
import { Button } from "../../../common/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../common/components/ui/card";
import { Input } from "../../../common/components/ui/input";
import { Label } from "../../../common/components/ui/label";
import { Textarea } from "../../../common/components/ui/textarea";
import { Badge } from "../../../common/components/ui/badge";
import { Separator } from "../../../common/components/ui/separator";
import { 
  ArrowLeftIcon, 
  PlusIcon, 
  XIcon, 
  EyeIcon, 
  FileTextIcon,
  TagIcon,
  InfoIcon
} from "lucide-react";

export default function SubmitPostPage() {
  return (
    <div className="px-20 py-10 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/community">
              <ArrowLeftIcon className="size-4 mr-2" />
              Back to Community
            </Link>
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <div>
            <h1 className="text-2xl font-bold">Create a New Post</h1>
            <p className="text-muted-foreground">Share your thoughts with the community</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <EyeIcon className="size-4 mr-2" />
            Preview
          </Button>
          <Button>
            <FileTextIcon className="size-4 mr-2" />
            Publish Post
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Form */}
        <main className="col-span-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileTextIcon className="size-5" />
                Post Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="What's your post about?"
                    className="text-lg"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    A clear, descriptive title helps others find your post
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Label htmlFor="content">Content *</Label>
                  <Textarea
                    id="content"
                    name="content"
                    placeholder="Share your thoughts, ideas, or questions with the community..."
                    className="min-h-[300px]"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Support for Markdown formatting. Be detailed and helpful!
                  </p>
                </div>

                {/* Tags */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <TagIcon className="size-4" />
                    Tags
                  </Label>
                  <div className="space-y-3">
                    <Input
                      placeholder="Add tags (press Enter to add)"
                      className="w-full"
                    />
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        react
                        <XIcon className="size-3 cursor-pointer" />
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        performance
                        <XIcon className="size-3 cursor-pointer" />
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        tutorial
                        <XIcon className="size-3 cursor-pointer" />
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Add up to 5 tags to help others discover your post
                  </p>
                </div>

                {/* Post Type */}
                <div className="space-y-3">
                  <Label>Post Type</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <Card className="cursor-pointer border-2 border-primary">
                      <CardContent className="p-4 text-center">
                        <FileTextIcon className="size-6 mx-auto mb-2" />
                        <p className="font-medium">Discussion</p>
                        <p className="text-xs text-muted-foreground">Share thoughts & ideas</p>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:border-primary/50">
                      <CardContent className="p-4 text-center">
                        <InfoIcon className="size-6 mx-auto mb-2" />
                        <p className="font-medium">Question</p>
                        <p className="text-xs text-muted-foreground">Ask for help</p>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:border-primary/50">
                      <CardContent className="p-4 text-center">
                        <PlusIcon className="size-6 mx-auto mb-2" />
                        <p className="font-medium">Show & Tell</p>
                        <p className="text-xs text-muted-foreground">Share your work</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>

        {/* Sidebar */}
        <aside className="col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Writing Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="text-primary">•</span>
                  <p>Write a clear, descriptive title that summarizes your post</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary">•</span>
                  <p>Use proper formatting to make your content easy to read</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary">•</span>
                  <p>Add relevant tags to help others discover your post</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary">•</span>
                  <p>Be respectful and constructive in your discussions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Please follow our community guidelines when posting:
              </p>
              <ul className="text-sm space-y-2">
                <li>• Be respectful and professional</li>
                <li>• No spam or promotional content</li>
                <li>• Stay on topic and provide value</li>
                <li>• Use appropriate language</li>
              </ul>
              <Link to="/community/guidelines" className="text-sm text-primary hover:underline">
                Read full guidelines →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer">#react</Badge>
                <Badge variant="outline" className="cursor-pointer">#nextjs</Badge>
                <Badge variant="outline" className="cursor-pointer">#javascript</Badge>
                <Badge variant="outline" className="cursor-pointer">#typescript</Badge>
                <Badge variant="outline" className="cursor-pointer">#ai</Badge>
                <Badge variant="outline" className="cursor-pointer">#startup</Badge>
                <Badge variant="outline" className="cursor-pointer">#design</Badge>
                <Badge variant="outline" className="cursor-pointer">#saas</Badge>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
} 