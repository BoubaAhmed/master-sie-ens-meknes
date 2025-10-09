import { CalendarDays, Users, Lightbulb, Clock, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aa from "../assets/streamlit2.jpg";
import bb from "../assets/chatbots.jpg";
import cc from "../assets/224A9600.JPG";

const activities = [
  {
    title: "Atelier IoT et Objets Connectés",
    description: "Initiation pratique à la création de systèmes connectés avec Arduino et capteurs intelligents. Une expérience immersive pour maîtriser les fondamentaux de l'Internet des Objets.",
    image: aa,
    icon: <Lightbulb className="h-5 w-5" />,
    date: "15 Mars 2024",
    time: "14:00 - 17:00",
    location: "Lab Innovation",
    category: "Workshop",
    status: "Inscriptions ouvertes"
  },
  {
    title: "Workshop Intelligence Artificielle",
    description: "Exploration des modèles de Deep Learning et des applications en vision et NLP. Session intensive avec des cas pratiques concrets et démonstrations en direct.",
    image: bb,
    icon: <Users className="h-5 w-5" />,
    date: "22 Mars 2024",
    time: "09:00 - 13:00",
    location: "Amphithéâtre A",
    category: "Formation",
    status: "Complet"
  },
  {
    title: "Journée d'Innovation & Recherche",
    description: "Présentations des projets étudiants et échanges avec des experts du domaine numérique. Networking et découvertes des dernières avancées technologiques.",
    image: cc,
    icon: <CalendarDays className="h-5 w-5" />,
    date: "5 Avril 2024",
    time: "Toute la journée",
    location: "Campus Principal",
    category: "Conférence",
    status: "Inscriptions ouvertes"
  },
];

export default function Activities() {
  return (
    <section className="py-16 w-full overflow-hidden" id="activites">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="relative flex flex-col items-center justify-center text-center mb-8 px-4 sm:px-6 md:px-8">
            <div className="animate-bounce absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rotate-45 top-1 left-1/4 opacity-60"></div>
            <div className="animate-bounce absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 top-0 right-1/4 opacity-40 rounded-sm"></div>
            <div className="animate-bounce absolute w-5 h-5 bg-pink-400 top-1/2 left-1/3 rotate-12 skew-y-6 opacity-50"></div>
            <div className="animate-bounce absolute w-3 h-3 bg-indigo-500 bottom-2 right-1/3 opacity-70 rounded-md"></div>

            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
              <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
              Activités & Ateliers du Master
            </h2>

            <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="text-gray-600 max-w-6xl mx-auto space-y-4 leading-relaxed">
            <p>
              Participez à nos ateliers exclusifs et vivez l'innovation en temps réel grâce à nos activités pratiques et immersives.
            </p>
          </div>
        </div>

        {/* Full Width Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              renderBullet: function (index, className) {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            loop={true}
            className="w-full rounded-xl overflow-hidden"
          >
            {activities.map((act, index) => (
              <SwiperSlide key={index}>
                <div className="relative min-h-[500px] w-full">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full py-12">
                      {/* Left Column - Event Info Card */}
                      <div className="space-y-6">
                        {/* Action Card */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-md">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-500/20 p-2 rounded-lg">
                              {act.icon}
                            </div>
                            <div>
                              <span className="text-blue-300 text-sm font-semibold">
                                {act.category}
                              </span>
                              <div className={`text-xs font-medium px-2 py-1 rounded-full mt-1 ${
                                act.status === "Inscriptions ouvertes" 
                                  ? "bg-green-500/20 text-green-300" 
                                  : "bg-red-500/20 text-red-300"
                              }`}>
                                {act.status}
                              </div>
                            </div>
                          </div>

                          {/* Event Details */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-white/80">
                              <CalendarDays className="h-4 w-4 text-blue-400" />
                              <span className="text-sm">{act.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/80">
                              <Clock className="h-4 w-4 text-blue-400" />
                              <span className="text-sm">{act.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/80">
                              <MapPin className="h-4 w-4 text-blue-400" />
                              <span className="text-sm">{act.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Main Content */}
                      <div className="flex items-center">
                        <div className="text-white max-w-2xl">
                          <h3 className="text-4xl sm:text-5xl font-bold mb-2 leading-tight">
                            {act.title}
                          </h3>
                          <p className="text-md text-gray-200 mb-8 leading-relaxed">
                            {act.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 text-white transition-all duration-300 border border-white/20">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 text-white transition-all duration-300 border border-white/20">
            <ArrowRight className="h-6 w-6" />
          </button>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-2 absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20" />
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Rejoignez notre communauté de 50+ participants
          </p>
        </div>
      </div>
    </section>
  );
}