import React from 'react';
import { 
  Brain, 
  Code2, 
  Lightbulb,
  BarChart3,
  BookOpen,
  Users,
  Rocket,
  GraduationCap,
  Microscope,
  Briefcase,
  Target,
  Globe,
  FlaskConical,
  Handshake,
  Award,
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
  School,
  MapPin,
  Bot
} from 'lucide-react';

const Presentation = () => {
  const objectives = [
    {
      icon: Brain,
      description: "Maîtriser les concepts fondamentaux de l'intelligence artificielle et leurs applications dans le domaine éducatif.",
      color: "blue"
    },
    {
      icon: Code2,
      description: "Acquérir les compétences nécessaires pour concevoir, développer et évaluer des systèmes intelligents adaptés aux besoins éducatifs.",
      color: "emerald"
    },
    {
      icon: Lightbulb,
      description: "Contribuer à l'innovation et à la recherche dans le domaine du numérique éducatif et des technologies intelligentes.",
      color: "violet"
    }
  ];

  const careerOpportunities = [
    {
      icon: BarChart3,
      title: "Analyste de données éducatives",
      description: "Exploiter les données pour améliorer les processus d'apprentissage et les résultats des élèves.",
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "Concepteur de logiciels éducatifs",
      description: "Créer des programmes et applications intégrant l'IA pour personnaliser l'expérience éducative.",
      color: "emerald"
    },
    {
      icon: Microscope,
      title: "Chercheur académique",
      description: "Contribuer à l'avancement des connaissances en IA éducative par la recherche et publications.",
      color: "violet"
    },
    {
      icon: Users,
      title: "Conseiller en technologie éducative",
      description: "Guider l'intégration de solutions d'IA dans les curriculums et pratiques pédagogiques.",
      color: "orange"
    },
    {
      icon: Rocket,
      title: "Entrepreneur en EdTech",
      description: "Lancer des startups développant des outils innovants pour l'éducation basés sur l'IA.",
      color: "pink"
    },
    {
      icon: Target,
      title: "Responsable innovation pédagogique",
      description: "Piloter la transformation digitale des établissements éducatifs avec les technologies IA.",
      color: "indigo"
    }
  ];

  const programHighlights = [
    {
      icon: Award,
      title: "Formation d'excellence",
      description: "Programme unique combinant IA et sciences de l'éducation",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Durée",
      description: "2 années (4 semestres) avec stages professionnels",
      color: "emerald"
    },
    {
      icon: GraduationCap,
      title: "Approche pédagogique",
      description: "Équilibre théorie, pratique et projets professionnels",
      color: "violet"
    },
    {
      icon: UserCheck,
      title: "Encadrement",
      description: "Enseignants-chercheurs et professionnels du secteur",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        icon: 'text-blue-600',
        gradient: 'from-blue-500 to-blue-600',
        light: 'bg-blue-25'
      },
      emerald: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        icon: 'text-emerald-600',
        gradient: 'from-emerald-500 to-emerald-600',
        light: 'bg-emerald-25'
      },
      violet: {
        bg: 'bg-violet-50',
        text: 'text-violet-700',
        icon: 'text-violet-600',
        gradient: 'from-violet-500 to-violet-600',
        light: 'bg-violet-25'
      },
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        icon: 'text-orange-600',
        gradient: 'from-orange-500 to-orange-600',
        light: 'bg-orange-25'
      },
      pink: {
        bg: 'bg-pink-50',
        text: 'text-pink-700',
        icon: 'text-pink-600',
        gradient: 'from-pink-500 to-pink-600',
        light: 'bg-pink-25'
      },
      indigo: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-700',
        icon: 'text-indigo-600',
        gradient: 'from-indigo-500 to-indigo-600',
        light: 'bg-indigo-25'
      }
    };
    return colors[color] || colors.blue;
  };

  const stats = [
    { value: "95%", label: "Taux d'insertion professionnelle", color: "emerald" },
    { value: "25+", label: "Partenaires industriels et académiques", color: "blue" },
    { value: "15", label: "Années d'expérience en formation", color: "violet" },
    { value: "100%", label: "Encadrement personnalisé", color: "orange" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            
          </h1>
          <div className="relative flex flex-col items-center justify-center text-center mb-8 px-4 sm:px-6 md:px-8">
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-0 left-1/3 opacity-70"></div>
            <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded bottom-1 left-1/4 opacity-40"></div>
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
              <Bot className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
              Systèmes Intelligents pour l'Éducation
            </h2>

            <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="text-gray-600 max-w-6xl mx-auto space-y-4 leading-relaxed">
            <p>
              Le <strong className="text-blue-600">Master Systèmes Intelligents pour l'Éducation</strong> est une formation 
              innovante qui prépare les futurs experts à transformer le paysage éducatif grâce aux 
              technologies d'intelligence artificielle.
            </p>
            <p>
              Ce programme unique au Maroc allie les avancées récentes en IA avec les sciences de 
              l'éducation pour former des professionnels capables de concevoir, développer et 
              déployer des solutions intelligentes adaptées aux besoins éducatifs contemporains.
            </p>
          </div>
        </div>
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((highlight, index) => {
              const colorClasses = getColorClasses(highlight.color);
              const IconComponent = highlight.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 group border border-gray-100"
                >
                  <h3 className="font-bold text-gray-900 text-md mb-3 flex items-center space-x-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl ${colorClasses.bg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
                    </div>
                    <span>{highlight.title}</span>
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </section>


        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="relative flex flex-col items-center justify-center text-center mb-8 px-4 sm:px-6 md:px-8">
              <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-0 left-1/3 opacity-70"></div>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full bottom-1 left-1/4 opacity-70"></div>
              <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>

              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
                Objectifs <span className="text-gray-800">de la Formation</span>
              </h2>

              <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            <p className="text-gray-600 max-w-3xl mx-auto">
              Notre programme vise à développer des compétences clés pour exceller dans le domaine
              des systèmes intelligents appliqués à l'éducation.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => {
              const colorClasses = getColorClasses(objective.color);
              const IconComponent = objective.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 p-4 group"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl ${colorClasses.bg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`h-6 w-6 ${colorClasses.icon}`} />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {objective.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium text-white mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>Meknès, Maroc</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  École Normale Supérieure de Meknès
                </h3>
                <div className="space-y-4 text-blue-100 leading-relaxed">
                  <p>
                    Établissement d'enseignement supérieur reconnu pour l'excellence de ses formations 
                    dans le domaine de l'éducation et de la formation des cadres pédagogiques.
                  </p>
                  <p>
                    Située dans la ville impériale de Meknès, l'école dispose d'infrastructures modernes 
                    et d'un corps professoral qualifié pour assurer une formation de haut niveau alignée 
                    sur les standards internationaux.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <h4 className="font-bold text-xl text-white mb-6 text-center">Excellence Académique</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-blue-100 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h5 className="font-semibold text-white text-sm mb-2 flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-300" />
                  Conditions d'Admission
                </h5>
                <p className="text-blue-100 text-xs leading-relaxed">
                  Concours ouvert aux titulaires d'une licence en Informatique, Mathématiques, 
                  Sciences de l'Éducation ou domaines connexes. Formation en présentiel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="relative flex flex-col items-center justify-center text-center mb-10 px-4 sm:px-6 md:px-8">
              <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-1 left-1/3 opacity-70 animate-bounce"></div>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full bottom-2 left-1/4 opacity-70 animate-bounce"></div>
              <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70 animate-bounce"></div>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-1 right-1/4 opacity-60 animate-bounce"></div>          
              <h2 className="flex items-center justify-center gap-3 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
                <Briefcase
                  aria-hidden="true"
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-indigo-700 flex-shrink-0"
                />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Débouchés <span className="text-gray-800">Professionnels</span>
                </span>
              </h2>

              <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Les diplômés de ce master accèdent à des carrières variées et prometteuses
              dans le domaine des technologies éducatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerOpportunities.map((career, index) => {
              const colorClasses = getColorClasses(career.color);
              const IconComponent = career.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 group border border-gray-100"
                >
                  <h3 className="font-bold text-gray-900 text-md mb-3 flex items-center space-x-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl ${colorClasses.bg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
                    </div>
                    <span>{career.title}</span>
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">{career.description}</p>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Presentation;