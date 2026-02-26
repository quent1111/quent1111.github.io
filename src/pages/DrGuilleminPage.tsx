import { Syringe, Hospital } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import DoctorLayout from '../components/DoctorLayout'
import Section from '../components/Section'

export default function DrGuilleminPage() {
  const { t } = useLanguage()

  return (
    <DoctorLayout
      photoSrc="/ressources/images/DrGuillemin.jpg"
      photoAlt={t('Photo du Dr Guillemin', 'Photo of Dr Guillemin')}
      name="Dr. Maxime Guillemin"
      aboutTitle={t('À propos du Dr. Guillemin', 'About Dr. Guillemin')}
      aboutContent={
        <p>
          {t(
            'Titulaire d\'un doctorat en médecine, le Dr Guillemin s\'est spécialisé en implantologie par le biais d\'un diplôme d\'état en implantologie orale à Nantes. Ancien Chef de clinique des universités au CHU de Nantes, le Dr Guillemin est conventionné secteur 2.',
            'Holding a doctorate in medicine, Dr Guillemin specialized in implantology through a state diploma in oral implantology in Nantes. Former Head of university clinic at CHU de Nantes, Dr Guillemin practices in sector 2.'
          )}
        </p>
      }
      expertiseTitle={t('Domaines d\'Expertise', 'Areas of Expertise')}
      expertiseCards={[
        {
          icon: <Syringe className="w-7 h-7" />,
          title: t('Chirurgie Orale', 'Oral Surgery'),
          description: t(
            'Traitement des pathologies dentaires, extractions complexes et interventions visant à préserver la santé buccale.',
            'Treatment of dental pathologies, complex extractions and procedures aimed at preserving oral health.'
          ),
        },
        {
          icon: <Hospital className="w-7 h-7" />,
          title: t('Implantologie', 'Implantology'),
          description: t(
            'Pose d\'implants dentaires, régénération osseuse et restauration esthétique du sourire.',
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
        doctolib: 'https://www.doctolib.fr/chirurgien-oral/la-roche-sur-yon/maxime-guillemin-la-roche-sur-yon?pid=establishment-6732',
        doctolibLabel: t('Sur Doctolib', 'On Doctolib'),
      }}
    />
  )
}

function ChirurgieOraleSection() {
  const { t } = useLanguage()

  return (
    <Section className="py-20 md:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {t('La Chirurgie Orale', 'Oral Surgery')}
        </h2>

        <div className="space-y-12">
          {/* What is oral surgery */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('Qu\'est-ce que la chirurgie orale ?', 'What is oral surgery?')}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {t(
                'La chirurgie orale ou odonto-stomatologie est la spécialité médico-chirurgicale des pathologies des mâchoires et tissus environnants.',
                'Oral surgery or odonto-stomatology is the medical-surgical specialty of jaw and surrounding tissue pathologies.'
              )}
            </p>
          </div>

          {/* What does the oral surgeon do */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('Que fait le chirurgien oral ?', 'What does the oral surgeon do?')}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              {t(
                'Après examen et radiographie, le chirurgien oral procède à toute intervention chirurgicale complexe qui touche :',
                'After examination and radiography, the oral surgeon performs any complex surgical procedure involving:'
              )}
            </p>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {t('les dents (extraction et remplacement par un implant)', 'teeth (extraction and replacement by implant)')}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {t('les dents de sagesse', 'wisdom teeth')}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {t('les alvéoles dentaires', 'dental sockets')}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {t('l\'os des maxillaires', 'the jawbone')}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {t('les gencives', 'the gums')}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {t('les muqueuses buccales', 'the oral mucosa')}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {t('les canaux de communication bouche-sinus et bouche-nez', 'the mouth-sinus and mouth-nose communication channels')}
              </li>
            </ul>
          </div>

          {/* When to consult */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('Quand consulter un chirurgien oral ou stomatologue ?', 'When to consult an oral surgeon or stomatologist?')}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              {t(
                'La consultation chez un chirurgien oral se fait généralement sur orientation d\'un chirurgien-dentiste, d\'un orthodontiste ou d\'un médecin, qu\'il soit généraliste ou spécialiste.',
                'Consultation with an oral surgeon is generally upon referral from a dentist, orthodontist or doctor, whether general practitioner or specialist.'
              )}
            </p>
            <p className="text-gray-500 leading-relaxed">
              {t(
                'Il s\'agit dans la plupart des cas d\'une consultation avant extraction des dents de sagesse ou pour la pose d\'un implant dentaire.',
                'In most cases, it is a consultation before wisdom teeth extraction or for dental implant placement.'
              )}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
