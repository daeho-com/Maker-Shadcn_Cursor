import { Link } from "react-router";
import { Button } from "../../../common/components/ui/button";
import { Input } from "../../../common/components/ui/input";
import { Label } from "../../../common/components/ui/label";

export default function OtpStartPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Sign in with OTP</h2>
        <p className="mt-2 text-sm text-gray-600">
          We'll send you a one-time password to sign in securely
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1"
            placeholder="Enter your email"
          />
        </div>

        <Button type="submit" className="w-full">
          Send OTP Code
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Prefer password sign in?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
            Sign in with password
          </Link>
        </p>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/join" className="text-blue-600 hover:text-blue-500 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
} 