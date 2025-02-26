import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import JobPortal from './pages/JobPortal'
import JobApplicationForm from './pages/Application'
import Landing from './pages/Landing'
import AuthCard from './components/auth'
import { JobPost } from './pages/JobPost'
import { YourJobs } from './components/yourJobs'
import RecruiterDashboard from './pages/RecruiterDashboard'
import UserDashboard from './pages/UserDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/jobPortal" element={<JobPortal/>} />
      <Route path='/apply' element={<JobApplicationForm jobId={1} jobTitle='Senior React Developer' />}/>
      <Route path="/addJob" element={<JobPost />} />
      <Route path='/auth' element={<AuthCard/>}/>
      <Route path='/user' element={<UserDashboard/>}/>
      <Route path="/recruiter" element={<RecruiterDashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
