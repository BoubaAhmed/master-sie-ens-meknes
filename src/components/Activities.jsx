import { useState, useEffect, useRef } from 'react';
import { CalendarDays, Lightbulb, Clock, MapPin, ArrowRight, ArrowLeft, X, BookOpen, Brain, Rocket, MessageSquare, FileCode } from "lucide-react";
import activitiesData from '../data/activities.json';

import promtEngineering from "../assets/ens/Activities/promtEngineering.jpeg";
import chatbot from "../assets/ens/Activities/chatbot.jpg";
import streamlit from "../assets/ens/Activities/streamlit.jpg";
import defaultImg from "../assets/ens/Activities/default.jpg";
import MR from "../assets/ens/Activities/MR_SIE.jpg";
import MR_SIE_Session1 from "../assets/ens/Activities/MR_SIE_Session1.jpg";

const imageMap = {
  "../assets/ens/Activities/promtEngineering.jpeg": promtEngineering,
  "../assets/ens/Activities/chatbot.jpg": chatbot,
  "../assets/ens/Activities/streamlit.jpg": streamlit,
  "../assets/ens/Activities/MR_SIE.jpg": MR,
  "../assets/ens/Activities/MR_SIE_Session1.JPG": MR_SIE_Session1
};

const iconMap = {
  Brain: <Brain className="h-4 w-4 sm:h-5 sm:w-5" />,
  Rocket: <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />,
  MessageSquare: <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />,
  FileCode: <FileCode className="h-4 w-4 sm:h-5 sm:w-5" />,
  BookOpen: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
};

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const carouselRef = useRef(null);


  const activities = activitiesData.activities.map(activity => ({
    ...activity,
    images: activity.images
      ? imageMap[activity.images] || defaultImg
      : [defaultImg], //si aucune image, on met celle par défaut
    icon: iconMap[activity.icon]
  })).reverse();


  const currentActivity = activities[currentIndex];

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

  return (
    <section className="py-8 sm:py-12 md:py-16 w-full overflow-hidden" id="activites">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="relative flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
            <div className="animate-bounce absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rotate-45 top-1 left-1/4 opacity-60"></div>
            <div className="animate-bounce absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 top-0 right-1/4 opacity-40 rounded-sm"></div>
            <div className="animate-bounce absolute w-5 h-5 bg-pink-400 top-1/2 left-1/3 rotate-12 skew-y-6 opacity-50"></div>
            <div className="animate-bounce absolute w-3 h-3 bg-indigo-500 bottom-2 right-1/3 opacity-70 rounded-md"></div>

            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
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

        <div
          className="relative"
          ref={carouselRef}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center">
            <div className="order-2 lg:order-1 lg:flex-1 overflow-hidden">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl ">
                <img
                  src={currentActivity.images}
                  alt={currentActivity.title}
                  className="w-full h-80 object-cover cursor-pointer"
                  onClick={() => setShowImageModal(true)}
                  onError={(e) => {
                    e.target.onerror = null; // évite une boucle infinie si l’image par défaut n’existe pas
                    e.target.src = defaultImg; // chemin de l’image par défaut
                  }}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:flex-1 flex items-center">
              <div className={`bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 shadow-lg sm:shadow-xl w-full transition-all duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    {currentActivity.icon}
                  </div>
                  <div>
                    <span className="text-blue-600 text-sm sm:text-base font-semibold">
                      {currentActivity.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {currentActivity.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  {currentActivity.description}
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{currentActivity.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{currentActivity.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{currentActivity.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className={`absolute -left-2 sm:-left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg hover:bg-gray-50 rounded-full p-2 sm:p-3 text-gray-700 transition-all duration-300 border border-gray-200 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-110'
            }`}
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className={`absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg hover:bg-gray-50 rounded-full p-2 sm:p-3 text-gray-700 transition-all duration-300 border border-gray-200 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-110'
            }`}
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
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
                    : 'bg-gray-300 w-2 sm:w-3 hover:bg-gray-400'
                } h-2 sm:h-3`}
                aria-label={`Aller à l'activité ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 z-20 flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-white shadow-lg text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="hidden sm:inline">{isAutoPlaying ? 'Auto' : 'Pause'}</span>
            </button>
            <div className="bg-white shadow-lg text-gray-700 px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {activities.length}
            </div>
          </div>
        </div>

        <div className="sm:hidden text-center mt-4">
          <p className="text-gray-500 text-xs">Glissez pour naviguer entre les activités</p>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-400 text-xs sm:text-sm">
            Rejoignez notre communauté de 50+ participants
          </p>
        </div>
      </div>

      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={currentActivity.images}
              alt="Vue agrandie"
              className="max-h-[70vh] max-w-[80vw] object-contain rounded-lg"
            />
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-white bg-black/70 hover:bg-black/90 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}