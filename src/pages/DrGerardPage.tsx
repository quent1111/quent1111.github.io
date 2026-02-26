import {
  Stethoscope,
  Heart,
  Bone,
  TestTube2,
  Scissors,
  Microscope,
  Bug,
  Syringe,
  Sun,
  Eye,
  Recycle,
  SmilePlus,
  Cog,
  UserPlus,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import DoctorLayout from '../components/DoctorLayout'
import Section from '../components/Section'

export default function DrGerardPage() {
  const { t } = useLanguage()

  return (
    <DoctorLayout
      photoSrc="/ressources/images/DrGerard2.webp"
      photoAlt={t('Photo du Dr Gerard', 'Photo of Dr Gerard')}
      name="Dr. Mathieu Gerard"
      aboutTitle={t('À propos du Dr. Gerard', 'About Dr. Gerard')}
      aboutContent={
        <p>
          {t(
            'Avec une expérience de plus de 20 ans, le Dr. Gerard est spécialisé dans la chirurgie de la bouche, de la mâchoire, et du visage. Il a été formé dans des hôpitaux universitaires français et participe régulièrement à des congrès pour rester à la pointe de son domaine.',
            'With over 20 years of experience, Dr. Gerard specializes in surgery of the mouth, jaw, and face. He trained in French university hospitals and regularly attends conferences to stay at the forefront of his field.'
          )}
        </p>
      }
      expertiseTitle={t('Domaines d\'Expertise', 'Areas of Expertise')}
      expertiseCards={[
        {
          icon: <Stethoscope className="w-7 h-7" />,
          title: t('Chirurgie Maxillo-Faciale', 'Maxillofacial Surgery'),
          description: t(
            'Correction des malformations de la mâchoire, traitement des fractures et autres interventions sur le visage.',
            'Correction of jaw malformations, treatment of fractures and other facial interventions.'
          ),
        },
        {
          icon: <Heart className="w-7 h-7" />,
          title: t('Stomatologie', 'Stomatology'),
          description: t(
            'Prise en charge des pathologies buccales, traitement des lésions dentaires et corrections esthétiques du sourire.',
            'Treatment of oral pathologies, dental lesions and aesthetic smile corrections.'
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
        doctolib: 'https://www.doctolib.fr/chirurgien-maxillo-facial-et-stomatologiste/la-roche-sur-yon/mathieu-gerard',
        doctolibLabel: t('Sur Doctolib', 'On Doctolib'),
      }}
    />
  )
}

function MaxilloFacialeSection() {
  const { t } = useLanguage()

  const items = [
    { icon: <Bone className="w-5 h-5" />, title: t('Traumatismes de la face', 'Facial trauma'), desc: t('Fractures et plaies du visage et du crâne.', 'Fractures and wounds of the face and skull.') },
    { icon: <TestTube2 className="w-5 h-5" />, title: t('Cancérologie buccale et pharyngée', 'Oral and pharyngeal oncology'), desc: t('Prise en charge des tumeurs malignes de la cavité buccale et du pharynx.', 'Treatment of malignant tumors of the oral cavity and pharynx.') },
    { icon: <Scissors className="w-5 h-5" />, title: t('Chirurgie orthognathique', 'Orthognathic surgery'), desc: t('Correction des dysmorphies faciales (ex. menton trop en avant / arrière).', 'Correction of facial dysmorphia (e.g. chin too far forward/backward).') },
    { icon: <Microscope className="w-5 h-5" />, title: t('Anomalies congénitales', 'Congenital anomalies'), desc: t('Malformations de naissance du visage nécessitant une intervention spécifique.', 'Congenital facial malformations requiring specific intervention.') },
    { icon: <Bug className="w-5 h-5" />, title: t('Infections de la face', 'Facial infections'), desc: t('Souvent d\'origine cutanée ou dentaire (abcès, etc.).', 'Often of cutaneous or dental origin (abscesses, etc.).') },
    { icon: <Syringe className="w-5 h-5" />, title: t('Chirurgie orale', 'Oral surgery'), desc: t('Extractions, tumeurs bénignes, kystes…', 'Extractions, benign tumors, cysts…') },
    { icon: <Sun className="w-5 h-5" />, title: t('Chirurgie dermatologique', 'Dermatological surgery'), desc: t('Kystes, nævus, cancers de la peau, cicatrices…', 'Cysts, nevi, skin cancers, scars…') },
    { icon: <Eye className="w-5 h-5" />, title: t('Chirurgie orbito-palpebro-lacrymale', 'Orbito-palpebro-lacrimal surgery'), desc: t('Intervention sur orbites, paupières et voies lacrymales.', 'Surgery on orbits, eyelids and lacrimal pathways.') },
    { icon: <Recycle className="w-5 h-5" />, title: t('Chirurgie plastique et reconstructrice', 'Plastic and reconstructive surgery'), desc: t('Greffes, lambeaux, épithèses pour restaurer la morphologie faciale.', 'Grafts, flaps, epitheses to restore facial morphology.') },
    { icon: <SmilePlus className="w-5 h-5" />, title: t('Chirurgie esthétique', 'Cosmetic surgery'), desc: t('Rhinoplasties, blépharoplasties, otoplasties…', 'Rhinoplasties, blepharoplasties, otoplasties…') },
    { icon: <UserPlus className="w-5 h-5" />, title: t('Chirurgie préimplantaire', 'Pre-implant surgery'), desc: t('Greffe de tissus osseux, plastie des parties molles, etc.', 'Bone tissue grafting, soft tissue surgery, etc.') },
    { icon: <Cog className="w-5 h-5" />, title: t('Pathologies de l\'articulation temporo-mandibulaire', 'Temporomandibular joint disorders'), desc: t('Diagnostic et traitement des dysfonctionnements de l\'ATM.', 'Diagnosis and treatment of TMJ dysfunctions.') },
  ]

  return (
    <Section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          {t('La Chirurgie Maxillo-Faciale', 'Maxillofacial Surgery')}
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <p className="text-gray-500 leading-relaxed">
            {t(
              'Le chirurgien maxillo-facial est le chirurgien général spécialisé dans les pathologies de la face, de la peau jusqu\'aux os et tissus mous.',
              'The maxillofacial surgeon is the general surgeon specialized in pathologies of the face, from skin to bones and soft tissues.'
            )}
          </p>
          <p className="text-gray-500 leading-relaxed">
            {t(
              'Sa formation chirurgicale générale (chirurgie orthopédique et chirurgie viscérale) et ses compétences en microchirurgie, lui permettent néanmoins d\'être qualifié pour des interventions chirurgicales sur toutes les parties du corps lorsqu\'il doit y prélever des éléments de reconstruction pour le visage.',
              'His general surgical training (orthopedic and visceral surgery) and microsurgery skills make him qualified for surgical interventions on all parts of the body when he needs to harvest reconstruction elements for the face.'
            )}
          </p>
          <p className="text-gray-500 leading-relaxed">
            {t(
              'À l\'exception des organes des sens (vue et audition), et du cerveau, il intervient dans toute pathologie nécessitant un acte chirurgical et médical portant sur la face et la cavité buccale :',
              'With the exception of the sense organs (sight and hearing), and the brain, he intervenes in any pathology requiring a surgical and medical procedure on the face and oral cavity:'
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-2.5 bg-primary/10 rounded-xl flex-shrink-0">
                <span className="text-primary">{item.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
