import { type ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Calendar, ArrowUpRight, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition from './PageTransition'

/* ─── Types ──────────────────────────────────────────────────── */
interface ContactInfo {
  address: string
  phone: string
  phoneHref: string
  email: string
  emailHref: string
  doctolib: string
  doctolibLabel: string
}

interface ExpertiseCard {
  icon: ReactNode
  title: string
  description: string
}

interface DoctorLayoutProps {
  photoSrc: string
  photoAlt: string
  name: string
  firstName: string
  lastName: string
  subtitle: string
  aboutContent: ReactNode
  expertiseCards: ExpertiseCard[]
  detailSection?: ReactNode
  contact: ContactInfo
  accentColor?: string
  /** When true, the hero stacks vertically so long bio text never overflows */
  tallHero?: boolean
}

/* ─── Main Layout ────────────────────────────────────────────── */
export default function DoctorLayout({
  photoSrc,
  photoAlt,
  firstName,
  lastName,
  subtitle,
  aboutContent,
  expertiseCards,
  detailSection,
  contact,
  tallHero = false,
}: DoctorLayoutProps) {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <PageTransition>
      {/* ═══════════ HERO — CINEMATIC SPLIT ═══════════════════ */}
  <section ref={heroRef} className={`relative overflow-hidden bg-[#0a0f1a] ${tallHero ? 'pt-28 pb-20 lg:pt-32 lg:pb-24' : 'min-h-screen'}`}>
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-500/6 blur-[130px]" />
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }} />

        {/* Horizontal decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent origin-left"
        />

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`grid lg:grid-cols-12 gap-8 lg:gap-0 ${tallHero ? 'py-0' : 'min-h-screen'} items-center`}>

            {/* Left — Photo with layered frame */}
            <motion.div
              style={{ y: photoY, opacity }}
              className="lg:col-span-5 flex justify-center lg:justify-start pt-28 lg:pt-0"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Decorative floating frame */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -top-4 -left-4 w-full h-full border border-primary/25 rounded-[2rem]"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-4 -right-4 w-full h-full border border-white/5 rounded-[2rem]"
                />
                {/* Glow */}
                <div className="absolute -inset-8 bg-primary/10 rounded-[3rem] blur-3xl" />
                {/* Photo */}
                <img
                  src={photoSrc}
                  alt={photoAlt}
                  className="relative w-72 h-[26rem] sm:w-80 sm:h-[28rem] lg:w-[22rem] lg:h-[30rem] object-cover object-top rounded-[2rem] shadow-2xl shadow-black/40"
                />
                {/* Vertical accent line */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 80 }}
                  transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
                  className="absolute -right-8 top-1/2 -translate-y-1/2 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent"
                />
              </motion.div>
            </motion.div>

            {/* Right — Text content */}
            <motion.div
              style={{ y: textY, opacity }}
              className="lg:col-span-7 lg:pl-16 xl:pl-24 pb-16 lg:pb-0"
            >
              {/* Specialty label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px w-10 bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">
                  {subtitle}
                </span>
              </motion.div>

              {/* Name — Large typographic treatment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="mb-2">
                  <span className="block text-white/40 text-lg sm:text-xl font-light tracking-wider">Dr.</span>
                  <span className={`block font-black text-white tracking-tight leading-[0.9] ${tallHero ? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl' : 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'}`}>
                    {firstName}
                  </span>
                  <span className={`block font-black tracking-tight leading-[0.9] bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent ${tallHero ? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl' : 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'}`}>
                    {lastName}
                  </span>
                </h1>
              </motion.div>

              {/* Bio text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`mt-8 text-white/55 leading-relaxed max-w-2xl break-words whitespace-normal space-y-4 ${tallHero ? 'text-xs sm:text-sm md:text-base' : 'text-sm sm:text-base md:text-lg'}`}
              >
                {aboutContent}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  href={contact.doctolib}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <Calendar className="relative w-5 h-5" />
                  <span className="relative">{t('Prendre rendez-vous', 'Book an appointment')}</span>
                  <ArrowUpRight className="relative w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {contact.phone}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade to white */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════════ EXPERTISE — NUMBERED CARDS ══════════════ */}
      <ExpertiseSection cards={expertiseCards} />

      {/* ═══════════ DETAIL (per-doctor) ═════════════════════ */}
      {detailSection}

      {/* ═══════════ CONTACT — ASYMMETRIC LAYOUT ════════════ */}
      <ContactSection contact={contact} />
    </PageTransition>
  )
}

/* ─── Expertise Section ──────────────────────────────────────── */
function ExpertiseSection({ cards }: { cards: ExpertiseCard[] }) {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-white overflow-hidden">
      {/* Large decorative text in background */}
      <div className="absolute top-12 left-0 right-0 text-center pointer-events-none select-none">
        <span className="text-[10rem] sm:text-[14rem] md:text-[18rem] font-black text-gray-50 leading-none tracking-tighter">
          {t('EXPERT', 'EXPERT')}
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">
              {t('Spécialités', 'Specialties')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t("Domaines d'", 'Areas of')}<br />
            <span className="text-primary">{t('Expertise', 'Expertise')}</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative"
            >
              {/* Number background */}
              <span className="absolute -top-6 -left-2 text-[8rem] font-black text-gray-100 leading-none select-none pointer-events-none group-hover:text-primary/8 transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-10 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                {/* Top accent bar */}
                <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-primary via-sky-400 to-primary rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Section ────────────────────────────────────────── */
function ContactSection({ contact }: { contact: ContactInfo }) {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const items = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t('Adresse', 'Address'),
      value: contact.address,
      href: undefined as string | undefined,
      external: false,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t('Téléphone', 'Phone'),
      value: contact.phone,
      href: contact.phoneHref,
      external: false,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'E-mail',
      value: contact.email,
      href: contact.emailHref,
      external: false,
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: t('Prendre Rendez-vous', 'Book an Appointment'),
      value: contact.doctolibLabel,
      href: contact.doctolib,
      external: true,
    },
  ]

  return (
  <section ref={ref} className="relative py-28 md:py-36 bg-[#0a0f1a] overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary/50" />
              <span className="text-primary/70 text-xs font-bold uppercase tracking-[0.25em]">
                Contact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              {t('Prenons', "Let's get")}<br />
              <span className="text-primary">{t('rendez-vous', 'in touch')}</span>
            </h2>
            <p className="text-white/40 leading-relaxed mb-10 max-w-md">
              {t(
                "N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous.",
                "Don't hesitate to contact us for any question or to book an appointment."
              )}
            </p>
            <a
              href={contact.doctolib}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              {t('Réserver sur Doctolib', 'Book on Doctolib')}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right - Contact cards */}
          <div className="space-y-4">
            {items.map((item, i) => {
              const Tag = item.href ? 'a' : 'div'
              const linkProps = item.href
                ? {
                    href: item.href,
                    target: item.external ? ('_blank' as const) : undefined,
                    rel: item.external ? 'noopener noreferrer' : undefined,
                  }
                : {}
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                >
                  <Tag
                    {...linkProps}
                    className="group flex items-center gap-5 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-primary/20 rounded-2xl px-6 py-5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="block text-white/35 text-xs font-semibold uppercase tracking-wider mb-0.5">
                        {item.label}
                      </span>
                      <span className="block text-white/80 text-sm font-medium truncate group-hover:text-white transition-colors">
                        {item.value}
                      </span>
                    </div>
                    {item.href && (
                      <ArrowUpRight className="w-4 h-4 text-white/20 ml-auto shrink-0 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </Tag>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
