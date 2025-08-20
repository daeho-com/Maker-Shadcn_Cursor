import type { Route } from "./+types/profile-page";
import { redirect } from "react-router";

export function loader() {
    // find user using the cookies
    return redirect("/users/nico");
}

export default function ProfilePage() {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
} 