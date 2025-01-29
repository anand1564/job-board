// src/types.ts
export interface Job {
     id: string;
     title: string;
     description: string;
     status: "open" | "closed";
   }
   
   export interface Application {
     id: string;
     jobId: string;
     userId: string;
     status: "pending" | "accepted" | "rejected";
   }
   
   export interface User {
     id: string;
     name: string;
     email: string;
   }
   
   export interface Recruiter {
     id: string;
     name: string;
     email: string;
     jobPostings: Job[];
   }