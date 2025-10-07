import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-heartbeat text-white"></i>
              </div>
              <span className="text-xl font-bold text-gray-900">MediPredict</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">
                Home
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#colleges"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Colleges
              </a>
              <a
                href="#materials"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Materials
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                About
              </a>
            </div>

            <Link
              to="/auth"
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <span>Login</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <i className="fas fa-star text-yellow-500"></i>
              <span className="text-sm font-medium text-gray-700">
                India's #1 NEET College Predictor
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Dream
              <br />
              <span className="gradient-text">Medical College</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get instant, accurate predictions for{' '}
              <span className="font-semibold text-primary-600">776+ medical colleges</span>{' '}
              across India based on your NEET rank
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/auth"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
              >
                Get Started Free
              </Link>
              <button className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-lg font-medium text-lg hover:bg-primary-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                <i className="fas fa-search text-primary-500 mr-2"></i>
                Quick College Prediction
              </h2>
              <p className="text-gray-600">
                Enter your details to discover colleges matching your NEET score
              </p>
            </div>

            <form className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  NEET Rank
                </label>
                <input
                  type="number"
                  placeholder="Enter your AIR"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">Select category</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="ews">EWS</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">Select state</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <Link
                  to="/auth"
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <span>Predict My Colleges</span>
                  <i className="fas fa-brain"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Students Trust Us
            </h2>
            <p className="text-xl text-gray-600">
              Proven track record of helping thousands of students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-brain',
                title: 'Advanced Algorithm',
                desc: '5 years of historical data with 95%+ accuracy',
              },
              {
                icon: 'fa-bolt',
                title: 'Instant Results',
                desc: 'Get predictions in less than 1 second',
              },
              {
                icon: 'fa-shield-alt',
                title: '100% Free & Secure',
                desc: 'Your data is encrypted and never shared',
              },
              {
                icon: 'fa-database',
                title: 'Comprehensive Data',
                desc: '776+ medical colleges coverage',
              },
              {
                icon: 'fa-graduation-cap',
                title: 'Study Materials',
                desc: 'Access premium notes from top students',
              },
              {
                icon: 'fa-users',
                title: 'Expert Mentors',
                desc: 'Connect with seniors from target colleges',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                  <i className={`fas ${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '776+', label: 'Medical Colleges', icon: 'fa-university' },
              { value: '15,000+', label: 'Students Helped', icon: 'fa-users' },
              { value: '95%', label: 'Accuracy Rate', icon: 'fa-chart-line' },
              { value: '5 Years', label: 'Historical Data', icon: 'fa-clock' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <i
                  className={`fas ${stat.icon} text-4xl text-primary-500 mb-4`}
                ></i>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About MediPredict
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                India's most trusted NEET college predictor platform, founded with a
                mission to simplify medical college admissions for aspiring doctors.
              </p>
              <div className="space-y-4">
                {[
                  'Founded in 2020',
                  '15,000+ Students Successfully Guided',
                  '95%+ Prediction Accuracy',
                  '776+ Medical Colleges Database',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                <i className="fas fa-hospital text-white text-9xl opacity-20"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-heartbeat text-white"></i>
                </div>
                <span className="text-xl font-bold">MediPredict</span>
              </div>
              <p className="text-gray-400">
                India's most trusted NEET college predictor and educational marketplace.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MediPredict. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
