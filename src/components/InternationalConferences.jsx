import { useState } from 'react';
import {  Globe,  Users,  Award,  Presentation,  MapPin,  Star,  BookOpen,  Mic, Target, Cpu, GraduationCap, Clock, Mail, Phone, FileText, CheckCircle, TrendingUp, Briefcase, MoveRight } from "lucide-react";
import conference from "../assets/ens/Activities/conference.jpeg";
export default function InternationalConferences() {
    const [activeTab, setActiveTab] = useState('conference');

    const conferenceData = {
        conference: {
            id: 1,
            title: "International Conference on Innovative Approaches and Applications for Sustainable Development (I2ASD)",
            subtitle: "AI for a Sustainable Future - Édition 2026",
            description: "Conférence internationale majeure axée sur l'intégration de l'intelligence artificielle pour promouvoir le développement durable. Organisée en mode hybride (présentiel et virtuel) à l'ENS Meknès, cet événement rassemble chercheurs, décideurs et acteurs industriels du monde entier.",
            year: "2026",
            location: "ENS Meknès, Maroc",
            date: "24-26 Juin 2026",
            mode: "Hybride (Présentiel & Virtuel)",
            role: "Présentateurs & Comité d'Organisation",
            theme: "AI for a Sustainable Future",
            website: "i2asd.com",
            contact: {
                email: "aitis25@umi.ac.ma",
                phone: "+212 665 244 247"
            },
            image: conference,
            objectives: [
                "Explorer des stratégies concrètes pour atteindre les ODD grâce à l'IA",
                "Favoriser la collaboration entre chercheurs, décideurs et industriels",
                "Promouvoir l'innovation technologique au service du développement durable",
                "Créer un réseau international d'experts en IA et développement durable"
            ],
            sectors: [
                "Éducation intelligente et durable",
                "Santé et bien-être",
                "Environnement et énergie",
                "Industrie 4.0 durable",
                "Économie circulaire"
            ]
        },
        collaborations: [
            {
                title: "Collaboration avec Chercheurs",
                description: "Participation active à la rédaction d'articles scientifiques et rapports de recherche en collaboration avec des doctorants et chercheurs expérimentés.",
                icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
                details: [
                    "Co-rédaction d'articles scientifiques pour Springer",
                    "Participation aux projets de recherche des laboratoires partenaires",
                    "Mentorat par des chercheurs internationaux",
                    "Revue de littérature et analyse bibliographique"
                ]
            },
            {
                title: "Comité d'Organisation Étudiant",
                description: "Intégration complète des étudiants dans l'organisation de cette conférence internationale d'envergure.",
                icon: <Users className="h-8 w-8 text-blue-600" />,
                details: [
                    "Planification et coordination logistique de l'événement",
                    "Gestion des relations avec les intervenants internationaux",
                    "Organisation des sessions hybrides (présentiel/virtuel)",
                    "Communication scientifique et promotion de l'événement"
                ]
            },
            {
                title: "Présentations Scientifiques",
                description: "Opportunité de présenter des travaux de recherche dans le cadre d'une conférence internationale indexée.",
                icon: <Mic className="h-8 w-8 text-purple-600" />,
                details: [
                    "Présentation orale des travaux de recherche (si le doctorant encadrant est absent)",
                    "Présentation de posters scientifiques",
                    "Participation aux démonstrations pratiques",
                    "Animation de sessions de questions-réponses"
                ]
            }
        ],
        certifications: [
            {
                name: "Certification de Comité d'Organisation",
                description: "Attestation reconnaissant la participation active à l'organisation et à la réussite de la conférence internationale I2ASD 2026.",
                requirements: [
                    "Participation à la planification et logistique de l'événement international",
                    "Coordination avec les intervenants et partenaires internationaux",
                    "Contribution à la communication et promotion scientifique mondiale",
                    "Gestion des sessions hybrides (présentiel et virtuel)"
                ],
            },
            {
                name: "Certification de Contribution Scientifique",
                description: "Certificat attribué aux membres ayant contribué à la rédaction d'un article scientifique publié dans les proceedings Springer de la conférence.",
                requirements: [
                    "Participation à la conception et rédaction d'un article scientifique",
                    "Travail collaboratif avec encadrants, doctorants et chercheurs",
                    "Soumission et présentation du travail lors de la conférence I2ASD",
                    "Publication dans la série Springer ASTI"
                ],
            },
        ]
    };

    return (
        <section className="py-12 md:py-20" id="conferences">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
                <div className="relative flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
                    <div className="animate-bounce absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rotate-45 top-1 left-1/4 opacity-60"></div>
                    <div className="animate-bounce absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 top-0 right-1/4 opacity-40 rounded-sm"></div>
                    <div className="animate-bounce absolute w-5 h-5 bg-pink-400 top-1/2 left-1/3 rotate-12 skew-y-6 opacity-50"></div>
                    <div className="animate-bounce absolute w-3 h-3 bg-indigo-500 bottom-2 right-1/3 opacity-70 rounded-md"></div>
        
                    <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                        <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500 flex-shrink-0" />
                        Conférence Internationale I2ASD 2026
                    </h2>
        
                    <div className="mt-2 sm:mt-3 h-0.5 sm:h-1 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="text-gray-600 max-w-6xl mx-auto px-2">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        Notre Master offre une opportunité exceptionnelle de participer à l'organisation de la <a href="https://www.i2asd.com" className='text-blue-800' target='_blank' >conférence internationale I2ASD 2026 </a>  à l'ENS Meknès, avec une implication complète dans la recherche, l'organisation et la publication scientifique internationale.
                    </p>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12">
            <button
                onClick={() => setActiveTab('conference')}
                className={`px-5 py-2 rounded-lg cursor-pointer font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'conference'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
            >
                <Presentation className="h-4 w-4" />
                La Conférence
            </button>
            <button
                onClick={() => setActiveTab('implication')}
                className={`px-5 py-2 rounded-lg cursor-pointer font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'implication'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
            >
                <Users className="h-4 w-4" />
                Implication des Étudiants
            </button>
            <button
                onClick={() => setActiveTab('certifications')}
                className={`px-5 py-2 rounded-lg cursor-pointer font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'certifications'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
            >
                <Award className="h-4 w-4" />
                Certifications
            </button>
            </div>

            {/* Conference Tab */}
            {activeTab === 'conference' && (
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-2xl shadow-lg overflow-hidden group">
                        {/* Image horizontale en tête */}
                        <div className="relative h-full md:h-96 w-full">
                            <img
                                src={conferenceData.conference.image}
                                alt={conferenceData.conference.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-600/30"></div>
                            <div className="absolute bottom-4 left-4">
                                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                                    <div className="flex items-center gap-2">
                                        <Target className="h-4 w-4 text-blue-600" />
                                        <span className="font-semibold text-gray-900">{conferenceData.conference.theme}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-6 right-6">
                                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                    {conferenceData.conference.date}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                {conferenceData.conference.title} <a
                                                href={`https://${conferenceData.conference.website}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-blue-600 gap-2 hover:text-blue-700 transition-colors font-medium text-sm"
                                            >
                                                <MoveRight className="h-4 w-4" />
                                                Site officiel
                                            </a>
                            </h3>
                            
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                {conferenceData.conference.description}
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                                            <Cpu className="h-5 w-5 text-blue-500" />
                                            Objectifs Principaux
                                        </h4>
                                        <ul className="space-y-3">
                                            {conferenceData.conference.objectives.map((objective, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span>{objective}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                                        <Globe className="h-5 w-5 text-blue-500" />
                                        Secteurs d'Application
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {conferenceData.conference.sectors.map((sector, idx) => (
                                            <div 
                                                key={idx} 
                                                className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-lg p-3 border border-blue-100 hover:shadow-md transition-shadow"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                                                    <span className="text-gray-800 font-medium text-sm">{sector}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Implication Tab */}
            {activeTab === 'implication' && (
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Implication Active des Étudiants du Master
                    </h3>
                    <p className="text-gray-600 max-w-5xl mx-auto">
                        Nos étudiants jouent un rôle central dans le succès de cette conférence internationale, 
                        avec des responsabilités variées et formatrices au sein des comités d'organisation et de recherche.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {conferenceData.collaborations.map((collab, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100"
                    >
                    <div className="flex flex-col items-center mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            {collab.icon}
                            <h4 className="text-md md:text-lg font-bold text-gray-900">
                                {collab.title}
                            </h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                        {collab.description}
                        </p>
                    </div>

                    <ul className="space-y-3">
                        {collab.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                            <div className="bg-blue-100 p-1 rounded-full mt-0.5 flex-shrink-0">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            </div>
                            <span>{detail}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>
            </div>
            )}

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Certifications Internationales
                        </h3>
                        <p className="text-gray-600 max-w-5xl mx-auto">
                            Les étudiants participants reçoivent des certifications prestigieuses qui valorisent leur engagement et leurs compétences dans un contexte international.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-2 md:gap-4 mb-8">
                        {conferenceData.certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="flex-1 bg-white rounded-xl p-4 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                            >
                                <div className="text-center mb-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Award className="h-8 w-8 md:h-10 md:w-10 text-yellow-500" />
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900">
                                            {cert.name}
                                        </h4>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                                    <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <FileText className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                                        <span className="text-lg">Conditions d'obtention</span>
                                    </h5>
                                    <ul className="space-y-3">
                                        {cert.requirements.map((req, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
        </section>
    );
}