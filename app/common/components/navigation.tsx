import { Link } from "react-router";
import { Separator } from "./ui/separator";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuGroup } from "./ui/dropdown-menu";
import { BarChart3Icon, BellIcon, LogOutIcon, MessageCircleIcon, SettingsIcon, UserIcon } from "lucide-react";

const menus = [
    {
        name : "Products",
        to : "/products",
        items : [
            {
                name : "Leaderboards",
                description : "See the top performers in your organization",
                to : "/products/leaderboards",
            },
            {
                name : "Categories",
                description : "See the top categories in your organization",
                to : "/products/categories",
            },
            {
                name : "Search",
                description : "Search for a product in your organization",
                to : "/products/search",
            },
            {
                name : "Submit a Product",
                description : "Submit a product to be featured on Wemake",
                to : "/products/submit",
            },
            {
                name : "Promote a Product",
                description : "Promote a product to be featured on Wemake",
                to : "/products/promote",
            },

        ]
    },
    {
        name : "Jobs",
        to : "/jobs",
        items : [
            {
                name : "Remotes Jobs",
                description : "Find a remote job in your organization",
                to : "/jobs?type=remote",
            },
            {
                name : "Full-Time Jobs",
                description : "Find a full-time job in your organization",
                to : "/jobs?type=full-time",
            },
            {
                name : "Freelance Jobs",
                description : "Find a freelance job in your organization",
                to : "/jobs?type=freelance",
            },
            {
                name : "Internships",
                description : "Find an internship in your organization",
                to : "/jobs?type=internship",
            },
            {
                name : "Submit a Job",
                description : "Submit a job to be featured on Wemake",
                to : "/jobs/submit",
            },
        ]
    },
    {
        name : "Community",
        to : "/community",
        items : [
            {
                name : "All Posts",
                description : "See all posts in the community",
                to : "/community",
            },
            {
                name : "Top Posts",
                description : "See the top posts in the community",
                to : "/community?sort=top",
            },
            {
                name : "New Posts",
                description : "See the latest posts in the community",
                to : "/community?sort=new",
            },
            {
                name : "Create a Post",
                description : "Create a post in the community",
                to : "/community/create",
            },
        ]
    },
    {
        name : "IdeasGPT",
        to : "/ideasgpt",
    },
    {
        name : "Teams",
        to : "/teams",
        items : [
            {
                name : "All Teams",
                description : "See all teams in the organization",
                to : "/teams",
            },
            {
                name : "Create a Team",
                description : "Create a team in the organization",
                to : "/teams/create",
            },
        ]
    }
]

export default function Navigation(
    {
        isLoggedIn,
        hasNotifications,
        hasMessages,
    } : {
        isLoggedIn : boolean,
        hasNotifications : boolean,
        hasMessages : boolean,
    }
) {
  return <nav className = "flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50 ">
        <div className = "flex items-center">
            <Link to="/" className = "font-bold tracking-tighter text-lg">Wemake</Link>
            <div className="h-6 flex items-center">
                <Separator orientation="vertical" className="h-6 mx-4 bg-gray-300 w-3" />
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    {menus.map((menu) => (
                        <NavigationMenuItem key={menu.name}>
                            {menu.items ? <>
                            <Link to ={menu.to}>
                                <NavigationMenuTrigger>
                                    {menu.name}
                                </NavigationMenuTrigger>
                            </Link>
                            <NavigationMenuContent>
                                <ul className ="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                                                                            {menu.items?.map((item) => (
                                            <NavigationMenuItem 
                                                key={item.name} 
                                                className={cn([
                                                    "select-none rounded-md transition-colors hover:bg-accent focus:bg-accent",
                                                    item.to === "/products/promote" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                                    item.to === "/jobs/submit" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                                ])}
                                            >
                                                <NavigationMenuLink asChild>
                                                    <Link className = "p-3 space-y-1 block leading-none no-underline outline-none" to={item.to}>
                                                        <span className = "text-sm font-medium leading-none">{item.name}</span>
                                                        <p className = "text-sm text-muted-foreground">
                                                            {item.description}
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        ))}
                                </ul>
                            </NavigationMenuContent>
                            </> : <Link className = {navigationMenuTriggerStyle()} to={menu.to}>{menu.name}</Link>}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        {isLoggedIn ?  
            <div className = "flex items-center gap-4">
                <Button size = "icon" variant = "ghost" asChild className = "relative">
                    <Link to = "/my/notifications">
                        <BellIcon className = "size-4"></BellIcon>
                        {hasNotifications && <span className = "absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full text-xs size-2 flex items-center justify-center">
                        {hasNotifications}
                    </span>}
                    </Link>
                </Button>
                <Button size = "icon" variant = "ghost" asChild className = "relative">
                    <Link to = "/my/messages">
                        <MessageCircleIcon className = "size-4"></MessageCircleIcon>
                        {hasMessages && <span className = "absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full text-xs size-2 flex items-center justify-center">
                        {hasMessages}
                    </span>}
                    </Link>
                </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src = "https://github.com/daeho-com.png" />
                            <AvatarFallback>
                                N
                            </AvatarFallback>
                        </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className = "w-56">
                        <DropdownMenuLabel className = "flex flex-col space-y-1">
                            <span className = "font-medium">John Doe</span>
                            <span className = "text-xs text-muted-foreground">
                                @username
                            </span>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem asChild className = "cursor-pointer">
                                <Link to = "/my/dashboard">
                                    <BarChart3Icon className = "size-4 mr-2"></BarChart3Icon>
                                    Dashboard
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className = "cursor-pointer">
                                <Link to = "/my/profile">
                                    <UserIcon className = "size-4 mr-2"></UserIcon>
                                    profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className = "cursor-pointer">
                                <Link to = "/my/settings">
                                    <SettingsIcon className = "size-4 mr-2"></SettingsIcon>
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild className = "cursor-pointer">
                            <Link to = "/auth/logout">
                                <LogOutIcon className = "size-4 mr-2"></LogOutIcon>
                                Logout
                            </Link>
                        </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>  
            </div>
        : 
            <div className = "flex items-center gap-4">
                <Button asChild variant = "secondary">
                    <Link to = "/auth/login">
                        Login
                    </Link>
                </Button>
                <Button asChild>
                    <Link to = "/auth/join">
                        Join
                    </Link>
                </Button>
            </div>
        }
    </nav>;
} 