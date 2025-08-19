import type {Route} from "./+types/team-page"
import { Hero } from "~/common/components/hero";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Card, CardContent, CardHeader, CardTitle } from "~/common/components/ui/card";

export const meta: Route.MetaFunction = () => {
    return [
        {title: "Team | Product Hunt"},
        {name: "description", content: "Team details"},
    ];
};

export default function TeamPage() {
  return (
    <div className = "space-y-20">
      <Hero 
        title = "Join lynn's team"
      />
      <div className = "grid grid-cols-6 gap-40 items-start">
        <div className = "col-span-4 grid grid-cols-4 gap-5">
            {[
                {
                    title : "Product Name",
                    value : "Doggie Social"
                },
                {
                    title : "Stage",
                    value : "MVP"
                },
                {
                    title : "Team Size",
                    value : "10"
                },
                {
                    title : "Available equity",
                    value : "10%"
                },
                
            ].map((item) => (
                <Card>
                    <CardHeader>
                        <CardTitle className = "text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
                        <CardContent className = "p-0 font-bold text-xl">
                            <p>{item.value}</p>
                        </CardContent>
                    </CardHeader>
                    
                </Card>
            ))}
            <Card className = "col-span-2">
                    <CardHeader>
                        <CardTitle className = "text-sm font-medium text-muted-foreground">Looking for</CardTitle>
                        <CardContent className = "p-0 font-bold text-xl">
                            <ul className = "text-lg list-disc list-inside">{["React Developer", "Backend Developer", "Product Manager", "UX/UI Designer", "Marketing"].map((item) => (
                                <li key = {item}>{item}</li>
                            ))}
                            </ul>
                        </CardContent>
                    </CardHeader> 
                    
            </Card>
            <Card className = "col-span-2">
                    <CardHeader>
                        <CardTitle className = "text-sm font-medium text-muted-foreground">Ideas description</CardTitle>
                        <CardContent className = "p-0 font-medium text-lg">
                            <p>
                                We are looking for a React Developer to help us build our product.
                            </p>
                        </CardContent>
                    </CardHeader> 
                    
            </Card>
        </div>
        <aside className="col-span-2 space-y-5 border rounded-lg p-6 shadow-sm">
            <div className = "flex gap-5">
                <Avatar className = "size-14">
                    <AvatarFallback>N</AvatarFallback>
                    <AvatarImage src="https://github.com/inthetiger.png" />
                </Avatar>
                <div className = "flex flex-col">
                    <h4 className = "text-sm font-medium">Lynn</h4>
                    <Badge variant="secondary">Product Hunt</Badge>
                </div>
            </div>
            <Form className = "flex flex-col gap-5 space-y-5">
                <InputPair
                    label = "Introduce yourself"
                    description = "Tell us about yourself"
                    name = "introduction"
                    id = "introduction"
                    type = "text"
                    required
                    textArea
                    placeholder = "i.e - I'm a React Developer with 3 years of experience"
                />
                <InputPair
                    label = "Why do your want to join lynn's team?"
                    description = "Tell us why you want to join lynn's team"
                    name = "why"
                    id = "why"
                    type = "text"
                    required
                    textArea
                    placeholder = "i.e - I want to join lynn's team because I want to build a product that helps people"
                />
                <Button className = "w-full">Get in touch</Button>
            </Form>
        </aside>
      </div>
    </div>
  );
} 