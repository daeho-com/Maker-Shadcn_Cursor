import { useParams, Link } from "react-router";
import { Button } from "../../../common/components/ui/button";

const providerConfig = {
  google: {
    name: "Google",
    icon: "🔗"
  },
  github: {
    name: "GitHub", 
    icon: "🔗"
  },
  discord: {
    name: "Discord",
    icon: "🔗"
  },
  twitter: {
    name: "Twitter",
    icon: "🔗"
  }
};

export default function SocialCompletePage() {
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
        <h2 className="text-2xl font-bold text-gray-900">Completing {config.name} sign in</h2>
        <p className="mt-2 text-sm text-gray-600">
          Please wait while we complete your authentication...
        </p>
      </div>

      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>

      <div className="text-center text-xs text-gray-500">
        This should only take a moment. You'll be redirected automatically.
      </div>

      <div className="text-center">
        <Link to="/login" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
          ← Back to sign in
        </Link>
      </div>
    </div>
  );
} 