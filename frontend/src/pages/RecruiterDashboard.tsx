// src/pages/RecruiterDashboard.tsx
import { useEffect, useState } from "react";
import { fetchRecruiterJobPostings, fetchApplicationsForJob } from "../api/api";
import { Job, Application } from "../types/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";

const RecruiterDashboard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const recruiterId = "recruiter1"; // Replace with actual recruiter ID
    fetchRecruiterJobPostings(recruiterId).then(setJobs);
  }, []);

  const handleJobClick = async (job: Job) => {
    setSelectedJob(job);
    const apps = await fetchApplicationsForJob(job.id);
    setApplications(apps);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Job Postings</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {jobs.map((job) => (
            <Card key={job.id} className="mb-4 cursor-pointer" onClick={() => handleJobClick(job)}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div>
          {selectedJob && (
            <Card>
              <CardHeader>
                <CardTitle>Applications for {selectedJob.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {applications.map((app) => (
                  <div key={app.id} className="mb-2">
                    <p>User ID: {app.userId}</p>
                    <p>Status: {app.status}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;