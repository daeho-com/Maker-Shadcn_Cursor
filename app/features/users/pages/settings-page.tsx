import type { Route } from "./+types/settings-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { useState } from "react";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
    return [
        {title: "Settings | WeMake"},
        {name: "description", content: "Manage your account settings and preferences."},
    ];
};

export default function SettingsPage() {
    const [avatar, setAvatar] = useState<string | null>(null);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
        const file = event.target.files[0];
        setAvatar(URL.createObjectURL(file));
        }
        }
  return (
    <div className = "space-y-20">
      <div className = "grid grid-cols-6 gap-10">
        <div className = "col-span-4 flex flex-col gap-10">
            <h2 className = "text-2xl font-semibold">Edit Profile</h2>
            <Form className = "flex flex-col gap-5 w-1/2">
                <InputPair
                    label = "Name"
                    description = "Your public name"
                    name = "name"
                    id = "name"
                    type = "text"
                    required
                    placeholder = "John Doe"
                />
                <SelectPair
                    label = "Role"
                    description = "What role do you identify the most with?"
                    name = "role"
                    placeholder = "Select your role"
                    required
                    options = {[
                        {label: "Founder", value: "founder"},               
                        {label: "Designer", value: "designer"},
                        {label: "Developer", value: "developer"},
                        {label: "Investor", value: "investor"},
                        {label: "Other", value: "other"},
                    ]}
                />
                <InputPair
                    label = "Headline"
                    description = "A short description of your profile."
                    name = "headline"
                    id = "headline"
                    type = "text"
                    required
                    placeholder = "An introduction to your profile"
                />
                <InputPair
                    label = "Bio"
                    description = "Your public bio. It will be displayed on your profile page."
                    name = "bio"
                    id = "bio"
                    type = "textarea"
                    required
                    textArea
                    placeholder = "I'm a software engineer at Google"
                />
                <Button type = "submit" className = "w-full">Update Profile</Button>
            </Form>
        </div>
        <aside className = "col-span-2 p-6 rounded-lg border shadow-md space-y-5">
          <Label className = "flex flex-col gap-1px items-start">
            Avatar
            <small className="text-muted-foreground">The avatar of your profile</small>
          </Label>
          <div className ="flex flex-col gap-5">
                <div className = "size-40 rounded-full shadow-xl overflow-hidden">
                    {avatar ? 
                        <img src = {avatar} alt = "avatar" className = "size-full object-cover" />
                    : null}
                </div>
                <Input type = "file" className = "w-1/2" onChange = {onChange} required name = "avatar" />
                <div className = "flex flex-col gap-1px text-xs">
                    <span className = "text-muted-foreground">Recommend size : 128x128px</span>
                    <span className = "text-muted-foreground">Allowed format : PNG</span>
                    <span className = "text-muted-foreground">Max file size : 1MB</span>
                </div>
          </div>
          <Button type = "submit" className = "w-full">Update Avatar</Button>
        </aside>
      </div>
    </div>
  );
} 