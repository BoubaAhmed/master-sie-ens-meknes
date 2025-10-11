import { CheckCircle2, Calendar, Target, Bookmark, Rocket } from 'lucide-react';
import semestersData from "../data/semesters.json";
import { getColorClasses } from '../utils/colorUtils';
import { iconMap } from '../utils/iconsMap';

const Program = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="relative flex flex-col items-center justify-center text-center mb-8 px-4 sm:px-6 md:px-8">
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-0 left-1/3 opacity-70"></div>
            <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded bottom-1 left-1/4 opacity-40"></div>
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>

            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-snug">
              <Bookmark className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 flex-shrink-0" />
              Programme de Formation
            </h2>

            <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="text-gray-600 max-w-6xl mx-auto space-y-4 leading-relaxed">
            <p>
              Le <strong className="text-blue-600">Master Systèmes Intelligents pour l'Éducation</strong> se déroule sur 
              <strong className="text-blue-600"> deux années (4 semestres)</strong> et combine intelligence 
              artificielle, technologies éducatives et pédagogie innovante.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {semestersData.slice(0, 2).map(semester => {
                const colorClasses = getColorClasses(semester.color);
                const IconComponent = iconMap[semester.icon];
                
                return (
                  <div
                    key={semester.id}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                  >
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${colorClasses.bg} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-sm">{semester.title}</h3>
                          <p className="text-gray-600 text-xs">{semester.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="space-y-2">
                        {semester.subjects.map((subject, index) => {
                          const SubjectIcon = iconMap[subject.icon];
                          return (
                            <div
                              key={index}
                              className="flex items-start space-x-3 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            >
                              <div className={`p-1 rounded ${colorClasses.bg} flex-shrink-0`}>
                                <SubjectIcon className={`h-4 w-4 ${colorClasses.icon}`} />
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed flex-1">
                                {subject.name}
                              </span>
                            </div>
                          )
                      })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {semestersData.slice(2).map(semester => {
                const colorClasses = getColorClasses(semester.color);
                const IconComponent = iconMap[semester.icon];


                return (
                  <div
                    key={semester.id}
                    className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group
                    `}
                  >
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${colorClasses.bg} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-sm">{semester.title}</h3>
                          <p className="text-gray-600 text-xs">{semester.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      {semester.isProject ? (
                        <div className="space-y-4">
                          <div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {semester.description}
                            </p>
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-bold text-gray-800 text-sm flex items-center">
                              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                              Objectifs Pédagogiques
                            </h4>
                            <ul className="space-y-1">
                              {semester.objectives.map((objective, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span className="text-gray-600 text-sm">{objective}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <h4 className="font-bold text-blue-800 text-sm mb-3 flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              Calendrier du Projet
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                              <div className="bg-white p-2 rounded border border-blue-100">
                                <div className="text-xs text-blue-600 font-semibold">Mois 1-2</div>
                                <div className="text-xs text-gray-600">Cadrage</div>
                              </div>
                              <div className="bg-white p-2 rounded border border-blue-100">
                                <div className="text-xs text-blue-600 font-semibold">Mois 3-4</div>
                                <div className="text-xs text-gray-600">Développement</div>
                              </div>
                              <div className="bg-white p-2 rounded border border-blue-100">
                                <div className="text-xs text-blue-600 font-semibold">Mois 5</div>
                                <div className="text-xs text-gray-600">Rédaction</div>
                              </div>
                              <div className="bg-white p-2 rounded border border-blue-100">
                                <div className="text-xs text-blue-600 font-semibold">Mois 6</div>
                                <div className="text-xs text-gray-600">Soutenance</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {semester.subjects.map((subject, index) => {
                            const SubjectIcon = iconMap[subject.icon];
                            return (
                              <div
                                key={index}
                                className="flex items-start space-x-3 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                              >
                                <div className={`p-1 rounded ${colorClasses.bg} flex-shrink-0`}>
                                  <SubjectIcon className={`h-4 w-4 ${colorClasses.icon}`} />
                                </div>
                                <span className="text-gray-700 text-sm leading-relaxed flex-1">
                                  {subject.name}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="relative flex flex-col items-center justify-center text-center mb-6 px-4 sm:px-6 md:px-8">
                <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full top-0 left-1/3 opacity-70"></div>
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full bottom-1 left-1/4 opacity-70"></div>
                <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full top-1/2 right-1/3 opacity-70"></div>
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full bottom-2 right-1/4 opacity-60"></div>

                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2 text-white leading-snug">
                  <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white flex-shrink-0" />
                  Approche Pédagogique Innovante
                </h2>

                <div className="mt-3 h-1 w-36 sm:w-36 md:w-48 lg:w-56 bg-gradient-to-r from-white to-blue-200 rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-blue-100 leading-relaxed mb-6 text-sm">
                  Notre programme combine cours théoriques, travaux pratiques, projets concrets et stages 
                  professionnels pour assurer une maîtrise complète des compétences en systèmes intelligents 
                  pour l'éducation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-300" />
                    <span className="text-white text-sm">60% de formation pratique</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-300" />
                    <span className="text-white text-sm">Projets réels avec partenaires industriels</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-300" />
                    <span className="text-white text-sm">Encadrement personnalisé par des experts</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <h4 className="font-bold text-white text-lg mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Compétences Visées
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <span className="bg-white/20 px-3 py-2 rounded-lg text-center text-white text-xs">IA & Machine Learning</span>
                  <span className="bg-white/20 px-3 py-2 rounded-lg text-center text-white text-xs">Développement EdTech</span>
                  <span className="bg-white/20 px-3 py-2 rounded-lg text-center text-white text-xs">Analyse de Données</span>
                  <span className="bg-white/20 px-3 py-2 rounded-lg text-center text-white text-xs">Gestion de Projet</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Program;