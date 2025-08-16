import { Form, Link } from "react-router";
import { Button } from "../../../common/components/ui/button";
import { Input } from "../../../common/components/ui/input";
import { Label } from "../../../common/components/ui/label";
import InputPair from "~/common/components/input-pair";

export default function LoginPage() {
  return (
    <div className = "flex flex-col items-center justify-center relative">
        <Button variant = "ghost" asChild className = "absolute top-8 right-8">
            <Link to = "/auth/join">
                Create an account
            </Link>
        </Button>
        <div className = "flex flex-col items-center justify-center gap-10 w-full max-w-md">
            <h1 className = "text-2xl font-semibold">Join</h1>
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
                <InputPair
                    label = "Password"
                    description = "Enter your password"
                    name = "password"
                    placeholder = "Enter your password"
                    required
                    id = "password"
                    type = "password"
                />
                <Button type = "submit" className = "w-full">Login</Button>
            </Form>
        </div>
    </div>
  );
} 