import { useState, useEffect, useRef } from 'react';
import { X, Users2, Building, GraduationCap, Microscope, ArrowRight, ArrowLeft, MapPin, Home, Cpu, Wifi } from "lucide-react";

import gallery1 from "../assets/ens/3L1A8538.jpg";
import gallery2 from "../assets/ens/3L1A8412.jpg";
import gallery3 from "../assets/ens/ens.jpg";
import gallery4 from "../assets/ens/salle-bloc.jpg";
import gallery5 from "../assets/ens/grand-salle-bloc-d.jpg";
import { iconMap } from '../utils/iconsMap';
import galleryData from '../data/galleryData.json';

const images = {
    "3L1A8538.jpg": gallery1,
    "3L1A8412.jpg": gallery2,
    "ens.jpg": gallery3,
    "salle-bloc.jpg": gallery4,
    "grand-salle-bloc-d.jpg": gallery5
};

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const carouselRef = useRef(null);

    const galleryImages = galleryData.map((item) => ({
        ...item,
        image: images[item.image],
        icon: iconMap[item.icon]
            ? (() => {
                const IconComponent = iconMap[item.icon];
                return <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />;
            })()
            : null,
    }));

    useEffect(() => {
        if (!isAutoPlaying || isTransitioning) return;

        const interval = setInterval(() => {
        nextSlide();
        }, 5000);

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
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
        });
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        smoothTransition(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
        });
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentIndex) return;
        smoothTransition(() => {
        setCurrentIndex(index);
        });
    };

    useEffect(() => {
        const handleKey = (e) => {
        if (e.key === "Escape") setIsModalOpen(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const currentItem = galleryImages[currentIndex];

    return (
        <section className="py-8 sm:py-12 md:py-16 w-full overflow-hidden" id="galerie">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="text-center mb-8 sm:mb-12">
                <div className="relative flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
                    <div className="hidden sm:block animate-pulse absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rotate-45 top-1 left-1/4 opacity-60"></div>
                    <div className="hidden sm:block animate-pulse absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 top-0 right-1/4 opacity-40 rounded-sm"></div>
                    <div className="hidden md:block animate-pulse absolute w-5 h-5 bg-indigo-400 top-1/2 left-1/3 rotate-12 skew-y-6 opacity-50"></div>
                    <div className="hidden sm:block animate-pulse absolute w-3 h-3 bg-blue-500 bottom-2 right-1/3 opacity-70 rounded-md"></div>

                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500 flex-shrink-0" />
                    Infrastructures & Salles
                    </h2>

                    <div className="mt-2 sm:mt-3 h-0.5 sm:h-1 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="text-gray-600 max-w-4xl mx-auto px-2">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Découvrez nos infrastructures modernes et nos salles spécialisées dédiées à l'apprentissage 
                    et à la recherche en intelligence artificielle et technologies numériques.
                    </p>
                </div>
            </div>

            <div
                className="relative"
                ref={carouselRef}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
            <div onClick={() => {
                setSelectedImage(currentItem.image);
                setIsModalOpen(true);
            }} className="group  cursor-pointer relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] w-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl">
                <div className="absolute inset-0">
                <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                    isTransitioning ? 'scale-105' : 'scale-100'
                    }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70 sm:from-slate-900/80 sm:via-slate-900/60 sm:to-transparent transition-opacity duration-500 ${
                    isTransitioning ? 'opacity-80' : 'group-hover:opacity-0'
                }`} />
                </div>

                <div className="max-w-7xl mx-auto absolute w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-6">
                    <div className={`bg-white/10 backdrop-blur-sm sm:backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/20 max-w-xs sm:max-w-sm md:max-w-md w-full transition-all duration-500 ${
                        isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100 group-hover:hidden'
                    }`}>
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="bg-blue-500/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                            {currentItem.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <span className="text-blue-300 text-xs sm:text-sm font-semibold block">
                            {currentItem.category}
                            </span>
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight mt-1 sm:mt-2 line-clamp-2">
                            {currentItem.title}
                            </h3>
                        </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                        {currentItem.description}
                        </p>

                        <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm truncate">
                            {currentItem.location} | {currentItem.capacity}
                        </span>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className={`absolute left-2 sm:left-3 md:left-4 bottom-1/3 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 text-white transition-all duration-300 border border-white/20 ${
                isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-110'
                }`}
            >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>

            <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className={`absolute right-2 sm:right-3 md:right-4 bottom-1/3 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 text-white transition-all duration-300 border border-white/20 ${
                isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-110'
                }`}
            >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>

            <div className="flex justify-center gap-1 sm:gap-2 absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                {galleryImages.map((_, index) => (
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
                    aria-label={`Aller à la slide ${index + 1}`}
                />
                ))}
            </div>

            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 bg-black/50 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                {currentIndex + 1} / {galleryImages.length}
            </div>

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

            <div className=" text-center mt-4">
            <p className="text-gray-500 text-xs">Glissez pour naviguer entre les images et cliquez pour agrandir</p>
            </div>
        </div>

        {isModalOpen && (
            <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center  cursor-pointer"
            onClick={() => setIsModalOpen(false)}
            >
            <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
            >
                <X className="w-6 h-6" />
            </button>

            <img
                src={selectedImage}
                alt="Preview"
                className="max-w-[80vw] max-h-[70vh] object-contain rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
            />
            </div>
        )}
        </section>
    );
}