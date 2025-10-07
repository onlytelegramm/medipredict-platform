import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function StudentDashboard() {
  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-heartbeat text-white"></i>
              </div>
              <span className="text-xl font-bold text-gray-900">MediPredict</span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/predict"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Predict Colleges
              </Link>
              <Link
                to="/marketplace"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Study Materials
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's your overview.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-graduation-cap text-blue-600 text-xl"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">0</h3>
            <p className="text-gray-600">Saved Colleges</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-book text-green-600 text-xl"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">0</h3>
            <p className="text-gray-600">Purchased Materials</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-search text-purple-600 text-xl"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">0</h3>
            <p className="text-gray-600">Predictions Made</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link
                to="/predict"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <span className="font-medium">Predict My Colleges</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link
                to="/marketplace"
                className="flex items-center justify-between p-4 border-2 border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <span className="font-medium">Browse Study Materials</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Recent Activity
            </h2>
            <div className="text-center py-8 text-gray-500">
              <i className="fas fa-inbox text-4xl mb-2"></i>
              <p>No recent activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
