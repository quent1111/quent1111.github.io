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
  const isHome = location.pathname === '/'
  const hasDarkHero = isHome || location.pathname.startsWith('/dr-')

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <ScrollToTop />
        <Header />
        {/* Spacer for fixed header on pages without dark hero */}
        {!hasDarkHero && <div className="h-20" />}
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
