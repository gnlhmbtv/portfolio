import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LangProvider } from './context/LangContext'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import './App.css'

function App() {
  return (
    <LangProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <Layout>
              <ProjectPage />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LangProvider>
  )
}

export default App
