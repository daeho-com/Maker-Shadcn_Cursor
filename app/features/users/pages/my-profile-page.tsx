import type { Route } from "./+types/my-profile-page";
import { redirect } from "react-router";

export function loader() {
    // find user using the cookies
    return redirect("/users/nico");
}

export default function MyProfilePage() {
  return (
    <div>
      <h1>My Profile</h1>
    </div>
  );
} 