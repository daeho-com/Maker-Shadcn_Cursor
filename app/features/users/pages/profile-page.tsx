import type { Route } from "./+types/profile-page";

export const meta : Route.MetaFunction = () => {
  return [
    {title: "User Profile | wemake"},
    {name: "description", content: "View user profile and information"},
  ]
}


export default function ProfilePage() {

  return (
    <div className = "max-w-screen-md flex flex-col space-y-10">
      <div className = "space-y-2">
        <h4 className = "text-lg font-bold">Headline</h4>
        <p className = "text-muted-foreground">
          I'm a product designer and I'm looking for a new job. I like to design products that are easy to use and that people love to use.
        </p>
      </div>
      <div className = "space-y-2">
          <h4 className = "text-lg font-bold">About</h4>
          <p className = "text-muted-foreground">
            I'm a product designer and I'm looking for a new job. I like to design products that are easy to use and that people love to use.
          </p>
        </div>
      </div>
  );
} 