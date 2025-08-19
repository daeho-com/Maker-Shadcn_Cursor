import InputPair from "~/common/components/input-pair";
import { Hero } from "../../../common/components/hero";
import { Form } from "react-router";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";

export default function SubmitPostPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Create a new discussion"
        subtitle="Share your thoughts and ideas with the community"
      />
      <Form className="space-y-10 max-w-screen-md mx-auto flex flex-col">
        <InputPair
          label="Title"
          name="title"
          id = "title"
          description="(40 characters max)"
          required
          placeholder="i.e What is the best productivity tool?"
        />
        <SelectPair
          label="Category"
          name="category"
          description="Select the category that best fits your discussion"
          required
          placeholder="i.e Productivity"
          options={[
            {label: "Productivity", value: "productivity"},
            {label: "Technology", value: "technology"},
            {label: "Science", value: "science"},
          ]}
        />
        <InputPair
          label="Content"
          name="content"
          id = "content"
          description="(1000 characters max)"
          required
          placeholder="i.e I'm looking for a new productivity tool that can help me stay organized and focused."
          textArea
        />
        <Button type="submit" className="mx-auto">Create Discussion</Button>
      </Form>
    </div>
  );
} 