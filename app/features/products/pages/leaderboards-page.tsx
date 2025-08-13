import type { Route } from "./+types/leaderboards-page";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import ProductCard from "~/features/products/components/product-card";


export const meta: Route.MetaFunction = () => {
    return [{
        title: "Leaderboards | wemake",
        description: "The best products made by our community today.",
        content : "Top products leaderboard",
    }];
};

export default function LeaderboardsPage() {
    return (<div className = "space-y-20">
        <div>
            <Hero 
                title="Leaderboards"
                subtitle="The most popular products on wemake by day"
            />
        </div>
        <div className = "grid grid-cols-3 gap-4">
            <div>
                <h2 className = "text-3xl font-bold leading-tight tracking-tighter">Daily Leaderboard </h2> 
                <p className = "text-lg font-light text-foreground">The most popular products on wemake by day</p>
            </div>
            {Array.from({length: 7}).map((_, index) => (
                <ProductCard
                productId={`product-${index}`}
                name="Product Name"
                description="Product Description"
                comments={10}
                views={100}
                upvotes={100}
            />
            ))}
            <Button variant="link" asChild className="text-lg self-center">
                <Link to="/products/leaderboards/daily">
                    Explore all products &rarr;
                </Link>
            </Button>
        </div>
        <div className = "grid grid-cols-3 gap-4">
            <div>
                <h2 className = "text-3xl font-bold leading-tight tracking-tighter">Weekly Leaderboard </h2> 
                <p className = "text-lg font-light text-foreground">The most popular products on wemake by week</p>
            </div>
            {Array.from({length: 7}).map((_, index) => (
                <ProductCard
                productId={`product-${index}`}
                name="Product Name"
                description="Product Description"
                comments={10}
                views={100}
                upvotes={100}
            />
            ))}
            <Button variant="link" asChild className="text-lg self-center">
                <Link to="/products/leaderboards/weekly">
                    Explore all products &rarr;
                </Link>
            </Button>
        </div>
        <div className = "grid grid-cols-3 gap-4">
            <div>
                <h2 className = "text-3xl font-bold leading-tight tracking-tighter">Monthly Leaderboard </h2> 
                <p className = "text-lg font-light text-foreground">The most popular products on wemake by month</p>
            </div>
            {Array.from({length: 7}).map((_, index) => (
                <ProductCard
                productId={`product-${index}`}
                name="Product Name"
                description="Product Description"
                comments={10}
                views={100}
                upvotes={100}
            />
            ))}
            <Button variant="link" asChild className="text-lg self-center">
                <Link to="/products/leaderboards/monthly">
                    Explore all products &rarr;
                </Link>
            </Button>
        </div>
        <div className = "grid grid-cols-3 gap-4">
            <div>
                <h2 className = "text-3xl font-bold leading-tight tracking-tighter">Yearly Leaderboard </h2> 
                <p className = "text-lg font-light text-foreground">The most popular products on wemake by year</p>
            </div>
            {Array.from({length: 7}).map((_, index) => (
                <ProductCard
                productId={`product-${index}`}
                name="Product Name"
                description="Product Description"
                comments={10}
                views={100}
                upvotes={100}
            />
            ))}
            <Button variant="link" asChild className="text-lg self-center">
                <Link to="/products/leaderboards/yearly">
                    Explore all products &rarr;
                </Link>
            </Button>
        </div>
    </div >
    );
}
