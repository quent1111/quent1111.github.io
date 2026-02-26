import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DrGerardPage from './pages/DrGerardPage'
import DrLlabresPage from './pages/DrLlabresPage'
import DrGuilleminPage from './pages/DrGuilleminPage'

export default function App() {
  const location = useLocation()

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/dr-gerard" element={<DrGerardPage />} />
              <Route path="/dr-llabres" element={<DrLlabresPage />} />
              <Route path="/dr-guillemin" element={<DrGuilleminPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
