import type { Route } from "./+types/category-page";
import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
import ProductCard from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";

export const meta: Route.MetaFunction = ({params}) => {
  return [
    {title: `Developer Tools | ProductHunt | wemake`},
    {name: "description", content: "Browse products by category"},
  ]
}

export default function CategoryPage() {
  return (
    <div className="space-y-20">
      <Hero title="Developer Tools" subtitle="Tools for developers to build their products faster"/>
      
      <div className = "space-y-5 w-full max-w-screen-md mx-auto"> 
        {Array.from({length: 11}).map((_, index) => (
              <ProductCard
              productId={`productId-${index}`}
              name={`Product Name ${index}`}
              description={`Product Description ${index}`}
              comments={12}
              views={12}
              upvotes={120}
            />
            ))}
     </div>
     <ProductPagination totalPages = {10} />
    </div>
  );
}