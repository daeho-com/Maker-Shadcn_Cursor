import type { Route } from "./+types/join-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
    return [
        { title: "Join | WeMake" },
        { name: "description", content: "Join our community of makers" },
    ];
};

export default function JoinPage() {
    return (
        <div className = "flex flex-col items-center justify-center relative">
            <Button variant = "ghost" asChild className = "absolute top-8 right-8">
                <Link to = "/auth/login">
                    Login
                </Link>
            </Button>
            <div className = "flex flex-col items-center justify-center gap-10 w-full max-w-md">
                <h1 className = "text-2xl font-semibold">Create an account</h1>
                <Form className = "w-full space-y-4">
                    <InputPair
                        label = "Name"
                        description = "Enter your name"
                        name = "name"
                        placeholder = "Enter your name"
                        required
                        id = "name"
                        type = "text"
                    />
                    <InputPair
                        label = "Username"
                        description = "Enter your username"
                        name = "username"
                        placeholder = "i.e - johndoe"
                        required
                        id = "username"
                        type = "text"
                    />
                    <InputPair
                        label = "Email"
                        description = "Enter your email"
                        name = "email"
                        placeholder = "i.e - johndoe@gmail.com"
                        required
                        id = "email"
                        type = "email"
                    />
                    <InputPair
                        label = "Password"
                        description = "Enter your password"
                        name = "password"
                        placeholder = "Enter your password"
                        required
                        id = "password"
                        type = "password"
                    />
                    <Button type = "submit" className = "w-full">Create account</Button>
                </Form>
            </div>
        </div>
    )
} 