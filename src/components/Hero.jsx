import React from 'react';
import { 
  Brain, 
  Code2, 
  Cpu, 
  BookOpen, 
  GraduationCap, 
  Target,
  Clock,
  Shield,
  Rocket,
  Bot,
  CircuitBoard,
  Cloud,
  Database,
  Sparkles
} from 'lucide-react';

const Hero = () => {
  const floatingIcons = [
    { icon: Brain, top: '10%', left: '5%', delay: '0s' },
    { icon: Code2, top: '20%', right: '10%', delay: '0.5s' },
    { icon: Cpu, bottom: '5%', left: '8%', delay: '1s' },
    { icon: Database, top: '45%', right: '15%', delay: '1.5s' },
    { icon: CircuitBoard, bottom: '10%', right: '10%', delay: '2s' },
    { icon: Cloud, top: '25%', left: '15%', delay: '2.5s' },
    { icon: Bot, bottom: '5%', right: '32%', delay: '3s' },
    { icon: Sparkles, top: '45%', left: '12%', delay: '3.5s' }
  ];

  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="absolute text-white/35 animate-float"
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
                animationDelay: item.delay
              }}
            >
              <IconComponent className="h-7 w-7 md:h-8 md:w-8" />
            </div>
          );
        })}
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-8">
            <div className="relative flex flex-col items-center justify-center text-center mb-8 px-4">
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full top-0 left-1/4 opacity-70 animate-bounce"></div>
              <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded-full bottom-2 left-1/3 opacity-40 animate-bounce delay-300"></div>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full top-4 right-1/4 opacity-70 animate-bounce delay-700"></div>
              <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-indigo-400 rounded-full bottom-4 right-1/3 opacity-60 animate-bounce delay-500"></div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-2 leading-tight">
                <span  className=" font-medium bg-gradient-to-r from-blue-200 via-purple-400 to-blue-200 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  Master Systèmes Intelligents
                </span>
                <br />
                <span className="text-white mt-1 block">
                  pour l'Éducation
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl mb-2 text-center text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Formez-vous aux technologies d'avenir pour révolutionner l'éducation
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-8 py-2 rounded-lg font-medium flex items-center group hover:bg-white/30 transition-all duration-300 border border-white/10">
              <Clock className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Temps Normal
            </span>
            <span className="bg-blue-500/80 backdrop-blur-sm text-white px-8 py-2 rounded-lg font-medium flex items-center group hover:bg-blue-600 transition-all duration-300 border border-blue-400/30">
              <Clock className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Temps Aménagé
            </span>
            <a href='#programme' className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 inline-flex items-center group">
              <Rocket className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              Découvrir le Programme
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;