import { Label } from "./ui/label";
import { Input } from "./ui/input";
import type { InputHTMLAttributes} from "react";
import { Textarea } from "./ui/textarea";


export default function InputPair(
    {label, description, textArea = false, ...rest}: 
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {label: string, description: string, textArea?: boolean}) {
    return (
        <div>
            <div className="space-y-2 flex flex-col">
                <Label htmlFor={rest.id} className="flex flex-col items-start">
                    {label}
                    <small className="text-muted-foreground">
                    {description}
                    </small>
                </Label>
                {textArea ? <Textarea rows={4} className="resize-none" {...rest} /> : <Input {...rest} />}
          </div>
        </div>
    )
}