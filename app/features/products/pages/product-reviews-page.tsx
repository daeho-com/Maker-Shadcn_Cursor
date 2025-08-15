import type { Route } from "./+types/product-reviews-page";
import { Button } from "~/common/components/ui/button";
import { PlusIcon } from "lucide-react";
import { ReviewCard } from "~/features/products/components/review-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "~/common/components/ui/dialog";
import CreateReviewDialog from "../components/create-review-dialog";


export const meta:Route.MetaFunction = () => {
    return [{
        title: "Product Reviews | wemake",
        description: "View product reviews",
    }];
};

export default function ProductReviewsPage() {
    return (
      <Dialog>
        <div className = "space-y-10 max-w-screen-sm">
          <div className = "flex justify-between items-center">
            <h2 className = "text-2xl font-bold leading-tight tracking-tighter">10 reviews</h2>
            <DialogTrigger>
              <Button variant = "secondary">
                Write a review
              </Button>
            </DialogTrigger>
          </div>
          <div className = "space-y-20">          
            {Array.from({length: 10}).map((_, index) => (
              <ReviewCard
              avatarFallback="CN"
              avatarImage="https://github.com/facebook.png"
              name="Jone Doe"
              username="username"
              rating={5}
              reviewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos,"
              date="10 days ago"
            />
            ))}
          </div>
        </div>
        <CreateReviewDialog />
      </Dialog>
    );
}