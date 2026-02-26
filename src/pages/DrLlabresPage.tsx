import { Heart, Moon } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import DoctorLayout from '../components/DoctorLayout'
import Section from '../components/Section'

export default function DrLlabresPage() {
  const { t } = useLanguage()

  return (
    <DoctorLayout
      photoSrc="/ressources/images/DrLlabres.jpg"
      photoAlt={t('Photo du Dr Llabres', 'Photo of Dr Llabres')}
      name="Dr. Gérard Llabres"
      aboutTitle={t('À propos du Dr. Llabres', 'About Dr. Llabres')}
      aboutContent={
        <>
          <p>
            {t(
              'Le docteur Gérard Llabres, après ses études de médecine et sa spécialisation en stomatologie dans les hôpitaux universitaires de Lyon et de Grenoble, s\'est installé à la Clinique Saint-Charles en 1991.',
              'Doctor Gérard Llabres, after his medical studies and specialization in stomatology in the university hospitals of Lyon and Grenoble, established his practice at Clinique Saint-Charles in 1991.'
            )}
          </p>
          <p>
            {t(
              'En dehors de son activité chirurgicale de Stomatologie traditionnelle (extraction, chirurgie des kystes et tumeurs), il s\'est intéressé et spécialisé tout particulièrement dans la prise en charge des pathologies du sommeil, en particulier les syndromes d\'apnée du sommeil et le ronflement, principalement pour la mise en place d\'orthèses d\'avancée mandibulaire.',
              'Beyond his traditional stomatology surgical activity (extraction, cyst and tumor surgery), he has particularly focused on and specialized in the management of sleep pathologies, especially sleep apnea syndromes and snoring, primarily for the placement of mandibular advancement devices.'
            )}
          </p>
          <p>
            {t(
              'Le Docteur Llabres est membre de la société "médecine des arts" qui prend en charge la pathologie spécifique des artistes, en particulier des musiciens. Dans sa spécialité, il s\'intéresse notamment aux problèmes bucco-dentaires des instrumentistes à vent (trompettistes, flûtistes, etc.).',
              'Doctor Llabres is a member of the "medicine of the arts" society which handles the specific pathology of artists, especially musicians. In his specialty, he is particularly interested in the oral-dental problems of wind instrumentalists (trumpeters, flutists, etc.).'
            )}
          </p>
        </>
      }
      expertiseTitle={t('Domaines d\'Expertise', 'Areas of Expertise')}
      expertiseCards={[
        {
          icon: <Heart className="w-7 h-7" />,
          title: t('Stomatologie', 'Stomatology'),
          description: t(
            'Prise en charge des pathologies buccales, traitement des lésions dentaires et corrections esthétiques du sourire.',
            'Treatment of oral pathologies, dental lesions and aesthetic smile corrections.'
          ),
        },
        {
          icon: <Moon className="w-7 h-7" />,
          title: t('Somnologie', 'Sleep Medicine'),
          description: t(
            'Prise en charge des troubles du sommeil, traitement des apnées nocturnes et amélioration de la qualité du repos.',
            'Management of sleep disorders, treatment of sleep apnea and improvement of rest quality.'
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
        doctolib: 'https://www.doctolib.fr/stomatologue/la-roche-sur-yon/gerard-llabres',
        doctolibLabel: t('Sur Doctolib', 'On Doctolib'),
      }}
    />
  )
}

function StomatoSomnoSection() {
  const { t } = useLanguage()

  return (
    <Section className="py-20 md:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {t('Stomatologie & Somnologie', 'Stomatology & Sleep Medicine')}
        </h2>

        <div className="space-y-12">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-xl">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {t('Stomatologie traditionnelle', 'Traditional Stomatology')}
              </h3>
            </div>
            <p className="text-gray-500 leading-relaxed">
              {t(
                'Le Dr Llabres réalise les interventions chirurgicales de stomatologie courante : extractions dentaires complexes, chirurgie des kystes, tumeurs buccales, etc. Son approche vise à la fois la préservation et la restauration de la santé buccodentaire, en s\'appuyant sur des techniques éprouvées.',
                'Dr Llabres performs common stomatological surgical procedures: complex dental extractions, cyst surgery, oral tumors, etc. His approach aims at both preserving and restoring oral health, using proven techniques.'
              )}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-xl">
                <Moon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {t('Somnologie (Apnée du sommeil, Ronflement)', 'Sleep Medicine (Sleep Apnea, Snoring)')}
              </h3>
            </div>
            <p className="text-gray-500 leading-relaxed mb-4">
              {t(
                'Spécialisé dans la prise en charge des pathologies du sommeil, le docteur Llabres s\'intéresse particulièrement aux syndromes d\'apnée du sommeil et au ronflement. Il propose notamment la mise en place d\'orthèses d\'avancée mandibulaire, permettant de dégager les voies respiratoires et d\'améliorer la qualité du repos.',
                'Specialized in the management of sleep pathologies, Doctor Llabres is particularly interested in sleep apnea syndromes and snoring. He notably offers the placement of mandibular advancement devices, allowing to clear the airways and improve rest quality.'
              )}
            </p>
            <p className="text-gray-500 leading-relaxed">
              {t(
                'Cette expertise s\'étend également aux professionnels des arts, en particulier les musiciens jouant d\'instruments à vent, pour lesquels une bonne santé buccodentaire est essentielle.',
                'This expertise also extends to arts professionals, particularly musicians playing wind instruments, for whom good oral health is essential.'
              )}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
