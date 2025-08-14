import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardDescription } from "~/common/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface CategoryCardProps {
  categoryId: string;
  name: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  icon?: React.ReactNode;
}

export function CategoryCard({
  categoryId,
  name,
  description,
  className,
  titleClassName,
  descriptionClassName,
  icon
}: CategoryCardProps) {
  return (
    <Link to={`/products/categories/${categoryId}`} className={cn("block", className)}>
      <Card>
        <CardHeader>
          <CardTitle className={cn("flex items-center gap-2", titleClassName)}>
            {name}
            {icon || <ChevronRightIcon className="size-6" />}
          </CardTitle>
          <CardDescription className={cn("text-sm", descriptionClassName)}>
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
} 