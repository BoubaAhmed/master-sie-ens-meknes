import { useState, useEffect, useRef, useCallback } from 'react';
import { Megaphone, Calendar, Clock, MapPin, ArrowRight, ArrowLeft, Bell, Pin } from "lucide-react";
import announcements from '../data/announcements.json';

export default function Announcements() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    // Séparer les annonces épinglées et non épinglées
    const pinnedAnnouncements = announcements.filter(announcement => announcement.pinned === true);
    const nonPinnedAnnouncements = announcements.filter(announcement => !announcement.pinned);

    const getSlidesToShow = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    };

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(getSlidesToShow());
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex + slidesToShow >= nonPinnedAnnouncements.length ? 0 : prevIndex + 1
        );
    }, [slidesToShow, nonPinnedAnnouncements.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.max(0, nonPinnedAnnouncements.length - slidesToShow) : prevIndex - 1
        );
    }, [slidesToShow, nonPinnedAnnouncements.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, slidesToShow, nextSlide]);

    const getVisibleAnnouncements = () => {
        return nonPinnedAnnouncements.slice(currentIndex, currentIndex + slidesToShow);
    };

    const getUrgencyColor = (urgency) => {
        switch (urgency) {
            case "high":
                return "bg-red-500 text-white";
            case "medium":
                return "bg-orange-500 text-white";
            case "low":
                return "bg-blue-500 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };

    const getUrgencyText = (urgency) => {
        switch (urgency) {
            case "high":
                return "Urgent";
            case "medium":
                return "Important";
            case "low":
                return "Information";
            default:
                return "Info";
        }
    };

    return (
        <section className="py-10 w-full" id="annonces">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <div className="relative flex flex-col items-center justify-center text-center mb-8">
                        <div className="animate-pulse absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rotate-45 top-1 left-1/4 opacity-60"></div>
                        <div className="animate-pulse absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 top-0 right-1/4 opacity-40 rounded-sm"></div>
                        <div className="animate-pulse absolute w-5 h-5 bg-blue-400 top-1/2 left-1/3 rotate-12 skew-y-6 opacity-50"></div>
                        <div className="animate-pulse absolute w-3 h-3 bg-indigo-500 bottom-2 right-1/3 opacity-70 rounded-md"></div>

                        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                            <Megaphone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-indigo-500 flex-shrink-0" />
                            Annonces du Master
                        </h2>

                        <div className="mt-3 h-1 w-32 sm:w-40 md:w-48 lg:w-56 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-600 max-w-4xl mx-auto space-y-4 leading-relaxed">
                        <p className="text-lg">
                            Restez informé des dernières actualités, dates importantes et événements
                            du Master Intelligence Artificielle et Data Science.
                        </p>
                    </div>
                </div>

                {/* Statistiques avec compteur des épinglées */}
                <div className="text-center mt-2 mb-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-indigo-600">{announcements.length}</div>
                            <div className="text-sm text-gray-600">Annonces</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-yellow-600">
                                {pinnedAnnouncements.length}
                            </div>
                            <div className="text-sm text-gray-600">Épinglées</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-red-600">
                                {announcements.filter(a => a.urgency === "high").length}
                            </div>
                            <div className="text-sm text-gray-600">Urgentes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-orange-600">
                                {announcements.filter(a => a.urgency === "medium").length}
                            </div>
                            <div className="text-sm text-gray-600">Importantes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-blue-600">
                                {announcements.filter(a => a.category === "Académique").length}
                            </div>
                            <div className="text-sm text-gray-600">Académiques</div>
                        </div>
                    </div>
                </div>

                {/* Section des annonces épinglées - TOUJOURS VISIBLES */}
                {pinnedAnnouncements.length > 0 && (
                    <div className="mb-12">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Pin className="h-6 w-6 text-yellow-500" />
                            <h3 className="text-xl font-bold text-gray-800">Annonces Importantes</h3>
                            <Pin className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pinnedAnnouncements.map((announcement) => (
                                <div
                                    key={`pinned-${announcement.id}`}
                                    className="group bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border-2 border-yellow-400 min-h-auto flex flex-col relative"
                                >
                                    {/* Badge Épinglé */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className="bg-yellow-500 text-white p-2 rounded-full shadow-lg">
                                            <Pin className="h-4 w-4" />
                                        </div>
                                    </div>

                                    <div className={`px-4 py-3 ${getUrgencyColor(announcement.urgency)}`}>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold">
                                                {getUrgencyText(announcement.urgency)}
                                            </span>
                                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                                {announcement.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col h-full">
                                        <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                                            {announcement.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            {announcement.description}
                                        </p>

                                        <div className="space-y-2 text-sm text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-indigo-500" />
                                                <span>{announcement.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-indigo-500" />
                                                <span>{announcement.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-indigo-500" />
                                                <span className="truncate">{announcement.location}</span>
                                            </div>
                                        </div>
                                        {announcement.link && (
                                            <a href={announcement.link} target='_blank' className="mt-4 flex items-center justify-between">
                                                <span className="text-indigo-600 text-sm font-semibold group-hover:text-indigo-700 transition-colors">
                                                    Voir les détails
                                                </span>
                                                <ArrowRight className="h-4 w-4 text-indigo-500 transform group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Carousel des annonces non épinglées */}
                {nonPinnedAnnouncements.length > 0 && (
                    <div
                        className="relative"
                        ref={carouselRef}
                    >
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 text-indigo-600 transition-all duration-300 hover:scale-110 -ml-4"
                        >
                            <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 text-indigo-600 transition-all duration-300 hover:scale-110 -mr-4"
                        >
                            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                        </button>

                        <div className="py-8 overflow-hidden">
                            <div className="flex transition-transform duration-500 ease-in-out">
                                {getVisibleAnnouncements().map((announcement, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
                                    >
                                        <div className="group bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 border border-gray-100 min-h-auto flex flex-col">
                                            <div className={`px-4 py-3 ${getUrgencyColor(announcement.urgency)}`}>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-semibold">
                                                        {getUrgencyText(announcement.urgency)}
                                                    </span>
                                                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                                        {announcement.category}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-6 flex flex-col h-full">
                                                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                                                    {announcement.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                                    {announcement.description}
                                                </p>

                                                <div className="space-y-2 text-sm text-gray-500">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="h-4 w-4 text-indigo-500" />
                                                        <span>{announcement.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="h-4 w-4 text-indigo-500" />
                                                        <span>{announcement.time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="h-4 w-4 text-indigo-500" />
                                                        <span className="truncate">{announcement.location}</span>
                                                    </div>
                                                </div>
                                                {announcement.link && (
                                                    <a href={announcement.link} target='_blank' className="mt-4 flex items-center justify-between">
                                                        <span className="text-indigo-600 text-sm font-semibold group-hover:text-indigo-700 transition-colors">
                                                            Voir les détails
                                                        </span>
                                                        <ArrowRight className="h-4 w-4 text-indigo-500 transform group-hover:translate-x-1 transition-transform" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}