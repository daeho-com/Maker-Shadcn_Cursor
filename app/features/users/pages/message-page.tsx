import { Card, CardHeader, CardTitle, CardDescription } from "~/common/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "~/common/components/ui/avatar";
import type { Route } from "./+types/message-page";
import MessagesBubble from "../components/messages-bubble";
import { Form } from "react-router";
import { Textarea } from "~/common/components/ui/textarea";
import { Button } from "~/common/components/ui/button";
import { SendIcon } from "lucide-react";

export const meta: Route.MetaFunction = () => {
  return [
    {title: "Message | wemake"},
    {name: "description", content: "View a message"},
  ]
}

export default function MessagePage() { 
  return (
    <div className = "py-8 h-full flex flex-col justify-between gap-4">
      <Card>
        <CardHeader className = "flex flex-row gap-4 items-center">
            <Avatar className = "size-12">
                <AvatarImage src = "https://github.com/shadcn.png" />
                <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <div className = "flex flex-col">
                <CardTitle>Shadcn</CardTitle>
                <CardDescription>
                    2 days ago
                </CardDescription>
            </div>
        </CardHeader>
      </Card>
      <div className ="py-8 overflow-y-scroll flex flex-col justify-start h-full">
        {Array.from({length: 10}).map((_, index) => (
          <MessagesBubble
          message="this is messsage from shadcn in the chat, make sure to reply to this message"
          avatarUrl="https://github.com/shadcn.png"
          avatarFallback="SN"
          isOwn={index % 2 === 0}
        />
        ))}
      </div>
      <Card>
        <CardHeader>
            <Form className="relative flex justify-end items-center">
                <Textarea placeholder="Type your message..." className="resize-none" rows={2} />
                <Button type="submit" size = "icon" className="absolute right-2">
                    <SendIcon className="size-4" />
                </Button>
            </Form>
        </CardHeader>
      </Card>
    </div>
  );
} 