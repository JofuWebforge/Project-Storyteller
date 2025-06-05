import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Graphs from './pages/Graphs'
import Stories from './pages/Stories'
import Templates from './pages/Templates'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/graphs" element={
                  <ProtectedRoute>
                    <Graphs />
                  </ProtectedRoute>
                } />
                <Route path="/templates" element={<Templates />} />
                <Route path="/stories" element={
                  <ProtectedRoute>
                    <Stories />
                  </ProtectedRoute>
                } />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App