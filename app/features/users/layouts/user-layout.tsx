import { Link, Outlet } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter} from "~/common/components/ui/dialog";
import { Form } from "react-router";
import { Textarea } from "~/common/components/ui/textarea";
import { Badge } from "~/common/components/ui/badge";
import { NavLink } from "react-router";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/common/components/ui/button";

export default function UserLayout() {
  return (
    <div className = "space-y-20 mt-20">
      <div className = "flex items-center space-x-10">
        <Avatar className = "size-40">
            <AvatarImage src = "https://github.com/shadcn.png" />
            <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <div className = "space-y-5">
            <div className = "flex gap-2">
                <h1 className = "text-2xl font-bold">Steve Jobs</h1>
                <Button variant = "outline" asChild>
                    <Link to = "/my/settings">
                        Edit Profile
                    </Link>
                </Button>
                <Button variant = "secondary">
                    Follow
                </Button>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant = "secondary">
                            Message
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Send a Message to John Doe</DialogTitle>
                        </DialogHeader>
                        <DialogDescription className = "flex flex-col space-y-4">
                            <span className = "text-sm text-muted-foreground">You can send a message to John Doe by clicking the button below.</span>
                            <Form className = "space-y-5">
                                <Textarea
                                    placeholder = "Write a message..."
                                    className = "resize-none"
                                    rows = {4}
                                />
                                <Button type = "submit">Send</Button>
                            </Form>
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            </div>
            <div className = "flex gap-2 items-center">
                <span className = "text-sm text-muted-foreground">@john_doe</span>
                <Badge variant = "secondary">Product Designer</Badge>
                <Badge variant = "secondary">100 Followers</Badge>
                <Badge variant = "secondary">100 Following</Badge>
            </div>
        </div>
      </div>
      <div className = "flex gap-4">
        {[{label : "About", to : "/users/username"}, 
        {label : "Products", to : "/users/username/products"}, 
        {label : "Posts", to : "/users/username/posts"}, 
        ]
        .map((item) => (
            <NavLink 
            end
            to = {item.to}
            className = {({isActive}) => 
                cn(buttonVariants({variant: "outline"}), 
                    isActive && "bg-accent text-foreground")
                }
            >
            {item.label}
            </NavLink>
        ))}
      </div>
      <div className = "max-w-screen-md">
        <Outlet />
      </div>
    </div>
  );
} 