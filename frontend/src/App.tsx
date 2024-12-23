import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import JobPortal from './pages/JobPortal'
import JobApplicationForm from './pages/Application'
import Landing from './pages/Landing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/jobPortal" element={<JobPortal/>} />
      <Route path='/apply' element={<JobApplicationForm jobId={1} jobTitle='Senior React Developer' />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
