import type { Route } from "./+types/submit-product-page";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { useState } from "react";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    {title: `Submit a Product | ProductHunt | wemake`},
    {name: "description", content: "Submit a product to ProductHunt"},
  ]
}


export default function SubmitPage() {
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setIcon(URL.createObjectURL(file));
    }
  }
  return (
    <div className="space-y-20">
      <Hero 
        title="Submit Your Product" 
        subtitle="Submit your product with the world"/>
      <Form className = "grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
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
          <Button type = "submit" className = "w-full size-lg">Submit</Button>
        </div>  
        <div className ="flex flex-col space-y-2">
          <div className = "size-40 rounded-xl shadow-xl overflow-hidden">
            {icon ? 
                <img src = {icon} alt = "icon" className = "size-full object-cover" />
              : null}
          </div>
          <Label className = "flex flex-col gap-1px items-start">
            Icon
            <small className="text-muted-foreground">The icon of your product</small>
          </Label>
          <Input type = "file" className = "w-1/2" onChange = {onChange} required name = "icon" />
          <div className = "flex flex-col gap-1px text-xs">
            <span className = "text-muted-foreground">Recommend size : 128x128px</span>
            <span className = "text-muted-foreground">Allowed format : PNG</span>
            <span className = "text-muted-foreground">Max file size : 1MB</span>
          </div>
        </div>
      </Form>
    </div>  
  );
}