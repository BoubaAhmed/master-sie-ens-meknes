import { useState, useEffect, useRef, useCallback } from 'react';
import {  Code,  BookOpen,  Users,  User,  Filter,  Search, GraduationCap, Monitor, Smartphone, Brain, Database, Gamepad, ArrowLeft, ArrowRight } from "lucide-react";
import projectExamples from '../data/projectIdeas.json';

export default function ProjectIdeas() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    // Configuration responsive du carrousel
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
        prevIndex + slidesToShow >= projectExamples.length ? 0 : prevIndex + 1
        );
    }, [slidesToShow, projectExamples.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Math.max(0, projectExamples.length - slidesToShow) : prevIndex - 1
        );
    }, [slidesToShow, projectExamples.length]);

    // Auto-play du carrousel
    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, slidesToShow, nextSlide]);

    const getVisibleProjects = () => {
        return projectExamples.slice(currentIndex, currentIndex + slidesToShow);
    };

    const getModuleIcon = (module) => {
        if (module.includes('Intelligence') || module.includes('IA')) return <Brain className="h-5 w-5" />;
        if (module.includes('Data') || module.includes('Science')) return <Database className="h-5 w-5" />;
        if (module.includes('Mobile')) return <Smartphone className="h-5 w-5" />;
        if (module.includes('Web')) return <Monitor className="h-5 w-5" />;
        if (module.includes('Ludification') || module.includes('Jeu')) return <Gamepad className="h-5 w-5" />;
        return <BookOpen className="h-5 w-5" />;
    };

    const getTypeColor = (type) => {
        switch (type) {
        case 'Monôme':
            return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'Binôme':
            return 'bg-green-100 text-green-800 border-green-200';
        case 'Groupe (3-4)':
            return 'bg-purple-100 text-purple-800 border-purple-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <section className="py-16" id="projets">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
                <div className="relative flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
                    <div className="animate-bounce absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rotate-45 top-1 left-1/4 opacity-60"></div>
                    <div className="animate-bounce absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 top-0 right-1/4 opacity-40 rounded-sm"></div>
                    <div className="animate-bounce absolute w-5 h-5 bg-pink-400 top-1/2 left-1/3 rotate-12 skew-y-6 opacity-50"></div>
                    <div className="animate-bounce absolute w-3 h-3 bg-indigo-500 bottom-2 right-1/3 opacity-70 rounded-md"></div>

                    <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500 flex-shrink-0" />
                    Exemples de Projets Réalisables
                    </h2>

                    <div className="mt-2 sm:mt-3 h-0.5 sm:h-1 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="text-gray-600 max-w-4xl mx-auto px-2">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        Découvrez le type de projets que vous pourrez réaliser dans les différents modules du master. Ces exemples illustrent le niveau technique et les compétences développées.
                    </p>
                </div>
                </div>

            {/* Carrousel Container */}
            <div className="relative" ref={carouselRef}>
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 text-blue-600 transition-all duration-300 hover:scale-110 -ml-4"
            >
                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 text-blue-600 transition-all duration-300 hover:scale-110 -mr-4"
            >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Projects Carrousel */}
            <div className="py-8 overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out">
                {getVisibleProjects().map((project, index) => (
                    <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
                    >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group border border-gray-100 h-full">
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(project.type)}`}>
                            <Users className="h-3 w-3" />
                            {project.type}
                            </span>
                        </div>
                        
                        <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {project.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {project.description}
                        </p>
                        </div>

                        {/* Details */}
                        <div className="p-6 space-y-4">
                        {/* Module */}
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg">
                            {getModuleIcon(project.module)}
                            </div>
                            <div>
                            <div className="text-xs text-gray-500">Module</div>
                            <div className="text-sm font-medium text-gray-900">{project.module}</div>
                            </div>
                        </div>

                        {/* Professor */}
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg">
                            <User className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                            <div className="text-xs text-gray-500">Enseignant</div>
                            <div className="text-sm font-medium text-gray-900">{project.professor}</div>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div>
                            <div className="text-xs text-gray-500 mb-2">Technologies</div>
                            <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {tech}
                                </span>
                            ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <div className="text-xs text-gray-500 mb-2">Compétences développées</div>
                            <div className="flex flex-wrap gap-1">
                            {project.skills.map((skill, index) => (
                                <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                                {skill}
                                </span>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

                {/* Carrousel Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: Math.ceil(projectExamples.length / slidesToShow) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index * slidesToShow)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        Math.floor(currentIndex / slidesToShow) === index
                            ? 'bg-blue-600 w-6'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                    ))}
                </div>
            </div>
        </div>
        </section>
    );
}