import type {Route} from "./+types/create-team-page"
import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";


export const meta: Route.MetaFunction = () => {
    return [
        { title: "Submit Team | Product Hunt" },
        { name: "description", content: "Submit a team to Product Hunt" },
    ];
};

export default function CreateTeamPage() {
  return (
    <div>
      <Hero 
        title = "Submit Team"
        subtitle = "Submit a team to Product Hunt"
      />
      <Form className = "max-w-screen-2xl mx-auto flex flex-col items-center gap-10">
                <div className = "grid grid-cols-3 gap-10 w-full">
                    <InputPair
                        label = "Name"
                        description = "What is the name of your product?"
                        name = "name"
                        maxLength = {20}
                        type = "text"
                        required
                        placeholder="i.e - Doggy social"
                    />
                    <SelectPair
                        label = "What is the stage of your product?"
                        description = "What is the stage of your product?"
                        name = "stage"
                        options = {[
                            {label: "Idea", value: "idea"},
                            {label: "Prototype", value: "prototype"},
                            {label: "MVP", value: "mvp"},
                            {label: "Launched", value: "launched"},
                        ]}
                        placeholder = "Select the stage of your product"
                        required
                    />
                    <InputPair
                        label = "What is the size of your team?"
                        description = "(1-100)"
                        name = "size"
                        type = "number"
                        min = {1}
                        max = {100}
                        id = "size"
                        required
                    />
                    <InputPair
                        label = "How much equity are you willing to give?"
                        description = "(1-100)%"
                        name = "equity"
                        type = "number"
                        min = {1}
                        max = {100}
                        id = "equity"
                        required
                    />
                    <InputPair
                        label = "What roles are you looking for?"
                        description = "(200 characters max)"
                        name = "roles"
                        type = "text"
                        maxLength = {200}
                        id = "roles"
                        required
                        placeholder = "i.e - React Developer, Backend Developer, Product Manager"
                    />
                    <InputPair
                        label = "What is the description of your product?"
                        placeholder = "i.e - We are a team of 3 people looking for a React Developer"
                        description = "(200 characters max)"
                        name = "description"
                        type = "text"
                        maxLength = {200}
                        id = "description"
                        required
                        textArea
                    />
                </div>
                <Button type = "submit" className = "w-full max-w-sm" size = "lg" >Create Team</Button>
            </Form>
    </div>
  );
} 