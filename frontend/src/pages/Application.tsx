import React, { useState, useRef } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  FileUp, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';

// Application Form Interfaces
interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface EducationInfo {
  degree: string;
  institution: string;
  graduationYear: string;
}

interface ApplicationFormData {
  personalInfo: PersonalInfo;
  education: EducationInfo;
  resume: File | null;
  coverLetter: string;
  jobId: number;
}

// Validation Utilities
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

// Job Application Component
const JobApplicationForm: React.FC<{ 
  jobId: number, 
  jobTitle: string, 
  onSubmit: (applicationData: ApplicationFormData) => void,
  onClose: () => void 
}> = ({ jobId, jobTitle, onSubmit, onClose }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    education: {
      degree: '',
      institution: '',
      graduationYear: ''
    },
    resume: null,
    coverLetter: '',
    jobId: jobId
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const resumeInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    section: 'personalInfo' | 'education', 
    field: string, 
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type and size
      const allowedTypes = ['application/pdf', 'application/docx', 'application/doc'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          resume: 'Invalid file type. Please upload PDF or DOC.'
        }));
        return;
      }

      if (file.size > maxSize) {
        setErrors(prev => ({
          ...prev,
          resume: 'File size exceeds 5MB limit.'
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setErrors(prev => {
        const { resume, ...rest } = prev;
        return rest;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    // Personal Info Validation
    if (!formData.personalInfo.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.personalInfo.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.personalInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.personalInfo.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.personalInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.personalInfo.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    // Education Validation
    if (!formData.education.degree.trim()) {
      newErrors.degree = 'Degree is required';
    }
    if (!formData.education.institution.trim()) {
      newErrors.institution = 'Institution is required';
    }
    if (!formData.education.graduationYear.trim()) {
      newErrors.graduationYear = 'Graduation year is required';
    }

    // Resume Validation
    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Apply for {jobTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="John" 
                    className="pl-10"
                    value={formData.personalInfo.firstName}
                    onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
              </div>
              <div>
                <Label>Last Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Doe" 
                    className="pl-10"
                    value={formData.personalInfo.lastName}
                    onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    type="email"
                    placeholder="john.doe@example.com" 
                    className="pl-10"
                    value={formData.personalInfo.email}
                    onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <Label>Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    type="tel"
                    placeholder="+1 (123) 456-7890" 
                    className="pl-10"
                    value={formData.personalInfo.phone}
                    onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Education Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Degree</Label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Bachelor's in Computer Science" 
                    className="pl-10"
                    value={formData.education.degree}
                    onChange={(e) => handleInputChange('education', 'degree', e.target.value)}
                  />
                  {errors.degree && (
                    <p className="text-red-500 text-sm mt-1">{errors.degree}</p>
                  )}
                </div>
              </div>
              <div>
                <Label>Institution</Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="University Name" 
                    className="pl-10"
                    value={formData.education.institution}
                    onChange={(e) => handleInputChange('education', 'institution', e.target.value)}
                  />
                  {errors.institution && (
                    <p className="text-red-500 text-sm mt-1">{errors.institution}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Graduation Year */}
            <div>
              <Label>Graduation Year</Label>
              <Select
                value={formData.education.graduationYear}
                onValueChange={(value) => handleInputChange('education', 'graduationYear', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Graduation Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.graduationYear && (
                <p className="text-red-500 text-sm mt-1">{errors.graduationYear}</p>
              )}
            </div>

            {/* Resume Upload */}
            <div>
              <Label>Resume</Label>
              <div className="relative">
                <FileUp className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  type="file" 
                  ref={resumeInputRef}
                  className="pl-10"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                />
                {formData.resume && (
                  <p className="text-sm text-green-600 mt-1">
                    {formData.resume.name} uploaded
                  </p>
                )}
                {errors.resume && (
                  <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
                )}
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <Label>Cover Letter</Label>
              <Textarea 
                placeholder="Write your cover letter here..." 
                value={formData.coverLetter}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  coverLetter: e.target.value
                }))}
                className="min-h-[150px]"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit Application</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default JobApplicationForm;