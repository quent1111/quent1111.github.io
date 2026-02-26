import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Moon, HeartPulse, Music } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import DoctorLayout from '../components/DoctorLayout'

export default function DrLlabresPage() {
  const { t } = useLanguage()

  return (
    <DoctorLayout
      photoSrc="/ressources/images/DrLlabres.jpg"
      photoAlt={t('Photo du Dr Llabres', 'Photo of Dr Llabres')}
      name="Dr. Gérard Llabres"
      firstName="Gérard"
      lastName="Llabres"
      subtitle={t('Stomatologue & Somnologue', 'Stomatologist & Sleep Specialist')}
      tallHero
      aboutContent={
        <>
          <p>
            {t(
              "Le docteur Gérard Llabres, après ses études de médecine et sa spécialisation en stomatologie dans les hôpitaux universitaires de Lyon et de Grenoble, s'est installé à la Clinique Saint-Charles en 1991.",
              'Dr. Gérard Llabres, after completing his medical studies and specializing in stomatology at the university hospitals of Lyon and Grenoble, established his practice at Clinique Saint-Charles in 1991.'
            )}
          </p>
          <p>
            {t(
              "En dehors de son activité chirurgicale de Stomatologie traditionnelle (extraction, chirurgie des kystes et tumeurs), il s'est intéressé et spécialisé tout particulièrement dans la prise en charge des pathologies du sommeil, en particulier les syndromes d'apnée du sommeil et le ronflement, principalement pour la mise en place d'orthèses d'avancée mandibulaire.",
              'Beyond his traditional stomatology surgical practice (extraction, cyst and tumor surgery), he has taken a particular interest and specialized in the management of sleep pathologies, especially sleep apnea syndromes and snoring, primarily for the placement of mandibular advancement devices.'
            )}
          </p>
          <p>
            {t(
              'Le Docteur Llabres est membre de la société "médecine des arts" qui prend en charge la pathologie spécifique des artistes, en particulier des musiciens. Dans sa spécialité, il s\'intéresse notamment aux problèmes bucco-dentaires des instrumentistes à vent (trompettistes, flûtistes, etc.).',
              'Dr. Llabres is a member of the "médecine des arts" society which manages the specific pathologies of artists, particularly musicians. In his specialty, he is particularly interested in the oral-dental problems of wind instrument players (trumpeters, flutists, etc.).'
            )}
          </p>
        </>
      }
      expertiseCards={[
        {
          icon: <HeartPulse className="w-6 h-6" />,
          title: t('Stomatologie', 'Stomatology'),
          description: t(
            'Prise en charge des pathologies buccales, traitement des lésions dentaires et corrections esthétiques du sourire.',
            'Management of oral pathologies, treatment of dental lesions and aesthetic smile corrections.'
          ),
        },
        {
          icon: <Moon className="w-6 h-6" />,
          title: t('Somnologie', 'Sleep Medicine'),
          description: t(
            "Prise en charge des troubles du sommeil, traitement des apnées nocturnes et amélioration de la qualité du repos.",
            'Management of sleep disorders, treatment of nocturnal apnea and improvement of rest quality.'
          ),
        },
      ]}
  detailSection={<StomatoSomnoSection />}
      contact={{
        address: '11 Boulevard René Lévesque, 85000 La Roche-sur-Yon',
        phone: '02 51 44 44 44',
        phoneHref: 'tel:0251444495',
        email: 'stomato.csc@sa3h.fr',
        emailHref: 'mailto:stomato.csc@sa3h.fr',
        doctolib:
          'https://www.doctolib.fr/stomatologue/la-roche-sur-yon/gerard-llabres',
        doctolibLabel: t('Sur Doctolib', 'On Doctolib'),
      }}
    />
  )
}

/* ─── Stomatologie & Somnologie Detail ───────────────────────── */
function StomatoSomnoSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-gray-50 overflow-hidden">
      {/* Decorative */}
      <div className="hidden md:block absolute top-20 right-0 text-[14rem] font-black text-gray-100 leading-none select-none pointer-events-none opacity-50">
        02
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">
              {t('En détail', 'In Detail')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t('Stomatologie &', 'Stomatology &')}<br />
            <span className="text-primary">{t('Somnologie', 'Sleep Medicine')}</span>
          </h2>
        </motion.div>

        {/* Two stacked editorial blocks */}
        <div className="space-y-8">
          {/* Block 1 — Stomatologie */}
          <DetailBlock
            inView={inView}
            delay={0.15}
            number="01"
            icon={<HeartPulse className="w-6 h-6" />}
            title={t('Stomatologie traditionnelle', 'Traditional Stomatology')}
          >
            <p>
              {t(
                "Le Dr Llabres réalise les interventions chirurgicales de stomatologie courante : extractions dentaires complexes, chirurgie des kystes, tumeurs buccales, etc. Son approche vise à la fois la préservation et la restauration de la santé buccodentaire, en s'appuyant sur des techniques éprouvées.",
                'Dr. Llabres performs standard stomatology surgical procedures: complex dental extractions, cyst surgery, oral tumors, etc. His approach aims at both the preservation and restoration of oral health, relying on proven techniques.'
              )}
            </p>
          </DetailBlock>

          {/* Block 2 — Somnologie */}
          <DetailBlock
            inView={inView}
            delay={0.3}
            number="02"
            icon={<Moon className="w-6 h-6" />}
            title={t('Somnologie (Apnée du sommeil, Ronflement)', 'Sleep Medicine (Sleep Apnea, Snoring)')}
          >
            <p>
              {t(
                "Spécialisé dans la prise en charge des pathologies du sommeil, le docteur Llabres s'intéresse particulièrement aux syndromes d'apnée du sommeil et au ronflement. Il propose notamment la mise en place d'orthèses d'avancée mandibulaire, permettant de dégager les voies respiratoires et d'améliorer la qualité du repos.",
                "Specialized in the management of sleep pathologies, Dr. Llabres is particularly interested in sleep apnea syndromes and snoring. He notably offers the placement of mandibular advancement devices, helping to clear the airways and improve rest quality."
              )}
            </p>

            {/* Musicians callout */}
            <div className="mt-6 flex items-start gap-4 bg-gradient-to-r from-primary/5 to-sky-50 rounded-2xl p-6 border border-primary/10">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(
                  "Cette expertise s'étend également aux professionnels des arts, en particulier les musiciens jouant d'instruments à vent, pour lesquels une bonne santé buccodentaire est essentielle.",
                  'This expertise also extends to arts professionals, particularly musicians playing wind instruments, for whom good oral health is essential.'
                )}
              </p>
            </div>
          </DetailBlock>
        </div>
      </div>
    </section>
  )
}

/* ─── Reusable Detail Block ──────────────────────────────────── */
function DetailBlock({
  inView,
  delay,
  number,
  icon,
  title,
  children,
}: {
  inView: boolean
  delay: number
  number: string
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      {/* Floating number */}
      <span className="absolute -top-6 -left-2 text-[4rem] md:text-[7rem] font-black text-gray-100 leading-none select-none pointer-events-none group-hover:text-primary/8 transition-colors duration-500">
        {number}
      </span>

      <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-primary/15 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
        {/* Top accent */}
        <div className="absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r from-primary via-sky-400 to-primary rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-400">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>

        <div className="text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </motion.div>
  )
}
