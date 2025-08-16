import type { Route } from "./+types/submit-job-page";
import { Hero } from "~/common/components/hero";
import { Form } from "react-router"
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { JOB_TYPES, LOCATION_TYPES, SALARY_TYPES } from "../constants";
import { Button } from "~/common/components/ui/button";


export const meta: Route.MetaFunction = () => {
    return [
        { title: "Post a Job | Job Board" },
        { name: "description", content: "Post a job to the job board" },
    ];
};

export default function SubmitJobPage() {
    return (
        <div className = "">
            <Hero
                title = "Post a Job"
                subtitle = "Reach out to the right candidates with your job post."
            />
            <Form className = "max-w-screen-2xl mx-auto flex flex-col items-center gap-10">
                <div className = "grid grid-cols-3 gap-10 w-full">
                    <InputPair
                        label = "Job Title"
                        description = "(40 characters max)"
                        name = "position"
                        maxLength = {40}
                        placeholder = "i.e Senior React Developer"
                        required
                        id = "position"
                        type = "text"
                    />
                    <InputPair
                        label = "Overview"
                        description = "(1000 characters max)"
                        name = "overview"
                        maxLength = {400}
                        placeholder = "i.e We are looking for a Senior React Developer who is proficient in React, Node.js, and TypeScript."
                        required
                        id = "overview"
                        type = "text"
                        textArea
                    />
                    <InputPair
                        label = "Responsibilities"
                        description = "(400 characters max, comma separated)"
                        name = "responsibilities"
                        maxLength = {400}
                        placeholder = "i.e - Develop and maintain web applications using React, Node.js, and TypeScript."
                        required
                        id = "responsibilities"
                        type = "text"
                        textArea
                    />
                    <InputPair
                        label = "Qualifications"
                        description = "(1000 characters max)"
                        name = "qualifications"
                        maxLength = {1000}
                        placeholder = "i.e - Bachelor's degree in Computer Science or a related field."
                        required
                        id = "qualifications"
                        type = "text"
                        textArea
                    />
                    <InputPair
                        label = "Benefits"
                        description = "(1000 characters max)"
                        name = "benefits"
                        maxLength = {400}
                        placeholder = "i.e - Health insurance, dental insurance, vision insurance, etc."
                        required
                        id = "benefits"
                        type = "text"
                        textArea
                    />
                    <InputPair
                        label = "Skills"
                        description = "(1000 characters max)"
                        name = "skills"
                        maxLength = {400}
                        placeholder = "i.e - React, Node.js, TypeScript, etc."
                        required
                        id = "skills"
                        type = "text"
                        textArea
                    />
                    <InputPair
                        label = "Company Name"
                        description = "(100 characters max)"
                        name = "companyName"
                        maxLength = {40}
                        placeholder = "i.e - Google"
                        required
                        id = "companyName"
                        type = "text"
                    />
                    <InputPair
                        label = "Company Logo URL"
                        description = "(40 characters max)"
                        name = "companyLogoUrl"
                        placeholder = "i.e - https://example.com/logo.png"
                        required
                        id = "companyLogoUrl"
                        type = "url"
                    />
                     <InputPair
                        label = "Company Location"
                        description = "(40 characters max)"
                        name = "companyLocation"
                        maxLength = {400}
                        placeholder = "i.e - New York, NY"
                        required
                        id = "companyLocation"
                        type = "text"
                    />
                    <InputPair
                        label = "Apply URL"
                        description = "(40 characters max)"
                        name = "applyUrl"
                        placeholder = "i.e - https://example.com/apply"
                        required
                        id = "applyUrl"
                        type = "url"
                    />
                    <SelectPair
                        label = "Job Type"
                        description = "Select the type of job"
                        name = "jobType"
                        placeholder = "i.e - Full-time"
                        required
                        options = {
                            JOB_TYPES.map((type) => ({
                                label: type.label,
                                value: type.value,
                            }))
                        }
                    />
                    <SelectPair
                        label = "Job Location"
                        description = "Select the location of the job"
                        name = "jobLocation"
                        placeholder = "i.e - Remote"
                        required
                        options = {
                            LOCATION_TYPES.map((type) => ({
                                label: type.label,
                                value: type.value,
                            }))
                        }
                    />
                    <SelectPair
                        label = "Salary Type"
                        description = "Select the type of salary"
                        name = "salaryType"
                        placeholder = "i.e - Hourly"
                        required
                        options = {
                            SALARY_TYPES.map((type) => ({
                                label: type,
                                value: type,
                            }))
                        }
                    />
                </div>
                <Button type = "submit" className = "w-full max-w-sm" size = "lg" >Post job for $100</Button>
            </Form>
        </div>
    );
}