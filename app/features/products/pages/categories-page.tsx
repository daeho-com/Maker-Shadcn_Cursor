import type { Route } from "./+types/categories-page";
import { Hero } from "~/common/components/hero";
import { CategoryCard } from "~/features/products/components/category-card";

export const meta: Route.MetaFunction = ({params}) => {
  return [
    {title: `Categories | ProductHunt | wemake`},
    {name: "description", content: "Browse products by categories"},
  ]
}

export default function CategoryPage() {
  return (
    <div className="space-y-10">
      <Hero title="Categories"
      subtitle="Browse products by categories" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({length: 10}).map((_, index) => ( 
        <CategoryCard
            key={`category-${index}`}
            categoryId={`category-${index}`}
            name={`Category Name ${index}`}
            description={`Category Description`}
          />
        ))}
      </div>
    </div>
    
  );
}