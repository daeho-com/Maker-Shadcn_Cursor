import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import InputPair from "~/common/components/input-pair";

export default function OtpCompletePage() {
  return (
    <div className = "flex flex-col items-center justify-center">
        <div className = "flex flex-col items-center justify-center gap-10 w-full max-w-md">
            <div className = "text-center">
                <h1 className = "text-2xl font-semibold">Confirm OTP</h1>
                <p className = "text-sm text-muted-foreground">
                    Enter the 4 digit code sent to your email.
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
                <InputPair
                    label = "OTP"
                    description = "Enter the 4 digit code"
                    name = "otp"
                    placeholder = "i.e - 1234"
                    required
                    id = "otp"
                    type = "text"
                />
                <Button type = "submit" className = "w-full">Login</Button>
            </Form>
        </div>
    </div>
  );
} 