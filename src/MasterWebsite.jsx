import React, { useState } from 'react';

const MasterWebsite = () => {
  const [activeTab, setActiveTab] = useState('presentation');
  const [menuOpen, setMenuOpen] = useState(false);

  const newsItems = [
    {
      id: 1,
      title: "Journée Portes Ouvertes 2025",
      date: "15 septembre 2025",
      content: "Venez découvrir notre master lors de notre journée portes ouvertes le 15 septembre 2025."
    },
    {
      id: 2,
      title: "Nouveau partenariat avec l'industrie",
      date: "5 août 2025",
      content: "Signature d'un nouveau partenariat avec une entreprise leader dans les technologies éducatives."
    },
    {
      id: 3,
      title: "Conférence sur l'IA en éducation",
      date: "20 juillet 2025",
      content: "Nos étudiants participeront à une conférence internationale sur l'IA appliquée à l'éducation."
    }
  ];

  const events = [
    {
      id: 1,
      title: "Atelier Python avancé",
      date: "10 octobre 2025",
      location: "Salle A12, ENS Meknès"
    },
    {
      id: 2,
      title: "Séminaire sur l'IA éducative",
      date: "25 novembre 2025",
      location: "Amphithéâtre principal"
    },
    {
      id: 3,
      title: "Hackathon EdTech",
      date: "15 décembre 2025",
      location: "Laboratoire d'informatique"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9 5m-9 5l9-5" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-800">Master 2025/2026</h1>
              <p className="text-sm text-gray-600">Systèmes Intelligents pour l'Éducation</p>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-blue-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button 
              className={`font-medium ${activeTab === 'presentation' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
              onClick={() => setActiveTab('presentation')}
            >
              Présentation
            </button>
            <button 
              className={`font-medium ${activeTab === 'program' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
              onClick={() => setActiveTab('program')}
            >
              Programme
            </button>
            <button 
              className={`font-medium ${activeTab === 'admission' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
              onClick={() => setActiveTab('admission')}
            >
              Admission
            </button>
            <button 
              className={`font-medium ${activeTab === 'news' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
              onClick={() => setActiveTab('news')}
            >
              Actualités
            </button>
            <button 
              className={`font-medium ${activeTab === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-white py-2 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <button 
                className={`font-medium py-2 ${activeTab === 'presentation' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => {setActiveTab('presentation'); setMenuOpen(false);}}
              >
                Présentation
              </button>
              <button 
                className={`font-medium py-2 ${activeTab === 'program' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => {setActiveTab('program'); setMenuOpen(false);}}
              >
                Programme
              </button>
              <button 
                className={`font-medium py-2 ${activeTab === 'admission' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => {setActiveTab('admission'); setMenuOpen(false);}}
              >
                Admission
              </button>
              <button 
                className={`font-medium py-2 ${activeTab === 'news' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => {setActiveTab('news'); setMenuOpen(false);}}
              >
                Actualités
              </button>
              <button 
                className={`font-medium py-2 ${activeTab === 'contact' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => {setActiveTab('contact'); setMenuOpen(false);}}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Master Systèmes Intelligents pour l'Éducation</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Une formation d'excellence en intelligence artificielle appliquée à l'éducation, 
            dispensée à l'École Normale Supérieure de Meknès.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">Temps Normal</span>
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium">Temps Aménagé</span>
          </div>
          <a 
            href="https://candidature.uml.ac.ma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Postuler maintenant
          </a>
          <p className="mt-4 text-gray-600">Du 11/08 au 07/09/2025</p>
        </section>

        {/* Tab Content */}
        {activeTab === 'presentation' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Présentation du Master</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Objectifs de la formation</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Fondements théoriques et pratiques</h4>
                  <p className="text-gray-700">
                    Maîtriser les concepts fondamentaux de l'intelligence artificielle et leurs applications dans le domaine éducatif.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Conception et développement</h4>
                  <p className="text-gray-700">
                    Acquérir les compétences nécessaires pour concevoir, développer et évaluer des systèmes intelligents adaptés aux besoins éducatifs.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Analyse de données</h4>
                  <p className="text-gray-700">
                    Développer des compétences avancées en traitement et analyse de données éducatives pour optimiser les processus d'apprentissage.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Innovation et recherche</h4>
                  <p className="text-gray-700">
                    Contribuer à l'innovation et à la recherche dans le domaine du numérique éducatif et des technologies intelligentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pourquoi choisir ce master ?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Expertise en IA éducative</h4>
                  <p className="text-gray-600">
                    Formation spécialisée dans l'application de l'intelligence artificielle aux contextes éducatifs.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Pédagogie innovante</h4>
                  <p className="text-gray-600">
                    Approche pédagogique combinant théorie et pratique avec des projets concrets.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Débouchés variés</h4>
                  <p className="text-gray-600">
                    Opportunités dans l'éducation, la EdTech, la recherche et le développement de solutions intelligentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">À propos de l'École Normale Supérieure de Meknès</h3>
              <p className="text-gray-700">
                L'École Normale Supérieure de Meknès est un établissement d'enseignement supérieur marocain reconnu pour 
                l'excellence de ses formations dans le domaine de l'éducation. Située dans la ville impériale de Meknès, 
                l'école dispose d'infrastructures modernes et d'un corps professoral qualifié pour assurer une formation 
                de haut niveau.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'program' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Programme de formation</h2>
            <p className="text-gray-700 mb-6">
              Le master "Systèmes Intelligents pour l'Éducation" se déroule sur deux années (4 semestres) 
              et couvre un large éventail de compétences en intelligence artificielle, technologies éducatives 
              et pédagogie.
            </p>

            <div className="space-y-8">
              {/* Semestre 1 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Semestre 1 (S1)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Intelligence artificielle et Apprentissage statistique",
                    "Développement mobile & web pour l'éducation",
                    "Vision artificielle et traitement d'images",
                    "Didactique générale et Ingénierie Pédagogique",
                    "Langues étrangères",
                    "Programmation avancée avec Python",
                    "Soft skills"
                  ].map((subject, index) => (
                    <div key={index} className="bg-blue-50 p-3 rounded-lg flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semestre 2 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Semestre 2 (S2)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Data science et visualisation",
                    "Base de données avancée et Big Data éducatif",
                    "Systèmes Distribués et Applications Réparties",
                    "Apprentissage profond (en Anglais)",
                    "Psychologie de l'Intelligence (en Arabe)",
                    "Culture entrepreneuriale et techniques de communication",
                    "Méthodologie de recherche"
                  ].map((subject, index) => (
                    <div key={index} className="bg-green-50 p-3 rounded-lg flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semestre 3 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Semestre 3 (S3)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "NLP et ses Applications en Éducation",
                    "Internet Of Things (IoT)",
                    "Technologies Éducatives et Systèmes Tutoriels Intelligents",
                    "Recherche Opérationnelle",
                    "Cryptographie et sécurité informatique",
                    "Robotique Éducative et Applications",
                    "Blockchain"
                  ].map((subject, index) => (
                    <div key={index} className="bg-purple-50 p-3 rounded-lg flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semestre 4 */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Semestre 4 (S4)</h3>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-orange-700 mb-2">Projet de Fin d'études</h4>
                  <p className="text-gray-700">
                    Réalisation d'un projet de recherche ou de développement appliqué dans le domaine 
                    des systèmes intelligents pour l'éducation, sous la direction d'un enseignant-chercheur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'admission' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Conditions d'admission</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Diplômes requis</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-blue-200 rounded-lg p-5">
                  <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Licence en éducation
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Spécialité informatique</li>
                    <li>Spécialité Mathématiques</li>
                  </ul>
                </div>
                <div className="border border-blue-200 rounded-lg p-5">
                  <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Licence des études fondamentales
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Spécialité Mathématiques</li>
                    <li>Spécialité Informatique</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Processus de candidature</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Préparation du dossier</h4>
                    <p className="text-gray-700">
                      Rassemblez les documents nécessaires : diplôme, relevés de notes, CV, lettre de motivation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Dépôt en ligne</h4>
                    <p className="text-gray-700">
                      Complétez votre candidature sur la plateforme en ligne du 11 août au 7 septembre 2025.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Examen du dossier</h4>
                    <p className="text-gray-700">
                      Votre dossier sera examiné par la commission pédagogique du master.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Entretien</h4>
                    <p className="text-gray-700">
                      Les candidats présélectionnés seront convoqués pour un entretien.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Dates importantes</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex-1 min-w-[200px]">
                  <p className="font-bold text-blue-700">Ouverture des candidatures</p>
                  <p className="text-gray-700">11 août 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-1 min-w-[200px]">
                  <p className="font-bold text-blue-700">Clôture des candidatures</p>
                  <p className="text-gray-700">7 septembre 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-1 min-w-[200px]">
                  <p className="font-bold text-blue-700">Publication des résultats</p>
                  <p className="text-gray-700">20 septembre 2025</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="https://candidature.uml.ac.ma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Accéder à la plateforme de candidature
              </a>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Actualités et Événements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Actualités</h3>
                <div className="space-y-6">
                  {newsItems.map(news => (
                    <div key={news.id} className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-bold text-lg text-gray-800 mb-1">{news.title}</h4>
                      <p className="text-blue-600 text-sm mb-2">{news.date}</p>
                      <p className="text-gray-700">{news.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Événements à venir</h3>
                <div className="space-y-6">
                  {events.map(event => (
                    <div key={event.id} className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-lg text-gray-800 mb-1">{event.title}</h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact et informations</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coordonnateur du master</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-xl text-blue-800 mb-2">Dr. El Arbi ABDELLAOUI ALAOUI</h4>
                  <div className="flex items-center text-gray-700 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>e.abdellaouialaoui@uml.ac.ma</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-3">École Normale Supérieure de Meknès</h4>
                  <div className="flex items-start text-gray-700 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Meknès, Maroc</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Formulaire de contact</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Nom complet</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Adresse email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-1">Sujet</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Master Systèmes Intelligents pour l'Éducation</h3>
              <p className="text-blue-200">
                Une formation d'excellence en intelligence artificielle appliquée à l'éducation.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liens utiles</h4>
              <ul className="space-y-2">
                <li><a href="https://candidature.uml.ac.ma" className="text-blue-200 hover:text-white transition">Plateforme de candidature</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">École Normale Supérieure de Meknès</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Université Moulay Ismail</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-blue-200">e.abdellaouialaoui@uml.ac.ma</p>
              <p className="text-blue-200">École Normale Supérieure, Meknès, Maroc</p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300">
            <p>&copy; 2025 Master Systèmes Intelligents pour l'Éducation - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasterWebsite;