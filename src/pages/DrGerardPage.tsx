import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Stethoscope,
  HeartPulse,
  Bone,
  ShieldPlus,
  Bug,
  Syringe,
  Sun,
  Eye,
  Recycle,
  Smile,
  UserPlus,
  Settings,
  Cross,
  Scissors,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import DoctorLayout from '../components/DoctorLayout'

export default function DrGerardPage() {
  const { t } = useLanguage()

  return (
    <DoctorLayout
      photoSrc="/ressources/images/DrGerard2.webp"
      photoAlt={t('Photo du Dr Gerard', 'Photo of Dr Gerard')}
      name="Dr. Mathieu Gerard"
      firstName="Mathieu"
      lastName="Gerard"
      subtitle={t('Chirurgien Maxillo-Facial & Stomatologue', 'Maxillofacial Surgeon & Stomatologist')}
      aboutContent={
        <p>
          {t(
            "Avec une expérience de plus de 20 ans, le Dr. Gerard est spécialisé dans la chirurgie de la bouche, de la mâchoire, et du visage. Il a été formé dans des hôpitaux universitaires français et participe régulièrement à des congrès pour rester à la pointe de son domaine.",
            "With over 20 years of experience, Dr. Gerard specializes in surgery of the mouth, jaw, and face. He was trained in French university hospitals and regularly attends conferences to stay at the forefront of his field."
          )}
        </p>
      }
      expertiseCards={[
        {
          icon: <Stethoscope className="w-6 h-6" />,
          title: t('Chirurgie Maxillo-Faciale', 'Maxillofacial Surgery'),
          description: t(
            'Correction des malformations de la mâchoire, traitement des fractures et autres interventions sur le visage.',
            'Correction of jaw malformations, treatment of fractures and other facial interventions.'
          ),
        },
        {
          icon: <HeartPulse className="w-6 h-6" />,
          title: t('Stomatologie', 'Stomatology'),
          description: t(
            'Prise en charge des pathologies buccales, traitement des lésions dentaires et corrections esthétiques du sourire.',
            'Management of oral pathologies, treatment of dental lesions and aesthetic smile corrections.'
          ),
        },
      ]}
      detailSection={<MaxilloFacialeSection />}
      contact={{
        address: '11 Boulevard René Lévesque, 85000 La Roche-sur-Yon',
        phone: '02 51 44 44 44',
        phoneHref: 'tel:0251444495',
        email: 'stomato.csc@sa3h.fr',
        emailHref: 'mailto:stomato.csc@sa3h.fr',
        doctolib:
          'https://www.doctolib.fr/chirurgien-maxillo-facial-et-stomatologiste/la-roche-sur-yon/mathieu-gerard',
        doctolibLabel: t('Sur Doctolib', 'On Doctolib'),
      }}
    />
  )
}

