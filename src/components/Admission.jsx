import React from "react";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Upload,
  Search,
  Users,
  Calendar,
  Clock,
  Megaphone,
  Edit3,
  CheckCircle2,
  Award,
  Briefcase,
  Lightbulb,
  Download,
  ArrowRight,
  Star,
  FileCheck,
  UserCheck,
  Mail,
  Target,
  Bookmark,
  Rocket,
  Clock4,
  Phone,
  Brain,
  Code2,
  Cpu,
  Shield,
  Bot,
  CircuitBoard,
  Cloud,
  Database,
  Sparkles,
} from "lucide-react";

const Admission = () => {
  const requiredDegrees = [
    {
      title: "Licence en éducation",
      icon: GraduationCap,
      color: "blue",
      specialities: [
        "Spécialité informatique",
        "Spécialité Mathématiques",
        "Sciences de l'éducation",
        "Technologies éducatives",
      ],
    },
    {
      title: "Licence des études fondamentales",
      icon: BookOpen,
      color: "emerald",
      specialities: [
        "Spécialité Mathématiques",
        "Spécialité Informatique",
        "Mathématiques et Informatique",
        "Sciences et technologies",
      ],
    },
    {
      title: "Diplômes équivalents",
      icon: Award,
      color: "violet",
      specialities: [
        "Licence en ingénierie",
        "Diplômes étrangers équivalents",
        "Validation des acquis professionnels",
      ],
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Préparation du dossier",
      description:
        "Rassemblez les documents nécessaires pour constituer un dossier complet et compétitif.",
      icon: FileText,
      color: "blue",
      details: [
        "Copie certifiée du diplôme de licence",
        "Relevés de notes de la licence",
        "CV détaillé et actualisé",
        "Lettre de motivation personnalisée",
        "Copie de la carte d'identité nationale",
      ],
    },
    {
      step: 2,
      title: "Dépôt en ligne",
      description:
        "Complétez votre candidature sur notre plateforme dédiée du 11 août au 7 septembre 2025.",
      icon: Upload,
      color: "emerald",
      details: [
        "Accédez à la plateforme de candidature",
        "Créez votre compte personnel sécurisé",
        "Remplissez le formulaire en ligne",
        "Téléchargez les documents numérisés",
        "Validez et soumettez votre candidature",
      ],
    },
    {
      step: 3,
      title: "Examen du dossier",
      description:
        "Notre commission pédagogique examine chaque dossier avec attention et expertise.",
      icon: Search,
      color: "violet",
      details: [
        "Évaluation approfondie des notes académiques",
        "Analyse détaillée de la lettre de motivation",
        "Examen du parcours et expériences professionnelles",
        "Appréciation des lettres de recommandation",
        "Présélection des candidats les plus prometteurs",
      ],
    },
    {
      step: 4,
      title: "Entretien de sélection",
      description:
        "Rencontre avec notre jury pour évaluer votre motivation et votre potentiel.",
      icon: Users,
      color: "orange",
      details: [
        "Test de motivation et d'engagement",
        "Évaluation des compétences techniques",
        "Discussion sur votre projet professionnel",
        "Présentation de vos attentes et ambitions",
        "Échange avec les membres du jury",
      ],
    },
  ];

  const importantDates = [
    {
      title: "Ouverture des candidatures",
      date: "11 août 2025",
      icon: Calendar,
      status: "upcoming",
      description: "Début de la période de dépôt des dossiers",
    },
    {
      title: "Clôture des candidatures",
      date: "7 septembre 2025",
      icon: Clock,
      status: "upcoming",
      description: "Date limite impérative pour le dépôt",
    },
    {
      title: "Entretiens de sélection",
      date: "15-20 septembre 2025",
      icon: UserCheck,
      status: "upcoming",
      description: "Convocation des candidats présélectionnés",
    },
    {
      title: "Publication des résultats",
      date: "25 septembre 2025",
      icon: Megaphone,
      status: "upcoming",
      description: "Annonce des candidats retenus",
    },
    {
      title: "Inscription administrative",
      date: "1-10 octobre 2025",
      icon: Edit3,
      status: "upcoming",
      description: "Finalisation de l'inscription",
    },
    {
      title: "Rentrée universitaire",
      date: "15 octobre 2025",
      icon: GraduationCap,
      status: "upcoming",
      description: "Début des cours et intégration",
    },
  ];

  const selectionCriteria = [
    {
      percentage: 50,
      label: "Dossier académique",
      icon: FileCheck,
      color: "blue",
    },
    {
      percentage: 30,
      label: "Entretien de motivation",
      icon: Users,
      color: "emerald",
    },
    {
      percentage: 15,
      label: "Expérience professionnelle",
      icon: Briefcase,
      color: "violet",
    },
    {
      percentage: 5,
      label: "Projets personnels",
      icon: Lightbulb,
      color: "orange",
    },
  ];

  const floatingIcons = [
    { icon: Brain, top: "10%", left: "5%", delay: "0s" },
    { icon: Code2, top: "20%", right: "10%", delay: "0.5s" },
    { icon: Cpu, bottom: "5%", left: "8%", delay: "1s" },
    { icon: Database, top: "45%", right: "15%", delay: "1.5s" },
    { icon: CircuitBoard, bottom: "10%", right: "10%", delay: "2s" },
    { icon: Cloud, top: "25%", left: "15%", delay: "2.5s" },
    { icon: Bot, bottom: "5%", right: "32%", delay: "3s" },
    { icon: Sparkles, top: "45%", left: "12%", delay: "3.5s" },
    { icon: GraduationCap, top: "65%", left: "28%", delay: "3.5s" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        icon: "text-blue-600",
        gradient: "from-blue-500 to-blue-600",
        border: "border-blue-200",
        light: "bg-blue-25",
      },
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        icon: "text-emerald-600",
        gradient: "from-emerald-500 to-emerald-600",
        border: "border-emerald-200",
        light: "bg-emerald-25",
      },
      violet: {
        bg: "bg-violet-50",
        text: "text-violet-700",
        icon: "text-violet-600",
        gradient: "from-violet-500 to-violet-600",
        border: "border-violet-200",
        light: "bg-violet-25",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-700",
        icon: "text-orange-600",
        gradient: "from-orange-500 to-orange-600",
        border: "border-orange-200",
        light: "bg-orange-25",
      },
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
              <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
              Processus d'Admission
            </h2>

            <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="text-gray-600 max-w-6xl mx-auto space-y-4 leading-relaxed">
            <p>
              Rejoignez le{" "}
              <strong className="text-blue-600">
                Master Systèmes Intelligents pour l'Éducation
              </strong>{" "}
              et devenez un acteur de la transformation numérique dans le
              secteur éducatif.
            </p>
          </div>
        </div>

        {/* Required Degrees Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {requiredDegrees.map((degree, index) => {
              const colorClasses = getColorClasses(degree.color);
              const IconComponent = degree.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 group border border-gray-100"
                >
                  <h3 className="font-bold text-gray-900 text-md mb-3 flex items-center space-x-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl ${colorClasses.bg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent
                        className={`h-5 w-5 ${colorClasses.icon}`}
                      />
                    </div>
                    <span>{degree.title}</span>
                  </h3>

                  <ul className="space-y-2">
                    {degree.specialities.map((speciality, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{speciality}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="mb-16">
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="relative flex flex-col items-center justify-center text-center mb-6 px-4 sm:px-6 md:px-8">
                <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-0 left-1/3 opacity-70"></div>
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full bottom-1 left-1/4 opacity-70"></div>
                <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>

                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
                  Critères <span className="text-gray-800">de Sélection</span>
                </h2>

                <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {selectionCriteria.map((criterion, index) => {
                const colorClasses = getColorClasses(criterion.color);
                const IconComponent = criterion.icon;

                return (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="relative mb-3">
                      <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center border-2 border-gray-200">
                        <div className="text-center">
                          <div
                            className={`text-xl font-bold ${colorClasses.text} mb-1`}
                          >
                            {criterion.percentage}%
                          </div>
                          <IconComponent
                            className={`h-5 w-5 ${colorClasses.icon} mx-auto`}
                          />
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-xs">
                      {criterion.label}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-800 text-sm mb-2">
                    Conseils pour votre candidature
                  </h4>
                  <ul className="text-blue-700 space-y-1 text-xs">
                    <li>
                      • Mettez en avant vos projets personnels et votre
                      motivation pour l'IA éducative
                    </li>
                    <li>
                      • Préparez soigneusement votre lettre de motivation et
                      votre CV
                    </li>
                    <li>
                      • Choisissez des recommandants qui connaissent bien votre
                      travail académique
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="relative flex flex-col items-center justify-center text-center mb-6 px-4 sm:px-6 md:px-8">
              <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-0 left-1/3 opacity-70"></div>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full bottom-1 left-1/4 opacity-70"></div>
              <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>

              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
                <Bookmark className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
                Processus <span className="text-gray-800">de Candidature</span>
              </h2>

              <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm">
              Suivez ces 4 étapes pour compléter votre candidature avec succès
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {applicationSteps.map((step) => {
              const colorClasses = getColorClasses(step.color);
              const IconComponent = step.icon;

              return (
                <div
                  key={step.step}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 group border border-gray-100"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg ${colorClasses.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent
                        className={`h-5 w-5 ${colorClasses.icon}`}
                      />
                    </div>
                    <div>
                      <div
                        className={`inline-flex items-center justify-center w-auto py-1 px-4 rounded-md ${colorClasses.bg} text-xs font-bold ${colorClasses.text} mb-2`}
                      >
                        {step.title}
                      </div>
                      {/* <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3> */}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {step.description}
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-800 text-sm mb-3 flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-gray-600" />
                      Documents requis :
                    </h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                          <span className="flex-1">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="relative flex flex-col items-center justify-center text-center mb-6 px-4 sm:px-6 md:px-8">
                <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-0 left-1/3 opacity-70"></div>
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full bottom-1 left-1/4 opacity-70"></div>
                <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>

                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
                  Calendrier <span className="text-gray-800">2025/2026</span>
                </h2>

                <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {importantDates.map((date, index) => {
                const IconComponent = date.icon;

                return (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="bg-white p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">
                          {date.title}
                        </h4>
                        <p className="text-blue-600 font-semibold text-sm mb-1">
                          {date.date}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {date.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mb-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {floatingIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="absolute text-white/40 animate-float"
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,
                    bottom: item.bottom,
                    animationDelay: item.delay,
                  }}
                >
                  <IconComponent className="h-7 w-7 md:h-8 md:w-8" />
                </div>
              );
            })}
            <div className="absolute w-4 h-4 sm:w-5 sm:h-5 animate-float bg-blue-400 rounded-full top-5 left-1/3 opacity-70"></div>
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 animate-float bg-purple-500 rounded-full bottom-1 left-1/4 opacity-70"></div>
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 animate-float bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 animate-float bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>
          </div>
          <div className="p-8 relative z-10">
            <div className="text-center mb-6">
              <div className="relative flex flex-col items-center justify-center text-center mb-6 px-4 sm:px-6 md:px-8">
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 text-white leading-snug">
                  <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white flex-shrink-0" />
                  Prêt à Nous Rejoindre ?
                </h2>
                <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-white to-blue-200 rounded-full"></div>
              </div>
            </div>

            <p className="text-blue-100 mb-6 text-sm leading-relaxed max-w-2xl mx-auto">
              Postulez dès maintenant pour la promotion 2025/2026 et devenez un
              expert en systèmes intelligents pour l'éducation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a
                href="https://candidature.umi.ac.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group text-sm"
              >
                <Upload className="h-4 w-4 mr-2" />
                Postuler en Ligne
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center group text-sm">
                <Download className="h-4 w-4 mr-2" />
                Guide du Candidat
              </button>
            </div>

            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/20 max-w-md mx-auto">
              <div className="flex items-center justify-center text-blue-100 text-xs">
                <Clock4 className="h-4 w-4 mr-2" />
                <span className="font-semibold">Période de candidature : </span>
                <span className="ml-2">11 août - 7 septembre 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2 text-blue-600" />
              Besoin d'aide ?
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              Notre équipe est disponible pour répondre à toutes vos questions
              sur le processus d'admission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs">
              <div className="flex items-center justify-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                e.abdellaouialaoui@umi.ac.ma
              </div>
              <div className="flex items-center justify-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                +212 5 35 53 38 85 / 53 38 83
              </div>
              <div className="flex items-center justify-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                Réponses sous 48h ouvrées
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
