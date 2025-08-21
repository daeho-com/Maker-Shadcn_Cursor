import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarGroupLabel, SidebarMenuItem } from "~/common/components/ui/sidebar";
import { Link, Outlet, useLocation } from "react-router";
import { HomeIcon, PackageIcon, RocketIcon, SparklesIcon } from "lucide-react";




export default function DashboardLayout() {
    const location = useLocation();
    return (
        <SidebarProvider className = "flex min-h-full">
            <Sidebar variant = "floating" className = "pt-16">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={location.pathname === "/my/dashboard"}>
                                    <Link to="/my/dashboard">
                                        <HomeIcon className="size-4" />
                                        <span>Home</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={location.pathname === "/my/dashboard/ideas"}>
                                    <Link to="/my/dashboard/ideas">
                                        <SparklesIcon className="size-4" />
                                        <span>Ideas</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            Product Analytics
                        </SidebarGroupLabel>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={location.pathname === "/my/dashboard/products/1"}>
                                    <Link to="/my/dashboard/products/1">
                                        <RocketIcon className="size-4" />
                                        <span>Product 1</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <div className = "h-full flex-1 overflow-y-scroll">
                <Outlet />
            </div>
        </SidebarProvider>
    )
}