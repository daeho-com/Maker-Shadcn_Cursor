import { Link } from "react-router";
import { Button } from "../../../common/components/ui/button";
import { Input } from "../../../common/components/ui/input";
import { Label } from "../../../common/components/ui/label";

export default function OtpCompletePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Enter verification code</h2>
        <p className="mt-2 text-sm text-gray-600">
          We sent a 6-digit code to your email address. Enter it below to complete sign in.
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <Label htmlFor="otp">Verification code</Label>
          <Input
            id="otp"
            name="otp"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            required
            className="mt-1 text-center text-lg tracking-widest"
            placeholder="000000"
          />
        </div>

        <Button type="submit" className="w-full">
          Verify and Sign In
        </Button>
      </form>

      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600">
          Didn't receive the code?
        </p>
        <Button variant="outline" type="button" className="text-blue-600">
          Resend code
        </Button>
      </div>

      <div className="text-center">
        <Link to="/otp/start" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
          ← Back to email entry
        </Link>
      </div>
    </div>
  );
} 