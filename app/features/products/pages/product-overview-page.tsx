import { Link, useParams } from "react-router";
import type { MetaFunction } from "react-router";
import { ChevronRightIcon, ChevronUpIcon, PlusIcon, StarIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/product-overview-page";

export const meta:MetaFunction = () => {
    return [
        {title: "Product Overview | wemake"},
        {name: "description", content: "View product details and information"},
    ]
}

export default function ProductOverviewPage({params: {productID},}:Route.ComponentProps) {
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
                                    <StarIcon className = "size-4" fill="currentColor"/>
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
                <Button variant = "outline" asChild>
                    <Link to = {`/products/${productID}/overview`}>Overview</Link>
                </Button>
                <Button variant = "outline" asChild> 
                    <Link to = {`/products/${productID}/reviews`}>Reviews</Link> 
                </Button>
            </div>
            <div className = "space-y-10">
                <div className = "space-y-1">
                    <h3 className = "text-lg font-bold">What is this product?</h3>
                    <p className = "text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                </div>
                <div className = "space-y-1">
                    <h3 className = "text-lg font-bold">How does it work?</h3>
                    <p className = "text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                </div>
                
            </div>
        </div>
    )
}