import { useParams, Link } from "react-router";
import { Button } from "../../../common/components/ui/button";

const providerConfig = {
  google: {
    name: "Google",
    description: "Sign in with your Google account",
    icon: "🔗"
  },
  github: {
    name: "GitHub", 
    description: "Sign in with your GitHub account",
    icon: "🔗"
  },
  discord: {
    name: "Discord",
    description: "Sign in with your Discord account", 
    icon: "🔗"
  },
  twitter: {
    name: "Twitter",
    description: "Sign in with your Twitter account",
    icon: "🔗"
  }
};

export default function SocialStartPage() {
  const { provider } = useParams<{ provider: string }>();
  const config = provider ? providerConfig[provider as keyof typeof providerConfig] : null;

  if (!config) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Provider not found</h2>
          <p className="mt-2 text-sm text-gray-600">
            The authentication provider you requested is not supported.
          </p>
        </div>
        <Link to="/login">
          <Button variant="outline" className="w-full">
            ← Back to sign in
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="text-4xl mb-4">{config.icon}</div>
        <h2 className="text-2xl font-bold text-gray-900">Continue with {config.name}</h2>
        <p className="mt-2 text-sm text-gray-600">
          {config.description}
        </p>
      </div>

      <div className="space-y-4">
        <Button className="w-full" size="lg">
          Continue with {config.name}
        </Button>
        
        <div className="text-center text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <Link to="/terms" className="text-blue-600 hover:text-blue-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="text-center">
        <Link to="/login" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
          ← Back to sign in
        </Link>
      </div>
    </div>
  );
} 