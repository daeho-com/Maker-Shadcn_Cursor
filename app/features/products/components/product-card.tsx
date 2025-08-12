import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from "lucide-react";

interface ProductCardProps {
  productId: string;
  name: string;
  description: string;
  comments: number;
  views: number;
  upvotes: number;
}

export default function ProductCard({ 
  productId, 
  name, 
  description, 
  comments, 
  views, 
  upvotes 
}: ProductCardProps) {
  return (
    <Link to={`/products/${productId}`}>
      <Card className="w-full flex flex-row items-center justify-between py-4 bg-transparent hover:bg-card/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircleIcon className="w-4 h-4" />
              <span>{comments}</span>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="w-4 h-4" />
              <span>{views}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex h-14 flex-col">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{upvotes}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 