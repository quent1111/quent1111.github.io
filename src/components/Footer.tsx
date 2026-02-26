import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/ressources/images/logo.png"
              alt="Logo Sour'Yon"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t(
                'Spécialisé dans la prise en charge des pathologies de la bouche et du visage.',
                'Specialized in treating oral and facial pathologies.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {t('Navigation', 'Navigation')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('Accueil', 'Home')}
                </Link>
              </li>
              <li>
                <Link to="/dr-gerard" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Dr Gerard
                </Link>
              </li>
              <li>
                <Link to="/dr-llabres" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Dr Llabres
                </Link>
              </li>
              <li>
                <Link to="/dr-guillemin" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Dr Guillemin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>11 Bd René Lévesque,<br />85000 La Roche-sur-Yon</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:0251444495" className="hover:text-white transition-colors">02 51 44 44 95</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:stomato.csc@sa3h.fr" className="hover:text-white transition-colors">stomato.csc@sa3h.fr</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {t('Horaires', 'Hours')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>{t('Lundi - Vendredi', 'Monday - Friday')}</p>
                  <p className="text-white font-medium">8h - 12h / 14h - 18h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; 2025 Cabinet Médical Sour'Yon. {t('Tous droits réservés.', 'All rights reserved.')}
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              {t('Mentions Légales', 'Legal Notice')}
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              {t('Politique de Confidentialité', 'Privacy Policy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
