import { useState } from 'react';
import { Mail, MapPin, Clock, User, Award, ExternalLink, ChevronDown, ChevronUp, Bookmark, MessageCircle, Phone } from 'lucide-react';
import { getColorClasses } from '../utils/colorUtils';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "École Normale Supérieure, Meknès, Maroc",
      description: "Bureau du Master Systèmes Intelligents pour l'Éducation",
      color: "emerald"
    },
    {
      icon: Clock,
      title: "Horaires de contact",
      content: "Lundi - Vendredi: 8h30 - 18h30",
      description: "Réponse sous 24-48 heures",
      color: "orange"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+212 665 244 247",
      description: "Disponible aux horaires de bureau",
      color: "blue"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. El Arbi ABDELLAOUI ALAOUI",
      role: "Coordonnateur du Master",
      email: "e.abdellaouialaoui@umi.ac.ma",
      expertise: "Intelligence Artificielle, Systèmes Tutoriels Intelligents",
      icon: Award,
      color: "blue"
    },
  ];

  const faqs = [
    {
      question: "Quelle est la durée de la formation ?",
      answer: "Le master se déroule sur 2 années universitaires, soit 4 semestres, avec un total de 120 crédits ECTS. Chaque semestre comprend des cours théoriques, travaux pratiques et projets."
    },
    {
      question: "Y a-t-il des prérequis techniques spécifiques ?",
      answer: "Une base en programmation (de préférence Python) et en mathématiques est recommandée. Des ateliers de mise à niveau sont organisés en début d'année pour harmoniser les compétences des étudiants."
    },
    {
      question: "Le master propose-t-il des stages en entreprise ?",
      answer: "Oui, des stages sont intégrés au programme, notamment en semestre 4 avec le projet de fin d'études qui peut être réalisé en entreprise. Nous avons un réseau de partenaires industriels dans le domaine EdTech."
    },
    {
      question: "Quels sont les débouchés professionnels ?",
      answer: "Nos diplômés deviennent Ingénieurs pédagogiques, Data Scientists éducation, Développeurs d'applications éducatives, Consultants EdTech, Chercheurs en IA éducative, et entrepreneurs dans le domaine des technologies éducatives."
    },
    {
      question: "Comment postuler au master ?",
      answer: "Les candidatures se font en ligne via la plateforme de l'établissement. Un dossier de candidature complet est requis, incluant CV, lettre de motivation, relevés de notes et éventuellement une lettre de recommandation."
    },
    {
      question: "Le master est-il ouvert aux étudiants internationaux ?",
      answer: "Absolument ! Nous accueillons des étudiants de divers horizons. Des informations spécifiques pour les étudiants internationaux sont disponibles auprès du service des relations internationales de l'ENS Meknès."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="relative flex flex-col items-center justify-center text-center mb-8 px-4 sm:px-6 md:px-8">
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-0 left-1/3 opacity-70"></div>
            <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded bottom-1 left-1/4 opacity-40"></div>
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>

            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
              Contact & Informations
            </h2>

            <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="text-gray-600 max-w-6xl mx-auto space-y-4 leading-relaxed">
            <p className="text-lg">
              Pour toute information concernant le Master Systèmes Intelligents pour l'Éducation, 
              n'hésitez pas à nous contacter directement.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-2 mb-16">
          {/* Contact Information */}
          <div className="space-y-4">
            {/* Team Members */}
            <div className="rounded-lg shadow-md p-2">
              <div className="mb-6">
                <div className="relative flex flex-col items-center mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <User className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    Responsable du Master
                  </h3>
                  <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                {teamMembers.map((member, index) => {
                  const colorClasses = getColorClasses(member.color);
                  const IconComponent = member.icon;
                  
                  return (
                    <div
                      key={index}
                      className="p-2 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-lg ${colorClasses.bg} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-md mb-2">{member.name}</h4>
                          <p className="text-blue-600 font-semibold text-sm mb-2">{member.role}</p>
                          <p className="text-gray-700 text-sm mb-4">{member.expertise}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Details */}
            <div className="rounded-lg shadow-md p-2">
              <div className="mb-6">
                <div className="relative flex flex-col items-center mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    Informations pratiques
                  </h3>
                  <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const colorClasses = getColorClasses(info.color);
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="p-2"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-lg ${colorClasses.bg} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm mb-1">{info.title}</h4>
                          <p className="text-gray-800 font-semibold text-sm mb-1">{info.content}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-2  p-6">
            <div className="text-center mb-6">
              <div className="relative flex flex-col items-center justify-center text-center mb-6">
                <h2 className="text-xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
                  <Bookmark className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  Questions Fréquentes
                </h2>
                <div className="mt-2 h-1 w-36 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                Retrouvez les réponses aux questions les plus courantes sur notre formation.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white"
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 cursor-pointer text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center group text-base"
                  >
                    <span className="text-left pr-4">{faq.question}</span>
                    {activeFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className={`px-6 transition-all duration-300 overflow-hidden ${
                      activeFaq === index ? 'py-4 bg-blue-50 border-t border-blue-200' : 'max-h-0 py-0'
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;