import { supabase } from '../lib/supabase'

export default function AdminDashboard({ role }) {
  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const getRoleTitle = () => {
    switch (role) {
      case 'super_admin':
        return 'Super Admin'
      case 'manager':
        return 'Manager'
      case 'moderator':
        return 'Moderator'
      default:
        return 'Admin'
    }
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
              <span className="text-xl font-bold text-gray-900">MediPredict Admin</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {getRoleTitle()}
              </span>
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
          <h1 className="text-3xl font-bold text-gray-900">
            {getRoleTitle()} Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Platform management and analytics.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-users text-blue-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">0</h3>
            <p className="text-gray-600">Total Users</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-university text-green-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">776</h3>
            <p className="text-gray-600">Medical Colleges</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-book text-purple-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">0</h3>
            <p className="text-gray-600">Study Materials</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-rupee-sign text-yellow-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">₹0</h3>
            <p className="text-gray-600">Total Revenue</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              {(role === 'manager' || role === 'super_admin') && (
                <>
                  <button className="w-full flex items-center justify-between p-4 border-2 border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                    <span className="font-medium">Manage Colleges</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  <button className="w-full flex items-center justify-between p-4 border-2 border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                    <span className="font-medium">Review Materials</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </>
              )}
              <button className="w-full flex items-center justify-between p-4 border-2 border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                <span className="font-medium">View Reports</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button className="w-full flex items-center justify-between p-4 border-2 border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                <span className="font-medium">Manage Users</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Recent Activity
            </h2>
            <div className="text-center py-8 text-gray-500">
              <i className="fas fa-chart-line text-4xl mb-2"></i>
              <p>No recent activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
