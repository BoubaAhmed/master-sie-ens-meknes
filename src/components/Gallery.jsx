import { Camera, Users2, Building, GraduationCap, Microscope, ArrowRight, ArrowLeft, MapPin, Home, Cpu, Wifi } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gallery1 from "../assets/ens/3L1A8538.jpg";
import gallery2 from "../assets/ens/3L1A8412.jpg";
import gallery3 from "../assets/ens/ens.jpg";
import gallery4 from "../assets/ens/salle-bloc.jpg";
import gallery5 from "../assets/ens/grand-salle-bloc-d.jpg";

const galleryImages = [
  {
    image: gallery1,
    title: "Salle de Cours Magistraux",
    description: "Amphithéâtre moderne équipé de vidéoprojecteurs haute définition et système audio professionnel pour un apprentissage optimal.",
    category: "Salles Cours & TD",
    icon: <GraduationCap className="h-5 w-5" />,
    location: "Bâtiment Principal - Étage 1",
    capacity: "120 places",
  },
  {
    image: gallery2,
    title: "Salle de Travaux Dirigés",
    description: "Espace collaboratif conçu pour les travaux en petits groupes avec tableaux interactifs et mobilier modulable.",
    category: "Salles Cours & TD",
    icon: <Users2 className="h-5 w-5" />,
    location: "Bâtiment Principal - Étage 2",
    capacity: "30 places",
  },
  {
    image: gallery3,
    title: "Laboratoire Informatique",
    description: "Laboratoire équipé de stations de travail performantes dédiées au développement et à l'expérimentation en intelligence artificielle.",
    category: "Salle TP",
    icon: <Cpu className="h-5 w-5" />,
    location: "Bâtiment des Sciences - RDC",
    capacity: "25 postes",
  },
  {
    image: gallery4,
    title: "Salle de TP Électronique",
    description: "Espace spécialisé pour les travaux pratiques d'électronique et IoT, équipé d'oscilloscopes et matériel Arduino/Raspberry Pi.",
    category: "Salle TP",
    icon: <Microscope className="h-5 w-5" />,
    location: "Bâtiment Technique - Étage 1",
    capacity: "20 postes",
  },
  {
    image: gallery5,
    title: "Hall Principal & Accueil",
    description: "Espace d'accueil moderne avec zone de détente, bornes interactives et espace de coworking pour les étudiants.",
    category: "Infrastructure",
    icon: <Home className="h-5 w-5" />,
    location: "Bâtiment Principal - Hall",
    capacity: "Espace commun",
  },
  {
    image: gallery1,
    title: "Salle de Réseaux & Télécoms",
    description: "Laboratoire spécialisé dans les réseaux informatiques et télécommunications avec équipements Cisco et simulateurs réseau.",
    category: "Salle TP",
    icon: <Wifi className="h-5 w-5" />,
    location: "Bâtiment des Sciences - Étage 1",
    capacity: "18 postes",
  }
];

export default function Gallery() {

return (
    <section className="py-16 w-full overflow-hidden" id="galerie">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <div className="relative flex flex-col items-center justify-center text-center mb-8">
                <div className="animate-pulse absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rotate-45 top-1 left-1/4 opacity-60"></div>
                <div className="animate-pulse absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 top-0 right-1/4 opacity-40 rounded-sm"></div>
                <div className="animate-pulse absolute w-5 h-5 bg-indigo-400 top-1/2 left-1/3 rotate-12 skew-y-6 opacity-50"></div>
                <div className="animate-pulse absolute w-3 h-3 bg-blue-500 bottom-2 right-1/3 opacity-70 rounded-md"></div>

                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
                    <Building className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
                    Infrastructures & Salles
                </h2>

                <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="text-gray-600 max-w-4xl mx-auto space-y-4 leading-relaxed">
                <p className="text-lg">
                    Découvrez nos infrastructures modernes et nos salles spécialisées dédiées à l'apprentissage 
                    et à la recherche en intelligence artificielle et technologies numériques.
                </p>
                </div>
            </div>
            <div className="relative">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.gallery-next',
                        prevEl: '.gallery-prev',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.gallery-pagination',
                        renderBullet: function (index, className) {
                        return `<span class="${className} gallery-bullet"></span>`;
                        },
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={true}
                    speed={800}
                    className="w-full rounded-xl overflow-hidden shadow-2xl"
                >
                {galleryImages.map((item, index) => (
                    <SwiperSlide key={index}>
                    <div className="group cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] w-full">
                        <div className="absolute inset-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:opacity-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" /> */}
                        </div>

                        <div className="max-w-7xl mx-auto absolute w-full h-full flex items-center justify-center px-4">
                            <div className="bg-white/10  group-hover:hidden backdrop-blur-md rounded-lg p-3 border border-white/20 max-w-md">
                                    <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-blue-500/20 p-2 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className="text-blue-300 text-sm font-semibold">
                                        {item.category}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-4 leading-tight">
                                        {item.title}
                                    </h3>
                                    </div>
                                    </div>
                                    <p className="text-sm text-gray-200 leading-relaxed mb-6 lg:opacity-90 lg:group-hover:opacity-100 transition-opacity duration-300">
                                        {item.description}
                                    </p>

                                    {/* Location */}
                                    <div className="flex items-center gap-3 text-white/80 mb-4">
                                    <MapPin className="h-4 w-4 text-blue-400" />
                                    <span className="text-sm">{item.location} | {item.capacity}</span>
                                    </div>

                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>

                <button className="gallery-prev absolute left-3 cursor-pointer bottom-1/3 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 text-white transition-all duration-300 border border-white/20">
                <ArrowLeft className="h-6 w-6" />
                </button>
                <button className="gallery-next absolute right-3 cursor-pointer bottom-1/3 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 text-white transition-all duration-300 border border-white/20">
                <ArrowRight className="h-6 w-6" />
                </button>

                <div className="gallery-pagination flex justify-center gap-2 absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20" />
            </div>
        </div>
    </section>
);
}