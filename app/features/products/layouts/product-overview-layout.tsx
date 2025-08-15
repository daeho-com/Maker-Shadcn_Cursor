import { Link, NavLink, Outlet } from "react-router";
import { Button } from "~/common/components/ui/button";
import { ChevronUpIcon, PlusIcon, StarIcon } from "lucide-react";
import type { Route } from "./+types/product-overview-layout";
import { buttonVariants } from "~/common/components/ui/button"
import { cn } from "~/lib/utils";

export default function ProductOverviewLayout({params: {productID},}:Route.ComponentProps) {
    return (
        <div className = "space-y-10 mt-10">
            <div className = "flex justify-between items-center">
                <div className = "flex gap-10">
                    <div className = "size-40 rounded-xl shadow-md bg-primary/50"></div>
                    <div>
                        <h1 className = "text-4xl font-bold">Product Name</h1>
                        <p className = "text-xl font-light text-muted-foreground">Product Description</p>
                        <div className="mt-5 flex items-center gap-2">
                            <div className = "flex text-yellow-500">
                                {Array.from({length: 5}).map((_, index) => (
                                    <StarIcon key={index} className = "size-4" fill="currentColor"/>
                                ))}
                            </div>
                            <span className = "text-sm text-muted-foreground">100 reviews</span>
                        </div>

                    </div>
                </div>
                <div className = "flex gap-5">
                    <Button 
                        variant = "secondary" 
                        size = "lg" 
                        className = "text-lg h-10 px-10"
                    >
                        <PlusIcon className = "size-4" />
                        Visit Website
                    </Button>
                    <Button size = "lg" className = "text-lg h-10 px-10">
                        <ChevronUpIcon className = "size-4" />
                        Upvote (100 )
                    </Button>
                </div>
            </div>
            <div className = "flex gap-5">
                <NavLink 
                    to = {`/products/${productID}/overview`} 
                    className = {({isActive}) => 
                        cn(buttonVariants({variant: "outline"}), 
                            isActive && "bg-accent text-foreground")
                    }
                >
                Overview
                </NavLink>
                <NavLink 
                    to = {`/products/${productID}/reviews`} 
                    className = {({isActive}) => 
                        cn(buttonVariants({variant: "outline"}), 
                            isActive && "bg-accent text-foreground")
                    }
                >
                    Reviews
                </NavLink> 
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}