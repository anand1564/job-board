import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import JobPortal from './pages/JobPortal'
import JobApplicationForm from './pages/Application'
import Landing from './pages/Landing'
import AuthCard from './components/auth'
import { JobPost } from './pages/JobPost'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/:userId/jobPortal" element={<JobPortal/>} />
      <Route path='/apply' element={<JobApplicationForm jobId={1} jobTitle='Senior React Developer' />}/>
      <Route path="/addJob" element={<JobPost />} />
      <Route path='/auth' element={<AuthCard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
