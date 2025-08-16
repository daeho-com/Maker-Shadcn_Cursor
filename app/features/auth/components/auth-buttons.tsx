import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { Separator } from "~/common/components/ui/separator";
import { GithubIcon, LockIcon, MessageCircleIcon } from "lucide-react";

export default function AuthButtons() {
    return (
        <div className = "w-full flex flex-col items-center justify-center gap-8">
            <div className = "w-full flex flex-col items-center gap-2">
                <Separator className = "w-full" />
                <span className = "text-sm text-muted-foreground uppercase font-medium">Or continue with</span>
                <Separator className = "w-full" />
            </div>
            <div className = "w-full flex flex-col gap-2">
                <Button variant = "outline" className = "w-full" asChild>
                    <Link to = "/auth/social/kakao/start">
                        <MessageCircleIcon className = "size-4" fill = "currentColor" />
                        Kakao Talk
                    </Link>
                </Button>
                <Button variant = "outline" className = "w-full" asChild>
                    <Link to = "/auth/social/github/start">
                        <GithubIcon className = "size-4" fill = "currentColor" />
                        Github
                    </Link>
                </Button>
                <Button variant = "outline" className = "w-full" asChild>
                    <Link to = "/auth/otp/start">
                        <LockIcon className = "size-4"  />
                        OTP
                    </Link>
                </Button>
            </div>
        </div>
    )
}