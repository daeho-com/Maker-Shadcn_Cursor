import { useParams } from "react-router";

export default function JobPage() {
  const { jobID } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">Job ID: {jobID}</p>
        {/* Job details will go here */}
        <p className="text-gray-600">Job details coming soon...</p>
      </div>
    </div>
  );
} 