import InputPair from "~/common/components/input-pair";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter  } from "~/common/components/ui/dialog";
import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Label } from "~/common/components/ui/label";
import { StarIcon } from "lucide-react";
import { useState } from "react";

export default function CreateReviewDialog() {
    const [rating, setRating] = useState<number>(0);
    const [hoveredStar, setHoveredStar] = useState<number>(0);
    return (
        <DialogContent>
          <DialogHeader>
            <DialogTitle className = "text-2xl">What do you think of this product?</DialogTitle>
            <DialogDescription>
                Please write a review for the product.
            </DialogDescription>
          </DialogHeader>
          <Form className = "space-y-10">
            <div>
                <Label>
                    Rating 
                    <small className = "text-muted-foreground">
                        What would you rate this product?
                    </small>
                </Label>
                <div className = "flex gap-2 mt-5">
                    {[1,2,3,4,5].map((star) => (
                        <label key={star} className = "flex items-center gap-2"
                            onMouseEnter = {() => setHoveredStar(star)}
                            onMouseLeave = {() => setHoveredStar(0)}
                        >
                            <StarIcon className = "size-5 text-yellow-500" 
                                fill = {hoveredStar >= star || rating >= star ? "currentColor" : "none"} />
                            <input 
                                type = "radio" 
                                name = "rating" 
                                value = {star} 
                                required 
                                className = "opacity-0 h-px w-px"
                                onChange = {() => setRating(star)}
                                />
                        </label>
                    ))}     
                </div>   
            </div>
            <InputPair  
                label = "Review"
                description = "Please write a review for the product."
                textArea
                name = "review"
                placeholder = "Tell us more about your experinence with this product"
                required
                className = "resize-none"
            />
            <DialogFooter>
                <Button type = "submit">Submit Review</Button>
           </DialogFooter>
          </Form>
        </DialogContent>
    )
}