import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  FileUp,
  Briefcase,
  MapPin,
  DollarSign,
  Tag,
} from "lucide-react";

interface AddJobProps {
  jobTitle: string;
  jobDescription: string;
  jobLocation: string;
  minSalary: number;
  maxSalary: number;
  status: string;
  tags: string[];
}

export const AddJob = () => {
  const [formData, setFormData] = useState<AddJobProps>({
    jobTitle: "",
    jobDescription: "",
    jobLocation: "",
    minSalary: 0,
    maxSalary: 0,
    status: "",
    tags: [],
  });

  const handleInputChange = (
    field: keyof AddJobProps,
    value: string | number | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job Data Submitted:", formData);
  };

  const handleTagChange = (tags: string[]) => {
    setFormData((prev) => ({ ...prev, tags }));
  };

  return (
    <div className="z-50 inset-0 overflow-y-auto flex items-center justify-center fixed">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Create a Job Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Job Details */}
            <div>
              <Label>Job Title</Label>
              <Input
                placeholder="Enter job title"
                value={formData.jobTitle}
                onChange={(e) =>
                  handleInputChange("jobTitle", e.target.value)
                }
              />
            </div>

            <div>
              <Label>Job Description</Label>
              <Textarea
                placeholder="Provide a detailed job description"
                value={formData.jobDescription}
                onChange={(e) =>
                  handleInputChange("jobDescription", e.target.value)
                }
              />
            </div>

            <div>
              <Label>Job Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Enter location"
                  className="pl-10"
                  value={formData.jobLocation}
                  onChange={(e) =>
                    handleInputChange("jobLocation", e.target.value)
                  }
                />
              </div>
            </div>

            {/* Salary Range */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Min Salary</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="number"
                    placeholder="Min salary"
                    className="pl-10"
                    value={formData.minSalary}
                    onChange={(e) =>
                      handleInputChange("minSalary", parseFloat(e.target.value))
                    }
                  />
                </div>
              </div>
              <div>
                <Label>Max Salary</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="number"
                    placeholder="Max salary"
                    className="pl-10"
                    value={formData.maxSalary}
                    onChange={(e) =>
                      handleInputChange("maxSalary", parseFloat(e.target.value))
                    }
                  />
                </div>
              </div>
            </div>

            {/* Job Tags */}
            <div>
              <Label>Tags</Label>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="e.g. Full-time, Remote, Marketing"
                  className="pl-10"
                  value={formData.tags.join(", ")}
                  onChange={(e) =>
                    handleTagChange(e.target.value.split(",").map((tag) => tag.trim()))
                  }
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="ghost" onClick={() => console.log("Cancelled")}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            Post Job
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
