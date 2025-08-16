

export const JOB_TYPES = [
    {
        label: "Full Time",
        value: "full-time",
    },
    {
        label: "Part Time", 
        value: "part-time",
    },
    {
        label: "Remote",
        value: "remote",
    },
] as const;

export const LOCATION_TYPES = [
    {
        label: "Remote",
        value: "remote",
    },
    {
        label: "In-person",
        value: "in-person",
    },
    {
        label: "Hybrid",
        value : "hybrid",
    }
] as const;

export const SALARY_TYPES = [
    "$0 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $150,000",
    "$150,000 - $200,000",
    "$200,000 - $250,000",
    "$250,000 - $300,000",
    "$250,000+",
] as const;

