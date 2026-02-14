import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { Route, Routes, Navigate } from 'react-router'
import HomePage from './pages/HomePage'
import ProblemPage from './pages/ProblemPage'
import { Toaster } from 'react-hot-toast';

function App() {
  const {isSignedIn} = useUser();
  return (
    <>
    <Routes>
      <Route path="/" element = {< HomePage />} />
      <Route path="/problems" element = {isSignedIn ? < ProblemPage /> : <Navigate to={"/"} />} />
    </Routes>

    <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App

// tw, daisyUi, react-router, react-hot-toast
// todo: react-query aka tanstack query, axios