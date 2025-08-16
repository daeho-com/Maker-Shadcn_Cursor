import type { Route } from "./+types/otp-start-page";
import { Button } from "~/common/components/ui/button";
import { Form } from "react-router";
import { Link } from "react-router";
import InputPair from "~/common/components/input-pair";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "OTP | WeMake" },
        { name: "description", content: "OTP verification" },
    ];
};

export default function OtpStartPage() {
    return (
        <div className = "flex flex-col items-center justify-center">
            <div className = "flex flex-col items-center justify-center gap-10 w-full max-w-md">
                <div className = "text-center">
                    <h1 className = "text-2xl font-semibold">Login with OTP</h1>
                    <p className = "text-sm text-muted-foreground">
                        We've sent a 4 digit code to log in to your account.
                    </p>
                </div>
                <Form className = "w-full space-y-4">
                    <InputPair
                        label = "Email"
                        description = "Enter your email"
                        name = "email"
                        placeholder = "i.e - johndoe@gmail.com"
                        required
                        id = "email"
                        type = "email"
                    />

                    <Button type = "submit" className = "w-full">Send OTP</Button>
                </Form>
            </div>
        </div>
    )
}