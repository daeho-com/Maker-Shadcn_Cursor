import type { Route } from "./+types/submit-page";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";

export const meta: Route.MetaFunction = () => {
  return [
    {title: `Submit a Product | ProductHunt | wemake`},
    {name: "description", content: "Submit a product to ProductHunt"},
  ]
}


export default function SubmitPage({actionData}: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero 
        title="Submit Your Product" 
        subtitle="Submit your product with the world"/>
      <Form className = "grid grid-cols-2 gap-1 max-w-screen-lg mx-auto">
        <div className="space-y-5"> 
          <InputPair 
            label="Product Name" 
            description="This is the name of your product"
            id = "name"
            name = "name"
            type = "text"
            required
            placeholder = "Product Name" />
          <InputPair 
            label="Tagline" 
            description="60 characters or less"
            id = "tagline"
            name = "tagline"
            type = "text"
            required
            placeholder = "A concise description of your product" />
          <InputPair 
            label="URL" 
            description="The URL of your product"
            id = "url"
            name = "url"
            type = "url"
            required
            placeholder = "https://www.example.com" />
          <InputPair 
            textArea
            label="Description" 
            description="A detailed description of your product"
            id = "description"
            name = "description"
            required
            type = "textarea"
            placeholder = "A detailed description of your product" />
          <SelectPair
            name = "category"
            required
            label = "Category"
            description = "The category of your product"
            placeholder = "Select a category"
            options = {[
              {label: "AI", value: "ai"},
              {label: "Productivity", value: "productivity"},
              {label: "Marketing", value: "marketing"},
              {label: "Design", value: "design"},
              {label: "Development", value: "development"},
            ]} />
        </div>
      </Form>
    </div> 
  );
}