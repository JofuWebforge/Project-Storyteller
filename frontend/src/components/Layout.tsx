import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { user, signOut, loading, isDemoMode, exitDemoMode } = useAuth()

  const handleSignOut = async () => {
    try {
      if (isDemoMode) {
        exitDemoMode()
      } else {
        await signOut()
      }
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">
                  KnowledgeNexus
                </h1>
              </Link>
              {user && (
                <div className="ml-10 flex items-center space-x-4">
                  <Link
                    to="/graphs"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    My Graphs
                  </Link>
                  <Link
                    to="/templates"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Templates
                  </Link>
                  <Link
                    to="/stories"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Stories
                  </Link>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              {loading ? (
                <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
              ) : user ? (
                <div className="flex items-center space-x-4">
                  {isDemoMode && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm font-medium">
                      Demo Mode
                    </span>
                  )}
                  <span className="text-sm text-gray-700">
                    {user.user_metadata?.name || user.email}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    {isDemoMode ? 'Exit Demo' : 'Sign Out'}
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}