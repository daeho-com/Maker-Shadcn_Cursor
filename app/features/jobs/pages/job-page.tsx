import type { Route } from "./+types/job-page";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import { Check, DotIcon } from "lucide-react";


export const meta: Route.MetaFunction = () => {
    return [
        {title: `Job Details | WeMake`},
        {name: "description", content: "Find your dream job at WeMake"},
    ]
}

export default function JobPage() {
  return (
    <div className="">
        <div className = "bg-gradient-to-tr from-primary/80 to-primary/10 h-60 w-full rounded-lg">
        </div>
        <div className = "grid grid-cols-6 -mt-20 gap-20 items-start"> 
            <div className = "col-span-4 space-y-10">
                <div>
                    <div className = "bg-white rounded-full border-white size-40 overflow-hidden relative left-10">
                        <img src = "https://github.com/facebook.png" alt = "company logo" 
                            className = "object-cover"/>
                    </div>
                    <div>
                        <h1 className = "text-4xl font-bold whitespace-pre">Software Engineer</h1>
                        <h4 className = "text-lg text-muted-foreground">Meta Inc.</h4>
                    </div>
                </div>
                <div className = "flex gap-2">
                    <Badge variant = "secondary">
                        Full Time
                    </Badge>
                    <Badge variant = "secondary">
                        Remote
                    </Badge>
                </div>
                <div className = "space-y-2.5">
                    <h4 className = "text-2xl font-bold">Overview</h4>
                    <p className = "text-lg">
                        This is a full-time remote position for a Software Engineer with a passion for building scalable and efficient systems.
                    </p>
                </div>
                <div className = "space-y-2.5">
                    <h4 className = "text-2xl font-bold">Responsibilities</h4>
                    <ul className = "list-disc list-inside">
                        {["Develop and maintain web applications using React, Next.js, and TypeScript.",
                            "Optimize applications for maximum speed and scalability.",
                            "Maintain code quality, organization, and automatization.",
                        ].map((item) => (
                            <li key = {item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div> 
                <div className = "space-y-2.5">
                    <h4 className = "text-2xl font-bold">Qualifications</h4>
                    <ul className = "list-disc list-inside">
                        {["Bachelor's degree in Computer Science or a related field.",
                            "3+ years of experience in software development.",
                            "Strong understanding of web development technologies.",
                            "Experience with React, Next.js, and TypeScript.",
                            "Experience with Node.js and Express.",
                            "Experience with MongoDB and PostgreSQL.",
                            "Experience with Docker and Kubernetes.",
                            "Experience with CI/CD pipelines.",
                            "Experience with AWS and Azure.",
                        ].map((item) => (
                            <li key = {item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div> 
                <div className = "space-y-2.5">
                    <h4 className = "text-2xl font-bold">Benefits</h4>
                    <ul className = "list-disc list-inside">
                        {["Health insurance",
                            "Dental insurance",
                            "Vision insurance",
                            "401(k) plan",
                            "Paid time off",
                            "Remote work options",
                            "Flexible work hours",
                            "Professional development opportunities",
                            "Team collaboration tools",
                        ].map((item) => (
                            <li key = {item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div> 
                <div className = "space-y-2.5">
                    <h4 className = "text-2xl font-bold">Skills</h4>
                    <ul className = "list-disc list-inside">
                        {["React",
                            "Next.js",
                            "TypeScript",
                            "Node.js",
                            "Express",
                            "MongoDB",
                            "PostgreSQL",
                            "Docker",
                            "Kubernetes",
                        ].map((item) => (
                            <li key = {item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div> 
            </div>
            <div className = "col-span-2 sticky top-20 border rounded-lg mt-32 p-6 space-y-5">
                <div className = "flex flex-col">
                    <span className = "text-sm text-muted-foreground">
                        Avg. Salary
                    </span>
                    <span className = "text-2xl font-medium">
                        $100,000 - $120,000
                    </span>
                </div>
                <div className = "flex flex-col">
                   <span className = "text-sm text-muted-foreground">
                        Location
                    </span>
                    <span className = "text-2xl font-medium">
                        Remote
                    </span>
                </div>
                <div className = "flex flex-col">
                     <span className = "text-sm text-muted-foreground">
                        Type
                    </span>
                    <span className = "text-2xl font-medium">
                        Full Time
                    </span>
                </div>
                <div className = "flex">
                    <span className = "text-sm text-muted-foreground">
                        Posted 2 days ago
                    </span>
                    <DotIcon
                        className = "size-4"
                    />
                    <span className = "text-sm text-muted-foreground">395 views</span>
                </div>
                <Button className = "w-full">Apply Now</Button>
            </div>
        </div>
    </div>
  );
}  