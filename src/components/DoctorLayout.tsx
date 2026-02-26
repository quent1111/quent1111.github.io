import type { ReactNode } from 'react'
import { MapPin, Phone, Mail, Calendar } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition from '../components/PageTransition'
import Section from '../components/Section'

interface ContactInfo {
  address: string
  phone: string
  phoneHref: string
  email: string
  emailHref: string
  doctolib: string
  doctolibLabel: string
}

interface DoctorLayoutProps {
  photoSrc: string
  photoAlt: string
  name: string
  aboutTitle: string
  aboutContent: ReactNode
  expertiseTitle: string
  expertiseCards: { icon: ReactNode; title: string; description: string }[]
  detailSection?: ReactNode
  contact: ContactInfo
}

export default function DoctorLayout({
  photoSrc,
  photoAlt,
  name,
  aboutTitle,
  aboutContent,
  expertiseTitle,
  expertiseCards,
  detailSection,
  contact,
}: DoctorLayoutProps) {
  const { t } = useLanguage()

  return (
    <PageTransition>
      {/* Doctor Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start order-1 lg:order-none">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-200/40 rounded-full blur-2xl" />
                <img
                  src={photoSrc}
                  alt={photoAlt}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-white shadow-2xl"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {name}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{aboutTitle}</h1>
              <div className="text-gray-500 leading-relaxed space-y-4">{aboutContent}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            {expertiseTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseCards.map((card, i) => (
              <div
                key={i}
                className="bg-surface rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary">{card.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Detailed Section */}
      {detailSection}

      {/* Contact */}
      <Section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Contact
          </h2>
          <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
            <ContactItem
              icon={<MapPin className="w-5 h-5" />}
              title={t('Adresse', 'Address')}
              value={contact.address}
            />
            <ContactItem
              icon={<Phone className="w-5 h-5" />}
              title={t('Téléphone', 'Phone')}
              value={contact.phone}
              href={contact.phoneHref}
            />
            <ContactItem
              icon={<Mail className="w-5 h-5" />}
              title="E-mail"
              value={contact.email}
              href={contact.emailHref}
            />
            <ContactItem
              icon={<Calendar className="w-5 h-5" />}
              title={t('Prendre Rendez-vous', 'Book an Appointment')}
              value={contact.doctolibLabel}
              href={contact.doctolib}
              external
            />
          </div>
        </div>
      </Section>
    </PageTransition>
  )
}

function ContactItem({
  icon,
  title,
  value,
  href,
  external,
}: {
  icon: ReactNode
  title: string
  value: string
  href?: string
  external?: boolean
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
          <span className="text-primary">{icon}</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
          {href ? (
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-primary text-sm font-medium hover:underline"
            >
              {value}
            </a>
          ) : (
            <p className="text-gray-500 text-sm">{value}</p>
          )}
        </div>
      </div>
    </div>
  )
}
