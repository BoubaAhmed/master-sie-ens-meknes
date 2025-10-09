import React, { useState } from 'react';

const News = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: "Journée Portes Ouvertes 2025",
      date: "15 septembre 2025",
      category: "événement",
      image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      content: "Venez découvrir notre master lors de notre journée portes ouvertes le 15 septembre 2025. Rencontrez l'équipe pédagogique, les étudiants et visitez nos installations.",
      featured: true
    },
    {
      id: 2,
      title: "Nouveau partenariat avec l'industrie EdTech",
      date: "5 août 2025",
      category: "partenariat",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      content: "Signature d'un nouveau partenariat stratégique avec une entreprise leader dans les technologies éducatives pour renforcer l'employabilité de nos diplômés.",
      featured: true
    },
    {
      id: 3,
      title: "Conférence internationale sur l'IA en éducation",
      date: "20 juillet 2025",
      category: "conférence",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      content: "Nos étudiants et enseignants participeront à une conférence internationale sur l'IA appliquée à l'éducation à Barcelone.",
      featured: false
    },
    {
      id: 4,
      title: "Atelier d'initiation à Python pour les nouveaux étudiants",
      date: "10 octobre 2025",
      category: "atelier",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      content: "Un atelier gratuit d'initiation à la programmation Python sera organisé pour préparer les nouveaux étudiants au master.",
      featured: false
    },
    {
      id: 5,
      title: "Publication des résultats de recherche",
      date: "28 juin 2025",
      category: "recherche",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      content: "Publication des premiers résultats de recherche sur l'impact des systèmes tutoriels intelligents dans l'apprentissage des mathématiques.",
      featured: false
    },
    {
      id: 6,
      title: "Hackathon EdTech 2025",
      date: "15 décembre 2025",
      category: "compétition",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      content: "Organisation du premier hackathon EdTech dédié au développement de solutions innovantes pour l'éducation numérique.",
      featured: false
    }
  ];

  const events = [
    {
      id: 1,
      title: "Atelier Python avancé",
      date: "10 octobre 2025",
      time: "14:00 - 17:00",
      location: "Salle A12, ENS Meknès",
      type: "workshop",
      speaker: "Dr. Ahmed Benali",
      capacity: 25,
      registered: 18
    },
    {
      id: 2,
      title: "Séminaire sur l'IA éducative",
      date: "25 novembre 2025",
      time: "09:00 - 12:00",
      location: "Amphithéâtre principal",
      type: "séminaire",
      speaker: "Prof. Maria Rodriguez",
      capacity: 100,
      registered: 67
    },
    {
      id: 3,
      title: "Hackathon EdTech",
      date: "15 décembre 2025",
      time: "08:00 - 20:00",
      location: "Laboratoire d'informatique",
      type: "compétition",
      speaker: "Multiple intervenants",
      capacity: 50,
      registered: 42
    },
    {
      id: 4,
      title: "Journée carrière",
      date: "20 janvier 2026",
      time: "10:00 - 16:00",
      location: "Hall principal",
      type: "carrière",
      speaker: "Partenaires industriels",
      capacity: 200,
      registered: 89
    }
  ];

  const categories = ['all', 'événement', 'partenariat', 'conférence', 'atelier', 'recherche', 'compétition'];

  const filteredNews = activeFilter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeFilter);

  const getCategoryColor = (category) => {
    const colors = {
      'événement': 'bg-blue-100 text-blue-800',
      'partenariat': 'bg-green-100 text-green-800',
      'conférence': 'bg-purple-100 text-purple-800',
      'atelier': 'bg-orange-100 text-orange-800',
      'recherche': 'bg-red-100 text-red-800',
      'compétition': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getEventTypeColor = (type) => {
    const colors = {
      'workshop': 'bg-blue-500',
      'séminaire': 'bg-green-500',
      'compétition': 'bg-purple-500',
      'carrière': 'bg-orange-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <div className="space-y-12">
      {/* Filtres et actualités */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 md:mb-0">Actualités</h2>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'Toutes' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles en vedette */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredNews.filter(item => item.featured).map(news => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.content}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Lire la suite
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Liste des articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.filter(item => !item.featured).map(news => (
            <div key={news.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                  {news.category}
                </span>
                <span className="text-sm text-gray-500">{news.date}</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-3">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.content}</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Lire la suite →
              </button>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucune actualité trouvée pour cette catégorie.</p>
          </div>
        )}
      </section>

      {/* Événements à venir */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Événements à venir</h2>
        
        <div className="space-y-6">
          {events.map(event => (
            <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className={`w-3 h-3 rounded-full ${getEventTypeColor(event.type)} mr-3`}></div>
                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {event.speaker}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end">
                  <div className="text-sm text-gray-600 mb-2">
                    {event.registered}/{event.capacity} participants
                  </div>
                  <div className="w-32 bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
          <p className="text-blue-100 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et informations sur nos événements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap">
              S'abonner
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-3">
            Vous pouvez vous désabonner à tout moment. Respect de votre vie privée.
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;