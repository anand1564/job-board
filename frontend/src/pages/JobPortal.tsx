import  { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, MapPin, Briefcase, DollarSign } from 'lucide-react';
import { AddJob } from '@/components/addJob';
import { useNavigate, useParams } from 'react-router-dom';

// Job Interface
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  skills: string[];
  type: 'Full-Time' | 'Part-Time' | 'Contract';
}

// Sample Job Data
const initialJobs: Job[] = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    description: 'We are seeking a talented React developer to join our frontend team.',
    skills: ['React', 'TypeScript', 'Redux', 'GraphQL'],
    type: 'Full-Time'
  },
  {
    id: 2,
    title: 'Frontend Engineer',
    company: 'WebSolutions LLC',
    location: 'New York, NY',
    salary: '$90,000 - $110,000',
    description: 'Build modern, responsive web applications using cutting-edge technologies.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    type: 'Full-Time'
  }
];

// Job Card Component
const JobCard: React.FC<{ job: Job, onApply: (job: Job) => void }> = ({ job, onApply }) => {
  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{job.title}</CardTitle>
          <Button size="sm" onClick={() => onApply(job)}>Apply Now</Button>
        </div>
        <div className="text-sm text-muted-foreground">{job.company}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-muted-foreground" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-muted-foreground" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-muted-foreground" />
            <span>{job.type}</span>
          </div>
          <p className="text-sm mt-2">{job.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.skills.map(skill => (
              <span key={skill} className="bg-primary/10 px-2 py-1 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Job Application Modal Component
const JobApplicationModal: React.FC<{ 
  job: Job | null, 
  onClose: () => void 
}> = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null as File | null
  });

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement actual application submission logic
    alert(`Applied to ${job.title} at ${job.company}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Apply for {job.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              placeholder="Full Name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <Input 
              type="email" 
              placeholder="Email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <Input 
              type="file" 
              placeholder="Upload Resume" 
              onChange={(e) => setFormData({...formData, resume: e.target.files?.[0] || null})}
            />
            <Button type="submit" className="w-full">Submit Application</Button>
          </form>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// Main Job Portal Component
const JobPortal: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(initialJobs);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState<string>('');
  const [userRole, setUserRole] = useState<string>('JOB_SEEKER');
  const { userId } = useParams<{ userId: string }>();
  const [loading,setLoading]=useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser=async()=>{
      try{
    const response = await fetch(`http://localhost:3000/user/${userId}/role`)
    if(!response){
      throw new Error('Failed to fetch user role')
    }
    const role = await response.json();
    setUserRole(role);
  }catch(err){
    console.error(err);
  }finally{
    setLoading(false);
  }
  }
  fetchUser();
  }, [userId]);

  if(loading){
    return <div>Loading...</div>
  }
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredJobs(filtered);
  };
  const handleAddJob=()=>{
    navigate(`${userId}/addJob`);
  }
  return (
    <div className="container mx-auto p-4">
      <div className='flex justify-between items-center space-between'>
      <h1 className="text-3xl font-bold mb-6">Job Portal</h1>
      {userRole === 'RECRUITER' && (
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleAddJob}>Add Job</button>
      )}
      </div>
      <div className="flex gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search jobs..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Select value={jobType} onValueChange={setJobType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Full-Time">Full-Time</SelectItem>
            <SelectItem value="Part-Time">Part-Time</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredJobs.map(job => (
          <JobCard 
            key={job.id} 
            job={job} 
            onApply={(selectedJob) => setSelectedJob(selectedJob)} 
          />
        ))}
      </div>

      {selectedJob && (
        <JobApplicationModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}
    </div>
  );
};

export default JobPortal;