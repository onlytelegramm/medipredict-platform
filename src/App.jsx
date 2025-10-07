import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import StudentDashboard from './pages/StudentDashboard'
import MentorDashboard from './pages/MentorDashboard'
import AdminDashboard from './pages/AdminDashboard'
import CollegePrediction from './pages/CollegePrediction'
import CollegeDetails from './pages/CollegeDetails'
import Marketplace from './pages/Marketplace'

function App() {
  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchUserRole(session.user.id)
      } else {
        setLoading(false)
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchUserRole(session.user.id)
      } else {
        setUserRole(null)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchUserRole = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('role')
        .eq('id', userId)
        .maybeSingle()

      if (error) throw error
      setUserRole(data?.role || 'student')
    } catch (error) {
      console.error('Error fetching user role:', error)
      setUserRole('student')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={user ? <Navigate to="/dashboard" /> : <AuthPage />} />

        <Route
          path="/dashboard"
          element={
            user ? (
              userRole === 'mentor' ? (
                <MentorDashboard />
              ) : userRole && ['moderator', 'manager', 'super_admin'].includes(userRole) ? (
                <AdminDashboard role={userRole} />
              ) : (
                <StudentDashboard />
              )
            ) : (
              <Navigate to="/auth" />
            )
          }
        />

        <Route
          path="/predict"
          element={user ? <CollegePrediction /> : <Navigate to="/auth" />}
        />

        <Route
          path="/college/:id"
          element={user ? <CollegeDetails /> : <Navigate to="/auth" />}
        />

        <Route
          path="/marketplace"
          element={user ? <Marketplace /> : <Navigate to="/auth" />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
