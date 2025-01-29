// src/pages/UserDashboard.tsx
import { useEffect, useState } from "react";
import { fetchUserApplications } from "../api/api";
import { Application } from "../types/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";

const UserDashboard = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const userId = "user1"; // Replace with actual user ID
    fetchUserApplications(userId).then(setApplications);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Applications</h1>
      {applications.map((app) => (
        <Card key={app.id} className="mb-4">
          <CardHeader>
            <CardTitle>Job ID: {app.jobId}</CardTitle>
            <CardDescription>Status: {app.status}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default UserDashboard;