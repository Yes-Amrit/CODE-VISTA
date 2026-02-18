import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { Route, Routes, Navigate } from 'react-router'
import HomePage from './pages/HomePage'
import ProblemPage from './pages/ProblemPage'
import DashboardPage from './pages/DashboardPage'
import { Toaster } from 'react-hot-toast';
import ProblemStatement from './pages/ProblemStatement'

function App() {
  const {isSignedIn, isLoaded} = useUser();

  // this will get rid of flickering effect
  if(!isLoaded) return null;
  return (
    <>
    <Routes>
      <Route path="/" element = { !isSignedIn ? < HomePage /> : <Navigate to= {"/dashboard"} /> } />
      <Route path="/dashboard" element = { isSignedIn ? < DashboardPage /> : <Navigate to= {"/"} /> } />


      <Route path="/problems" element = {isSignedIn ? < ProblemPage /> : <Navigate to={"/"} />} />
      <Route path="/problem/:id" element = {isSignedIn ? < ProblemStatement /> : <Navigate to={""} />} />
    </Routes>

    <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App
