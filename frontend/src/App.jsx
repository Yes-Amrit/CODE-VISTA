import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { Route, Routes, Navigate } from 'react-router'
import HomePage from './pages/HomePage'
import ProblemPage from './pages/ProblemPage'
import DashboardPage from './pages/DashboardPage'
import { Toaster } from 'react-hot-toast';

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
    </Routes>

    <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App

// tw, daisyUi, react-router, react-hot-toast
// todo: react-query aka tanstack query, axios