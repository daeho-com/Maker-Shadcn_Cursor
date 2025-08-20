import type { Route } from "./+types/profile-products-page";
import ProductCard from "~/features/products/components/product-card";

export const meta : Route.MetaFunction = () => {
  return [
    {title: "User Products | wemake"},
    {name: "description", content: "View user products and information"},
  ]
}

export default function ProfileProductsPage() {
  return (
    <div className = "flex flex-col space-y-10">
        {Array.from({length: 5}).map((_, index) => (
          <ProductCard
          productId={`product-${index}`}
          name={`Product Name ${index}`}
          description={`Product Description ${index}`}
          comments={12}
          views={12}
          upvotes={120}
        />
        ))}
    </div>
  );
} 