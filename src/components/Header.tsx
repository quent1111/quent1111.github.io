import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, AlertTriangle, Phone, ShieldAlert } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [emergencyOpen, setEmergencyOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLanguage, t } = useLanguage()
  const location = useLocation()

  const isHome = location.pathname === '/'
  // Pages that have a dark hero where the navbar should be transparent
  const hasDarkHero = isHome || location.pathname.startsWith('/dr-')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: t('Accueil', 'Home') },
    { to: '/dr-gerard', label: 'Dr Gerard' },
    { to: '/dr-llabres', label: 'Dr Llabres' },
    { to: '/dr-guillemin', label: 'Dr Guillemin' },
  ]

  // On pages with dark heroes: transparent header that becomes solid on scroll
  const transparent = hasDarkHero && !scrolled
  const headerBg = transparent
    ? 'bg-transparent border-transparent'
    : 'bg-white/80 backdrop-blur-lg border-gray-100 shadow-sm'

  const textColor = transparent ? 'text-white' : 'text-gray-600'
  const activeTextColor = transparent ? 'text-white bg-white/15' : 'text-primary bg-primary-50'
  const hoverColor = transparent ? 'hover:text-white hover:bg-white/10' : 'hover:text-primary hover:bg-gray-50'
  const logoFilter = transparent ? 'brightness-0 invert' : ''

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="/ressources/images/logo.png"
                alt="Logo Sour'Yon"
                className={`h-14 w-auto transition-all duration-500 ${logoFilter}`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.to
                      ? activeTextColor
                      : `${textColor} ${hoverColor}`
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-sm font-medium ${
                  transparent
                    ? 'border-white/25 hover:bg-white/10 text-white'
                    : 'border-gray-200 hover:border-primary/30 hover:bg-primary-50 text-gray-600'
                }`}
              >
                <img
                  src={lang === 'fr' ? '/ressources/images/france_flag.png' : '/ressources/images/english_flag.png'}
                  alt={lang === 'fr' ? 'FR' : 'EN'}
                  className="w-5 h-5 rounded-full object-cover"
                />
                {lang === 'fr' ? 'FR' : 'EN'}
              </button>

              <button
                onClick={() => setEmergencyOpen(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
              >
                <AlertTriangle className="w-4 h-4" />
                {t('Urgences', 'Emergency')}
              </button>

              <button
                onClick={() => setEmergencyOpen(true)}
                className="sm:hidden p-2 bg-red-500 text-white rounded-full"
                aria-label="Emergency"
              >
                <AlertTriangle className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  transparent ? 'text-white hover:bg-white/10' : 'hover:bg-gray-100'
                }`}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-100 overflow-hidden"
            >
              <nav className="px-4 py-3 space-y-1 bg-white">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? 'text-primary bg-primary-50'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Emergency Drawer */}
      <AnimatePresence>
        {emergencyOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={() => setEmergencyOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[61] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-xl">
                      <ShieldAlert className="w-6 h-6 text-red-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {t('Consignes d\'urgence', 'Emergency Instructions')}
                    </h2>
                  </div>
                  <button
                    onClick={() => setEmergencyOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      {t('En cas d\'urgence', 'In case of emergency')}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                        <span>
                          <strong className="text-gray-800">{t('Saignement important', 'Heavy bleeding')}</strong> : {t(
                            'compressez la zone avec des compresses stériles ou, à défaut, un linge propre. Contactez immédiatement le cabinet ou le service d\'urgences le plus proche.',
                            'Apply pressure to the area with sterile gauze or a clean cloth. Immediately contact our practice or the nearest emergency department.'
                          )}
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                        <span>
                          <strong className="text-gray-800">{t('Douleur aiguë ou infection', 'Severe pain or infection')}</strong> : {t(
                            'prenez un antalgique conseillé par votre pharmacien (évitez l\'aspirine qui favorise le saignement) et appelez le cabinet pour un rendez-vous en urgence.',
                            'Take a painkiller recommended by your pharmacist (avoid aspirin, as it promotes bleeding) and call the practice for an emergency appointment.'
                          )}
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                        <span>
                          <strong className="text-gray-800">{t('Traumatisme facial', 'Facial trauma')}</strong> {t('(chute, coup, accident)', '(fall, blow, accident)')} : {t(
                            'protégez la zone, appliquez si possible du froid (glace entourée d\'un linge) et rendez-vous rapidement aux urgences.',
                            'Protect the area, apply cold if possible (ice wrapped in a cloth), and go quickly to an emergency department.'
                          )}
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                        <span>
                          <strong className="text-gray-800">{t('Sutures ou pansements arrachés', 'Torn sutures or dressings')}</strong> : {t(
                            'désinfectez la plaie avec un antiseptique doux et contactez le cabinet pour une évaluation.',
                            'Disinfect the wound with a mild antiseptic and contact the practice for evaluation.'
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      {t('Numéros utiles', 'Useful numbers')}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{t('SAMU (urgences vitales)', 'SAMU (vital emergencies)')}</span>
                        <a href="tel:15" className="font-bold text-primary text-lg">15</a>
                      </li>
                      <li className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{t('Pompiers', 'Fire Department')}</span>
                        <a href="tel:18" className="font-bold text-primary text-lg">18</a>
                      </li>
                      <li className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{t('Urgences Europe', 'European Emergency')}</span>
                        <a href="tel:112" className="font-bold text-primary text-lg">112</a>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('En soirée, week-end et jours fériés', 'During evenings, weekends, and public holidays')}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex gap-2">
                        <span className="text-amber-500 flex-shrink-0">•</span>
                        {t(
                          'Composez le 15 pour joindre le régulateur SAMU, qui vous orientera vers le service de garde adapté.',
                          'Dial 15 to reach the SAMU call center, which will direct you to the appropriate on-call service.'
                        )}
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-500 flex-shrink-0">•</span>
                        {t(
                          'Consultez également la messagerie du cabinet, qui peut indiquer un numéro d\'astreinte ou un service d\'urgences dentaires/faciales.',
                          'Also check our office voicemail, which may list an on-call number or an emergency dental/facial service.'
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
