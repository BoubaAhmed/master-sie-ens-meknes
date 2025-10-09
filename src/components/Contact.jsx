import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Award,
  BookOpen,
  Cpu,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  School,
  GraduationCap,
  Building,
  Map,
  Target,
  Bookmark,
  Rocket,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'information'
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'information'
    });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "École Normale Supérieure, Meknès, Maroc",
      color: "emerald"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven: 8h30 - 16h30",
      color: "orange"
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
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        icon: 'text-blue-600',
        gradient: 'from-blue-500 to-blue-600',
        border: 'border-blue-200',
        light: 'bg-blue-25'
      },
      emerald: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        icon: 'text-emerald-600',
        gradient: 'from-emerald-500 to-emerald-600',
        border: 'border-emerald-200',
        light: 'bg-emerald-25'
      },
      violet: {
        bg: 'bg-violet-50',
        text: 'text-violet-700',
        icon: 'text-violet-600',
        gradient: 'from-violet-500 to-violet-600',
        border: 'border-violet-200',
        light: 'bg-violet-25'
      },
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        icon: 'text-orange-600',
        gradient: 'from-orange-500 to-orange-600',
        border: 'border-orange-200',
        light: 'bg-orange-25'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="relative flex flex-col items-center justify-center text-center mb-8 px-4 sm:px-6 md:px-8">
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-0 left-1/3 opacity-70"></div>
            <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded bottom-1 left-1/4 opacity-40"></div>
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>

            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
              Contactez-Nous
            </h2>

            <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="text-gray-600 max-w-6xl mx-auto space-y-4 leading-relaxed">
            <p>
              Une question sur le master ? Notre équipe est à votre écoute pour vous accompagner 
              dans votre projet de formation.
            </p>
          </div>
        </div>

        {/* Main Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Team Members */}
            <div className="rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <div className="relative flex flex-col items-center mb-4">
                  <h3 className="text-lg font-bold flex items-center  gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <User className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    Responsables du Master
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
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${colorClasses.bg} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm mb-1">{member.name}</h4>
                          <p className="text-xs text-gray-600 mb-2">{member.role}</p>
                          <p className="text-xs text-gray-700 mb-3">{member.expertise}</p>
                          <a
                            href={`mailto:${member.email}`}
                            className="text-blue-600 hover:text-blue-800 text-xs flex items-center group/link"
                          >
                            <Mail className="h-3 w-3 mr-1" />
                            {member.email}
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {contactInfo.map((info, index) => {
                  const colorClasses = getColorClasses(info.color);
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${colorClasses.bg} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm mb-1">{info.title}</h4>
                          <p className="text-xs text-gray-600 mb-2">{info.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="relative flex flex-col items-center justify-center text-center mb-4">
                  <h2 className="text-xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
                    <Send className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-500 flex-shrink-0" />
                    Envoyez-nous un Message
                  </h2>

                  <div className="mt-2 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                  Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-gray-700 font-medium text-sm">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 text-gray-500 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Votre nom complet"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-gray-700 font-medium text-sm">
                      Adresse email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 text-gray-500  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="category" className="block text-gray-700 font-medium text-sm">
                    Objet de votre message
                  </label>
                  <select 
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                  >
                    <option value="information">Demande d'information</option>
                    <option value="admission">Candidature et admission</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="stage">Stage et emploi</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-gray-700 font-medium text-sm">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-500 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm"
                    placeholder="Décrivez votre demande en détail..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group text-sm"
                >
                  <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Envoyer le Message
                </button>

                <p className="text-xs text-gray-500 text-center">
                  * Champs obligatoires. Nous vous répondrons dans les 48 heures ouvrées.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="relative flex flex-col items-center justify-center text-center mb-6 px-4 sm:px-6 md:px-8">
                <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-0 left-1/3 opacity-70"></div>
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full bottom-1 left-1/4 opacity-70"></div>
                <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>

                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
                  <Bookmark className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
                  Questions <span className="text-gray-800">Fréquentes</span>
                </h2>

                <div className="mt-2 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                Retrouvez les réponses aux questions les plus courantes sur notre formation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 py-3 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center group text-sm"
                  >
                    <span>{faq.question}</span>
                    {activeFaq === index ? (
                      <ChevronUp className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500 group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                  <div 
                    className={`px-4 transition-all duration-300 overflow-hidden ${
                      activeFaq === index ? 'py-3 bg-blue-50 border-t border-blue-200' : 'max-h-0 py-0'
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600 mb-3 text-sm">
                Vous ne trouvez pas la réponse à votre question ?
              </p>
              <a
                href="mailto:e.abdellaouialaoui@umi.ac.ma"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group text-sm"
              >
                Contactez-nous directement
                <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;