import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Home() {
  const { enterDemoMode } = useAuth()
  const navigate = useNavigate()

  const handleDemoMode = () => {
    enterDemoMode()
    navigate('/graphs')
  }

  return (
    <div className="py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Transform Knowledge into{' '}
          <span className="text-blue-600">Interactive Stories</span>
        </h1>
        <div className="mt-4 p-4 bg-green-500 text-white rounded-lg font-bold text-center">
          <button 
            onClick={handleDemoMode}
            className="bg-white text-green-600 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            🚀 Try Demo Mode - No Sign Up Required!
          </button>
        </div>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Create visual knowledge graphs and bring them to life with AI-powered narratives, 
          voice narration, and stunning visuals.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/signup"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get Started Free
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to="/templates"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              View Templates
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-600 mb-4">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Visual Knowledge Graphs</h3>
            <p className="mt-2 text-base text-gray-500">
              Create interactive graphs with nodes and relationships to visualize complex knowledge domains.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-600 mb-4">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">AI-Powered Stories</h3>
            <p className="mt-2 text-base text-gray-500">
              Transform your knowledge graphs into engaging narratives with GPT-4 powered storytelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-600 mb-4">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Voice & Visuals</h3>
            <p className="mt-2 text-base text-gray-500">
              Bring stories to life with natural voice narration and AI-generated images.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}