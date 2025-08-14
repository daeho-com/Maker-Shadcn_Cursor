import type { Route } from "./+types/promote-page";
import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import SelectPair from "~/common/components/select-pair";
import { Calendar } from "~/common/components/ui/calendar";
import { Label } from "~/common/components/ui/label";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    {title: `Promote Your Product | ProductHunt | wemake`},
    {name: "description", content: "Promote your product to the world"},
  ]
}



export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<DateRange | undefined>(undefined);
  const totalDays = promotionPeriod?.from && promotionPeriod?.to ? 
    DateTime.fromJSDate(promotionPeriod.to).diff(DateTime.fromJSDate(promotionPeriod.from), "days").days
  : 0; 
  return (
    <div className = "space-y-20">
      <Hero 
        title = "Promote Your Product" 
        subtitle = "Get your product's visibility with our promotion service" />
        <Form className = "max-w-sm mx-auto flex flex-col gap-10">
          <SelectPair
            name = "product"
            required
            label = "Select a product"
            description = "Select the product you want to promote"
            placeholder = "Select a product"
            options = {[
              {label: "AI Dark Mode Maker", value: "ai-dark-mode-maker"},
              {label: "AI Dark Mode Maker", value: "ai-dark-mode-maker-1"},
              {label: "AI Dark Mode Maker", value: "ai-dark-mode-maker-2"},
            ]} />
            <div className = "flex flex-col gap-2 items-center w-full">
              <Label className = "flex flex-col gap-1">
                  Select a range of dates for promotion
                  <small className = "text-muted-foreground">
                    Minimum duration is 3 days
                  </small>
              </Label>
              <Calendar 
                mode = "range"
                selected = {promotionPeriod}
                onSelect = {setPromotionPeriod}
                min={3}
                disabled = {{before: new Date()}}
                className="w-full max-w-md" />
            </div>
            <Button disabled = {totalDays === 0} className = "w-full size-lg">Go to checkout(${(totalDays + 1) * 20})</Button>
        </Form>
    </div>
  );
}