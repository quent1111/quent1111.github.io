import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Syringe, Hospital, CircleDot } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import DoctorLayout from '../components/DoctorLayout'

export default function DrGuilleminPage() {
  const { t } = useLanguage()

  return (
    <DoctorLayout
      photoSrc="/ressources/images/DrGuillemin.jpg"
      photoAlt={t('Photo du Dr Guillemin', 'Photo of Dr Guillemin')}
      name="Dr. Maxime Guillemin"
      firstName="Maxime"
      lastName="Guillemin"
      subtitle={t('Chirurgien Oral & Implantologue', 'Oral Surgeon & Implantologist')}
      aboutContent={
        <p>
          {t(
            "Titulaire d'un doctorat en médecine, le Dr Guillemin s'est spécialisé en implantologie par le biais d'un diplôme d'état en implantologie orale à Nantes. Ancien Chef de clinique des universités au CHU de Nantes, le Dr Guillemin est conventionné secteur 2.",
            "Holder of a doctorate in medicine, Dr. Guillemin specialized in implantology through a state diploma in oral implantology in Nantes. Former University Clinic Head at CHU de Nantes, Dr. Guillemin practices under sector 2 fees."
          )}
        </p>
      }
      expertiseCards={[
        {
          icon: <Syringe className="w-6 h-6" />,
          title: t('Chirurgie Orale', 'Oral Surgery'),
          description: t(
            'Traitement des pathologies dentaires, extractions complexes et interventions visant à préserver la santé buccale.',
            'Treatment of dental pathologies, complex extractions and interventions aimed at preserving oral health.'
          ),
        },
        {
          icon: <Hospital className="w-6 h-6" />,
          title: t('Implantologie', 'Implantology'),
          description: t(
            "Pose d'implants dentaires, régénération osseuse et restauration esthétique du sourire.",
            'Dental implant placement, bone regeneration and aesthetic smile restoration.'
          ),
        },
      ]}
      detailSection={<ChirurgieOraleSection />}
      contact={{
        address: '11 Boulevard René Lévesque, 85000 La Roche-sur-Yon',
        phone: '02 51 44 44 44',
        phoneHref: 'tel:0251444495',
        email: 'stomato.csc@sa3h.fr',
        emailHref: 'mailto:stomato.csc@sa3h.fr',
        doctolib:
          'https://www.doctolib.fr/chirurgien-oral/la-roche-sur-yon/maxime-guillemin-la-roche-sur-yon?pid=establishment-6732',
        doctolibLabel: t('Sur Doctolib', 'On Doctolib'),
      }}
    />
  )
}

/* ─── Chirurgie Orale Detail Section ──────────────────────────── */
function ChirurgieOraleSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const bulletItems = [
    t('les dents (extraction et remplacement par un implant)', 'teeth (extraction and replacement with an implant)'),
    t('les dents de sagesse', 'wisdom teeth'),
    t('les alvéoles dentaires', 'dental alveoli'),
    t("l'os des maxillaires", 'maxillary bone'),
    t('les gencives', 'gums'),
    t('les muqueuses buccales', 'oral mucosa'),
    t('les canaux de communication bouche-sinus et bouche-nez', 'mouth-sinus and mouth-nose communication channels'),
  ]

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-gray-50 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 right-0 text-[14rem] font-black text-gray-100 leading-none select-none pointer-events-none opacity-50">
        03
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
            {t('La Chirurgie', 'Oral')}<br />
            <span className="text-primary">{t('Orale', 'Surgery')}</span>
          </h2>
        </motion.div>

        {/* Three blocks stacked */}
        <div className="space-y-8">
          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <span className="absolute -top-6 -left-2 text-[7rem] font-black text-gray-100 leading-none select-none pointer-events-none group-hover:text-primary/8 transition-colors duration-500">
              01
            </span>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-primary/15 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r from-primary via-sky-400 to-primary rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-400">
                  <Syringe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {t("Qu'est-ce que la chirurgie orale ?", 'What is oral surgery?')}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  'La chirurgie orale ou odonto-stomatologie est la spécialité médico-chirurgicale des pathologies des mâchoires et tissus environnants.',
                  'Oral surgery or odonto-stomatology is the medico-surgical specialty of jaw pathologies and surrounding tissues.'
                )}
              </p>
            </div>
          </motion.div>

          {/* Block 2 — with bullet list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="group relative"
          >
            <span className="absolute -top-6 -left-2 text-[7rem] font-black text-gray-100 leading-none select-none pointer-events-none group-hover:text-primary/8 transition-colors duration-500">
              02
            </span>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-primary/15 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r from-primary via-sky-400 to-primary rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-400">
                  <Hospital className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {t('Que fait le chirurgien oral ?', 'What does an oral surgeon do?')}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t(
                  'Après examen et radiographie, le chirurgien oral procède à toute intervention chirurgicale complexe qui touche :',
                  'After examination and X-ray, the oral surgeon performs any complex surgical intervention involving:'
                )}
              </p>
              <ul className="space-y-3 ml-1">
                {bulletItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="mt-1.5 shrink-0">
                      <CircleDot className="w-4 h-4 text-primary/50 group-hover/item:text-primary transition-colors" />
                    </div>
                    <span className="text-gray-600 text-[15px] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative"
          >
            <span className="absolute -top-6 -left-2 text-[7rem] font-black text-gray-100 leading-none select-none pointer-events-none group-hover:text-primary/8 transition-colors duration-500">
              03
            </span>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-primary/15 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r from-primary via-sky-400 to-primary rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-400">
                  <Syringe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {t('Quand consulter un chirurgien oral ou stomatologue ?', 'When to consult an oral surgeon or stomatologist?')}
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {t(
                    "La consultation chez un chirurgien oral se fait généralement sur orientation d'un chirurgien-dentiste, d'un orthodontiste ou d'un médecin, qu'il soit généraliste ou spécialiste.",
                    "Consultation with an oral surgeon is generally made on referral from a dental surgeon, an orthodontist, or a doctor, whether general practitioner or specialist."
                  )}
                </p>
                <p>
                  {t(
                    "Il s'agit dans la plupart des cas d'une consultation avant extraction des dents de sagesse ou pour la pose d'un implant dentaire.",
                    'In most cases, it involves a consultation before wisdom tooth extraction or for dental implant placement.'
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
