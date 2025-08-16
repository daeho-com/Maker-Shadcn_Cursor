import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/jobs-page";
import JobCard from "../components/job-card";
import { Button } from "~/common/components/ui/button";
import { JOB_TYPES, LOCATION_TYPES, SALARY_TYPES } from "../constants";
import { Link } from "react-router";
import { useSearchParams } from "react-router";
import { cn } from "~/lib/utils";

export const meta: Route.MetaFunction = () => {
    return [
        {title: `JobsGPT | WeMake`},
        {name: "description", content: "Find your dream job at WeMake"},
    ]
}

export default function JobsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const onFilterClick = (key: string, value: string) => {
        searchParams.set(key, value);
        setSearchParams(searchParams, { preventScrollReset: true });
    }
  return (
    <div className="space-y-20">
        <Hero 
            title="Jobs"
            subtitle="Company looking for makers" 
        />
        <div className="grid grid-cols-6 gap-20 items-start">
            <div className = "col-span-4 grid grid-cols-3  gap-5">
                {Array.from({length: 20}).map((_, index) => (
                    <JobCard
                    key={`job-${index}`}
                    jobId={`jobId-${index}`}
                    title="Software Engineer"
                    company="Tesla"
                    companyLogo="https://github.com/teslamotors.png"
                    timeAgo="12 hours ago"
                    salary="$100,000 - $120,000"
                    location="San Francisco, CA"
                    badges={["Full-time", "Remote"]}
                    />
                ))}               
            </div>
            <div className = "col-span-2 flex flex-col gap-10 sticky top-15">
                <div className = "flex flex-col items-start gap-2.5">
                    <h4 className = "text-sm text-muted-foreground font-bold">Type</h4>
                    <div className = "flex flex-wrap gap-2">
                        {JOB_TYPES.map((type) => (
                            <Button variant = "outline" onClick={() => onFilterClick("type", type.value)}
                            className = {cn(type.value === searchParams.get("type") ? "bg-primary text-primary-foreground" : "")}
                            >
                                {type.label}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className = "flex flex-col items-start gap-2.5">
                    <h4 className = "text-sm text-muted-foreground font-bold">Location</h4>
                    <div className = "flex flex-wrap gap-2">
                        {LOCATION_TYPES.map((type) => (
                            <Button variant = "outline" onClick={() => onFilterClick("location", type.value)}
                            className = {cn(type.value === searchParams.get("location") ? "bg-primary text-primary-foreground" : "")}
                            >
                                {type.label}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className = "flex flex-col items-start gap-2.5">
                    <h4 className = "text-sm text-muted-foreground font-bold">Salary Range</h4>
                    <div className = "flex flex-wrap gap-2">
                        {SALARY_TYPES.map((type) => (
                            <Button variant = "outline" onClick={() => onFilterClick("salary", type)}
                            className = {cn(type === searchParams.get("salary") ? "bg-primary text-primary-foreground" : "")}
                            >
                                {type}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
} 