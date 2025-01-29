// src/api.ts
import { Job, Application, User, Recruiter } from "../types/types";

const mockJobs: Job[] = [
  { id: "1", title: "Frontend Developer", description: "Work on React apps", status: "open" },
  { id: "2", title: "Backend Developer", description: "Work on Node.js apps", status: "open" },
];

const mockApplications: Application[] = [
  { id: "1", jobId: "1", userId: "user1", status: "pending" },
  { id: "2", jobId: "2", userId: "user1", status: "accepted" },
];

export const fetchUserApplications = async (userId: string): Promise<Application[]> => {
  return mockApplications.filter((app) => app.userId === userId);
};

export const fetchRecruiterJobPostings = async (recruiterId: string): Promise<Job[]> => {
  return mockJobs;
};

export const fetchApplicationsForJob = async (jobId: string): Promise<Application[]> => {
  return mockApplications.filter((app) => app.jobId === jobId);
};