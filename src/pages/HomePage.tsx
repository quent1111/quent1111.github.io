import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  AlertTriangle,
  FileText,
  Scan,
  Pill,
  CreditCard,
  Clock,
  Users,
  Stethoscope,
  ChevronDown,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition from '../components/PageTransition'
import Section from '../components/Section'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <PageTransition>
      {/* Hero — full-viewport with clinic photo */}
      <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/ressources/images/carrousel1.webp"
            alt="Clinique Saint Charles"
            className="w-full h-full object-cover object-bottom"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />
          {/* Accent gradient at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary-800/40 to-transparent" />
        </div>

        {/* Floating glass card with content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 px-5 py-2 rounded-full text-sm font-medium mb-8 border border-white/20"
            >
              <Stethoscope className="w-4 h-4" />
              {t('Clinique Saint Charles, La Roche sur Yon', 'Clinique Saint Charles, La Roche sur Yon')}
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
              {t('Bienvenue au', 'Welcome to')}
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
                Cabinet Sour'Yon
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
              {t(
                'Spécialisé dans la prise en charge des pathologies de la bouche et du visage, notre équipe vous accueille pour des consultations et interventions au sein de la Clinique Saint Charles, à La Roche sur Yon.',
                'Specialized in treating oral and facial pathologies, our team welcomes you for consultations and procedures at Clinique Saint Charles, in La Roche sur Yon.'
              )}
            </p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://www.doctolib.fr/cabinet-medical/la-roche-sur-yon/stomatologistes-clinique-saint-charles"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-2xl shadow-black/20 hover:shadow-white/20 hover:scale-105"
              >
                <Calendar className="w-5 h-5 text-primary" />
                {t('Prendre rendez-vous', 'Book an appointment')}
                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </a>
              <a
                href="tel:0251444495"
                className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <Phone className="w-5 h-5" />
                02 51 44 44 95
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs font-medium tracking-widest uppercase">{t('Découvrir', 'Discover')}</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Team Section */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                {t('Notre Équipe', 'Our Team')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('Une équipe à votre service', 'A team at your service')}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                <strong className="text-gray-700">{t('Toute l\'équipe du cabinet Sour\'Yon', 'The entire Sour\'Yon team')}</strong> {t(
                  'vous accueille pour la prise en charge des pathologies de la bouche et du visage au sein de la',
                  'welcomes you for the treatment of oral and facial pathologies at'
                )} <strong className="text-gray-700">Clinique Saint Charles</strong>, <strong className="text-gray-700">11 boulevard René Levesque, 85000 La Roche sur Yon</strong>.
              </p>
              <p className="text-gray-500 leading-relaxed">
                <strong className="text-gray-700">{t('Nos infirmiers et aides opératoires', 'Our nurses and surgical assistants')}</strong> {t(
                  'vous accompagnent au bloc et assurent votre suivi pendant toutes les interventions chirurgicales sous anesthésies locales ou générales.',
                  'will support you in the operating room and ensure your follow-up for all surgical procedures performed under local or general anesthesia.'
                )}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-100/50 rounded-3xl blur-2xl" />
              <img
                src="/ressources/images/whole-team.png"
                alt={t('Équipe Sour\'Yon', 'Sour\'Yon Team')}
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Secretariat & Map */}
      <Section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('Secrétariat & Localisation', 'Secretariat & Location')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.4274240885766!2d-1.4168598231074867!3d46.65782187111852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48042ffa94e4789d%3A0x85b8f574f24b21cd!2sClinique%20Saint%20Charles!5e0!3m2!1sfr!2sfr!4v1729124701311!5m2!1sfr!2sfr"
                loading="lazy"
                className="w-full h-full border-0"
                title="Location"
              />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('Adresse', 'Address')}</h3>
                    <p className="text-gray-500 text-sm">11 Boulevard René Lévesque, 85000 La Roche-sur-Yon</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('Téléphone', 'Phone')}</h3>
                    <a href="tel:0251444495" className="text-primary text-sm font-medium">02 51 44 44 95</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('Horaires', 'Hours')}</h3>
                    <p className="text-gray-500 text-sm">
                      {t('Lundi - Vendredi : 8h - 12h / 14h - 18h', 'Monday - Friday: 8:00 AM - 12:00 PM / 2:00 PM - 6:00 PM')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500 leading-relaxed">
                <strong className="text-gray-700">{t('Nos secrétaires Sophie, Sylvia et Dominique', 'Our secretaries Sophie, Sylvia, and Dominique')}</strong> {t(
                  'assurent une permanence au cabinet du lundi au vendredi.',
                  'are available from Monday to Friday.'
                )}{' '}
                {t('Notre secrétariat est joignable au', 'Our secretariat can be reached at')} <strong className="text-gray-700">02 51 44 44 95</strong> {t('pour la prise de rendez-vous, ou via', 'for appointments, or via')}{' '}
                <a href="https://www.doctolib.fr/cabinet-medical/la-roche-sur-yon/stomatologistes-clinique-saint-charles" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Doctolib</a>{' '}
                {t('pour les docteurs', 'for Doctors')}{' '}
                <a href="https://www.doctolib.fr/stomatologue/la-roche-sur-yon/gerard-llabres" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">LLABRES</a>,{' '}
                <a href="https://www.doctolib.fr/chirurgien-maxillo-facial-et-stomatologiste/la-roche-sur-yon/mathieu-gerard?pid=establishment-6732" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">GERARD</a>{' '}
                {t('et', 'and')}{' '}
                <a href="https://www.doctolib.fr/chirurgien-oral/la-roche-sur-yon/maxime-guillemin-la-roche-sur-yon?pid=establishment-6732" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">GUILLEMIN</a>.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Doctors */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('Nos Médecins', 'Our Doctors')}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t(
                'Découvrez nos spécialistes en chirurgie maxillo-faciale, stomatologie et chirurgie orale. Chacun met à votre service son expertise et son savoir-faire pour vous garantir la meilleure prise en charge possible.',
                'Discover our specialists in maxillofacial surgery, stomatology, and oral surgery. Each provides their expertise and skills to guarantee you the best possible care.'
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dr Gerard */}
            <DoctorCard
              image="/ressources/images/file.jpg"
              name={t('Docteur Gerard', 'Doctor Gerard')}
              specialty={t('Chirurgien maxillo-facial et stomatologue', 'Maxillofacial surgeon and stomatologist')}
              description={t('Cancérologie, orthognathie, chirurgie reconstructrice...', 'Oncology, orthognathic, reconstructive surgery...')}
              link="/dr-gerard"
              btnText={t('En savoir plus', 'Learn More')}
            />
            {/* Dr Llabres */}
            <DoctorCard
              image="/ressources/images/DrLlabres.jpg"
              name={t('Docteur LLABRES', 'Doctor LLABRES')}
              specialty={t('Stomatologue', 'Stomatologist')}
              description={t('Chirurgie buccale, traitement de l\'apnée du sommeil...', 'Oral surgery, sleep apnea treatment...')}
              link="/dr-llabres"
              btnText={t('En savoir plus', 'Learn More')}
            />
            {/* Dr Guillemin */}
            <DoctorCard
              image="/ressources/images/DrGuillemin.jpg"
              name={t('Docteur GUILLEMIN', 'Doctor GUILLEMIN')}
              specialty={t('Chirurgien oral', 'Oral surgeon')}
              description={t('Chirurgie buccale, implantologie...', 'Oral surgery, implantology...')}
              link="/dr-guillemin"
              btnText={t('En savoir plus', 'Learn More')}
            />
          </div>
        </div>
      </Section>

      {/* Important Banner */}
      <Section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-600 uppercase tracking-wide">
                Important
              </h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t(
                'Toute intervention chirurgicale devra obligatoirement être précédée d\'une consultation sur rendez-vous pour laquelle vous devrez impérativement vous munir :',
                'Any surgical procedure must necessarily be preceded by a scheduled appointment, for which you must bring:'
              )}
            </p>
            <ul className="space-y-3 mb-6">
              <ImportantItem icon={<FileText className="w-4 h-4" />}>
                {t(
                  'Du courrier de votre médecin ou dentiste indiquant le motif de consultation',
                  'A referral letter from your doctor or dentist indicating the reason for consultation'
                )}
              </ImportantItem>
              <ImportantItem icon={<Scan className="w-4 h-4" />}>
                {t(
                  'De vos radiographies, notamment panoramique dentaire',
                  'Your radiographs, especially panoramic X-rays'
                )}
              </ImportantItem>
              <ImportantItem icon={<Pill className="w-4 h-4" />}>
                {t(
                  'De l\'ordonnance de vos traitements habituels si vous en prenez',
                  'Your prescription for any current daily medication if applicable'
                )}
              </ImportantItem>
              <ImportantItem icon={<CreditCard className="w-4 h-4" />}>
                {t(
                  'De l\'attestation adéquate (CMU, CSS, ACS, AME)',
                  'Your valid certificate if you are a beneficiary of CMU, CSS, ACS, or AME'
                )}
              </ImportantItem>
            </ul>
            <div className="flex items-start gap-3 bg-white/60 rounded-xl p-4 border border-amber-200/50">
              <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700 leading-relaxed">
                {t(
                  'En cas de contretemps, merci de prévenir le cabinet 48 heures à l\'avance : toute absence injustifiée peut empêcher toute nouvelle prise de rendez-vous.',
                  'In the event of unforeseen circumstances, please inform the medical office at least 48 hours in advance. Any unjustified absence may prevent any further appointment scheduling.'
                )}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  )
}

function DoctorCard({
  image,
  name,
  specialty,
  description,
  link,
  btnText,
}: {
  image: string
  name: string
  specialty: string
  description: string
  link: string
  btnText: string
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary font-medium text-sm mb-2">{specialty}</p>
        <p className="text-gray-500 text-sm mb-5">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group/link"
        >
          {btnText}
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

function ImportantItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="p-1.5 bg-amber-100 rounded-lg text-amber-700 flex-shrink-0 mt-0.5">
        {icon}
      </span>
      <span className="text-gray-700 text-sm leading-relaxed">{children}</span>
    </li>
  )
}
