import { supabase } from '../lib/supabase'

export default function MentorDashboard() {
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

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mentor Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage your study materials and track earnings.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-rupee-sign text-green-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">₹0</h3>
            <p className="text-gray-600">Total Earnings</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-file-alt text-blue-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">0</h3>
            <p className="text-gray-600">Materials Uploaded</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-shopping-cart text-purple-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">0</h3>
            <p className="text-gray-600">Total Sales</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-star text-yellow-600 text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">0.0</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">My Study Materials</h2>
            <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              <i className="fas fa-plus mr-2"></i>
              Upload New Material
            </button>
          </div>

          <div className="text-center py-12 text-gray-500">
            <i className="fas fa-folder-open text-5xl mb-4"></i>
            <p className="text-lg">No materials uploaded yet</p>
            <p className="text-sm">Start earning by sharing your study notes!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
