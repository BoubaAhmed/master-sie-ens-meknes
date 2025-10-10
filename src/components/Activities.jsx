import { useState, useEffect, useRef } from 'react';
import { CalendarDays, Users, Lightbulb, Clock, MapPin, ArrowRight, ArrowLeft, X } from "lucide-react";

import aa from "../assets/streamlit2.jpg";
import bb from "../assets/chatbots.jpg";
import cc from "../assets/224A9600.JPG";

const activities = [
  {
    title: "Atelier IoT et Objets Connectés",
    description: "Initiation pratique à la création de systèmes connectés avec Arduino et capteurs intelligents. Une expérience immersive pour maîtriser les fondamentaux de l'Internet des Objets.",
    image: aa,
    icon: <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" />,
    date: "15 Mars 2024",
    time: "14:00 - 17:00",
    location: "Lab Innovation",
    category: "Workshop",
  },
  {
    title: "Workshop Intelligence Artificielle",
    description: "Exploration des modèles de Deep Learning et des applications en vision et NLP. Session intensive avec des cas pratiques concrets et démonstrations en direct.",
    image: bb,
    icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />,
    date: "22 Mars 2024",
    time: "09:00 - 13:00",
    location: "Amphithéâtre A",
    category: "Formation",
  },
  {
    title: "Journée d'Innovation & Recherche",
    description: "Présentations des projets étudiants et échanges avec des experts du domaine numérique. Networking et découvertes des dernières avancées technologiques.",
    image: cc,
    icon: <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />,
    date: "5 Avril 2024",
    time: "Toute la journée",
    location: "Campus Principal",
    category: "Conférence",
  },
];

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const carouselRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, isTransitioning]);

  const smoothTransition = (callback) => {
    setIsTransitioning(true);
    callback();
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    smoothTransition(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === activities.length - 1 ? 0 : prevIndex + 1
      );
    });
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    smoothTransition(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? activities.length - 1 : prevIndex - 1
      );
    });
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    smoothTransition(() => {
      setCurrentIndex(index);
    });
  };

  const currentActivity = activities[currentIndex];

  return (
    <section className="py-8 sm:py-12 md:py-16 w-full overflow-hidden" id="activites">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="relative flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
            {/* Animated shapes - hidden on mobile for performance */}
            <div className="hidden sm:block animate-bounce absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rotate-45 top-1 left-1/4 opacity-60"></div>
            <div className="hidden sm:block animate-bounce absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 top-0 right-1/4 opacity-40 rounded-sm"></div>
            <div className="hidden md:block animate-bounce absolute w-5 h-5 bg-pink-400 top-1/2 left-1/3 rotate-12 skew-y-6 opacity-50"></div>
            <div className="hidden sm:block animate-bounce absolute w-3 h-3 bg-indigo-500 bottom-2 right-1/3 opacity-70 rounded-md"></div>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500 flex-shrink-0" />
              Activités & Ateliers du Master
            </h2>

            <div className="mt-2 sm:mt-3 h-0.5 sm:h-1 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto px-2">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Participez à nos ateliers exclusifs et vivez l'innovation en temps réel grâce à nos activités pratiques et immersives.
            </p>
          </div>
        </div>

        {/* Custom Carousel */}
        <div 
          className="relative"
          ref={carouselRef}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Slide */}
          <div onClick={() => setShowImage(true)} className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] w-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={currentActivity.image}
                alt={currentActivity.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isTransitioning ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70 sm:from-slate-900/90 sm:via-slate-900/70 sm:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-3 sm:px-4 md:px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full py-6 sm:py-8 md:py-10 lg:py-12 transition-all duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}>
                
                {/* Left Column - Event Info Card */}
                <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                  <div className="bg-white/10 backdrop-blur-sm sm:backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 max-w-full lg:max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-blue-500/20 p-1.5 sm:p-2 rounded-lg">
                        {currentActivity.icon}
                      </div>
                      <div>
                        <span className="text-blue-300 text-xs sm:text-sm font-semibold">
                          {currentActivity.category}
                        </span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                        <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{currentActivity.date}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{currentActivity.time}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{currentActivity.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Main Content */}
                <div className="flex items-center order-1 lg:order-2">
                  <div className="text-white max-w-full lg:max-w-2xl text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                      {currentActivity.title}
                    </h3>
                    <p className="text-sm sm:text-sm md:text-md text-gray-200 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                      {currentActivity.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className={`absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 sm:p-3 text-white transition-all duration-300 border border-white/20 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-110'
            }`}
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className={`absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 sm:p-3 text-white transition-all duration-300 border border-white/20 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-110'
            }`}
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-1 sm:gap-2 absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`transition-all duration-300 rounded-full ${
                  isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-125'
                } ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-6 sm:w-8' 
                    : 'bg-white/50 w-2 sm:w-3 hover:bg-white/70'
                } h-2 sm:h-3`}
                aria-label={`Aller à l'activité ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 bg-black/50 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
            {currentIndex + 1} / {activities.length}
          </div>

          {/* Auto-play Control */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-black/50 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm hover:bg-black/70 transition-colors duration-300 flex items-center gap-1 sm:gap-2"
            >
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-red-400'}`} />
              <span className="hidden sm:inline">{isAutoPlaying ? 'Auto' : 'Pause'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Instructions */}
        <div className="sm:hidden text-center mt-4">
          <p className="text-gray-500 text-xs">Glissez pour naviguer entre les activités</p>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-400 text-xs sm:text-sm">
            Rejoignez notre communauté de 50+ participants
          </p>
        </div>
      </div>

      {showImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer" onClick={() => setShowImage(false)}>
            <img
              src={currentActivity.image}
              alt="Full view"
              className="max-h-[70vh] max-w-[80vw] object-contain rounded-lg"
            />
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-5 right-5 text-white bg-black/70 hover:bg-black/90 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        )}
    </section>
  );
}