import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { DotIcon, MessageCircleIcon } from "lucide-react";
import { useState } from "react";
import { Form } from "react-router";
import { Textarea } from "~/common/components/ui/textarea";

interface ReplyProps {
  content: string;
  name: string;
  username: string;
  avatarUrl: string;
  avatarFallback: string;
  timestamp: string;
  topLevel: boolean;
}

export function Reply({ content, name, username, avatarUrl, avatarFallback, timestamp, topLevel }: ReplyProps) {
    const [replying, setReplying] = useState(false);
    const toggleReplaying = () => setReplying(prev => !prev);
  return (
    <div className = "flex flex-col gap-2">
        <div className="flex items-start gap-5 w-3/4">
        <Avatar className="size-14">
            <AvatarFallback>{avatarFallback}</AvatarFallback>
            {avatarUrl && <AvatarImage src={avatarUrl} />}
        </Avatar>
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Link to={`/users/@${username}`}>
                    <h4 className="font-medium">{name}</h4>
                </Link>
                <DotIcon className="size-5" />
                <span className="text-xs text-muted-foreground">{timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                {content}
                </p>
                <Button 
                variant="ghost" 
                className="self-end"
                onClick={toggleReplaying}
                >
                <MessageCircleIcon className="size-4" />
                Reply
                </Button>
            </div>
        </div>
        {replying && (
            <div className="pl-16 w-full">
                <Form className = "flex items-start gap-5 w-full">
                    <Avatar className = "size-14">
                        <AvatarFallback>N</AvatarFallback>
                        <AvatarImage src="https://github.com/serranoarevalo.png" />
                    </Avatar>
                    <div className = "w-full flex flex-col items-end gap-5">
                        <Textarea
                        placeholder="Write a reply"
                        className = "w-full resize-none"
                        rows={6}
                        />
                        <Button type="submit">Reply</Button>
                    </div>
                </Form>
            </div>
        )}
        {topLevel && (
            <div className="pl-16 w-full">
            <Reply 
                content="I'm looking for a new productivity tool that can help me stay organized and focused. Any recommendations? I've tried Notion, but it's not for me. I'm looking for something that is easy to use and has a lot of features."
                name="Nico"
                username="nico"
                avatarUrl="https://github.com/serranoarevalo.png"
                avatarFallback="N"
                timestamp="12 hours ago"
                topLevel={false}
            />       
            </div>
        )}
    </div>
  );
} 