/* ─── Maxillo-Faciale Detail Section ─────────────────────────── */
function MaxilloFacialeSection() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  const items: { icon: React.ReactNode; title: string; desc: string }[] = [
    {
      icon: <Cross className="w-5 h-5" />,
      title: t('Traumatismes de la face', 'Facial Trauma'),
      desc: t('Fractures et plaies du visage et du crâne.', 'Fractures and wounds of the face and skull.'),
    },
    {
      icon: <ShieldPlus className="w-5 h-5" />,
      title: t('Cancérologie buccale et pharyngée', 'Oral and Pharyngeal Oncology'),
      desc: t('Prise en charge des tumeurs malignes de la cavité buccale et du pharynx.', 'Management of malignant tumors of the oral cavity and pharynx.'),
    },
    {
      icon: <Scissors className="w-5 h-5" />,
      title: t('Chirurgie orthognathique', 'Orthognathic Surgery'),
      desc: t('Correction des dysmorphies faciales (ex. menton trop en avant / arrière).', 'Correction of facial dysmorphia (e.g. chin too far forward / backward).'),
    },
    {
      icon: <Bone className="w-5 h-5" />,
      title: t('Anomalies congénitales', 'Congenital Anomalies'),
      desc: t("Malformations de naissance du visage nécessitant une intervention spécifique.", 'Birth malformations of the face requiring specific intervention.'),
    },
    {
      icon: <Bug className="w-5 h-5" />,
      title: t('Infections de la face', 'Facial Infections'),
      desc: t("Souvent d'origine cutanée ou dentaire (abcès, etc.).", 'Often of cutaneous or dental origin (abscesses, etc.).'),
    },
    {
      icon: <Syringe className="w-5 h-5" />,
      title: t('Chirurgie orale', 'Oral Surgery'),
      desc: t('Extractions, tumeurs bénignes, kystes…', 'Extractions, benign tumors, cysts…'),
    },
    {
      icon: <Sun className="w-5 h-5" />,
      title: t('Chirurgie dermatologique', 'Dermatological Surgery'),
      desc: t('Kystes, nævus, cancers de la peau, cicatrices…', 'Cysts, nevi, skin cancers, scars…'),
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: t('Chirurgie orbito-palpebro-lacrymale', 'Orbito-Palpebro-Lacrimal Surgery'),
      desc: t('Intervention sur orbites, paupières et voies lacrymales.', 'Surgery on orbits, eyelids and lacrimal ducts.'),
    },
    {
      icon: <Recycle className="w-5 h-5" />,
      title: t('Chirurgie plastique et reconstructrice', 'Plastic and Reconstructive Surgery'),
      desc: t('Greffes, lambeaux, épithèses pour restaurer la morphologie faciale.', 'Grafts, flaps, epitheses to restore facial morphology.'),
    },
    {
      icon: <Smile className="w-5 h-5" />,
      title: t('Chirurgie esthétique', 'Aesthetic Surgery'),
      desc: t('Rhinoplasties, blépharoplasties, otoplasties…', 'Rhinoplasties, blepharoplasties, otoplasties…'),
    },
    {
      icon: <UserPlus className="w-5 h-5" />,
      title: t('Chirurgie préimplantaire', 'Pre-Implant Surgery'),
      desc: t('Greffe de tissus osseux, plastie des parties molles, etc.', 'Bone tissue grafting, soft tissue surgery, etc.'),
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: t("Pathologies de l'articulation temporo-mandibulaire", 'Temporomandibular Joint Pathologies'),
      desc: t("Diagnostic et traitement des dysfonctionnements de l'ATM.", 'Diagnosis and treatment of TMJ dysfunctions.'),
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 bg-gray-50 overflow-hidden">
      {/* Huge decorative number */}
      <div className="absolute -top-20 -right-10 text-[20rem] font-black text-gray-100 leading-none select-none pointer-events-none opacity-50">
        12
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">
              {t('En détail', 'In Detail')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t('La Chirurgie', 'Maxillofacial')}<br />
            <span className="text-primary">{t('Maxillo-Faciale', 'Surgery')}</span>
          </h2>
        </motion.div>

        {/* Intro text - editorial style with large first letter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mb-20"
        >
          <div className="relative pl-16 md:pl-20 space-y-4 text-gray-600 leading-relaxed">
            {/* Decorative side — gradient bar + quote mark */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center pointer-events-none select-none">
              <span className="text-5xl font-black text-primary/20 leading-none mb-1">"</span>
              <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/40 via-primary/15 to-transparent rounded-full" />
            </div>
            <p>
              {t(
                "Le chirurgien maxillo-facial est le chirurgien général spécialisé dans les pathologies de la face, de la peau jusqu'aux os et tissus mous.",
                "The maxillofacial surgeon is the general surgeon specialized in pathologies of the face, from the skin to the bones and soft tissues."
              )}
            </p>
            <p>
              {t(
                "Sa formation chirurgicale générale (chirurgie orthopédique et chirurgie viscérale) et ses compétences en microchirurgie, lui permettent néanmoins d'être qualifié pour des interventions chirurgicales sur toutes les parties du corps lorsqu'il doit y prélever des éléments de reconstruction pour le visage.",
                'His general surgical training (orthopedic and visceral surgery) and his skills in microsurgery nonetheless qualify him for surgical interventions on all parts of the body when he needs to harvest reconstruction elements for the face.'
              )}
            </p>
            <p>
              {t(
                "À l'exception des organes des sens (vue et audition), et du cerveau, il intervient dans toute pathologie nécessitant un acte chirurgical et médical portant sur la face et la cavité buccale :",
                'With the exception of the sensory organs (sight and hearing) and the brain, he intervenes in any pathology requiring a surgical and medical act involving the face and the oral cavity:'
              )}
            </p>
          </div>
        </motion.div>

        {/* Grid - masonry-like staggered items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <SpecialtyCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecialtyCard({
  item,
  index,
}: {
  item: { icon: React.ReactNode; title: string; desc: string }
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/15 transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.04] hover:-translate-y-1"
    >
      {/* Number */}
      <span className="absolute top-4 right-5 text-xs font-bold text-gray-200 group-hover:text-primary/30 transition-colors">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-400">
        {item.icon}
      </div>
      <h4 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-primary transition-colors duration-300">
        {item.title}
      </h4>
      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
    </motion.div>
  )
}
