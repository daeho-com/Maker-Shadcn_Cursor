import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import type { SelectHTMLAttributes } from "react";
import { useState } from "react";

export default function SelectPair({
    name, 
    required,
    label,
    description,
    placeholder,
    options,
}: {
    name: string,
    required: boolean,
    label: string,
    description: string,
    placeholder: string,
    options: {label: string, value: string}[]}) {
        const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="space-y-2 flex flex-col">
                <Label className="flex flex-col items-start" onClick = {() => setOpen(true)}>
                    {label}
                    <small className="text-muted-foreground">
                    {description}
                    </small>
                </Label>
            <Select open = {open} onOpenChange = {setOpen} name={name} required={required}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder= {placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
           </div>
        </div>
    )
}