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
  Sparkles,
  ArrowDown,
  Users,
  Lightbulb,
  Star
} from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: Brain, text: "Intelligence Artificielle", color: "text-blue-400" },
    { icon: Code2, text: "Développement Avancé", color: "text-purple-400" },
    { icon: Cpu, text: "Systèmes Intelligents", color: "text-pink-400" },
    { icon: BookOpen, text: "Pédagogie Innovante", color: "text-indigo-400" }
  ];

  return (
    <section className="relative text-white py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            {/* Main Title */}
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl opacity-50"></div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight relative">
                <span style={{ fontFamily: "Capriola", sansSerif: true }} className="block bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                  Master
                </span>
                <span className="block bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent mt-2">
                  Systèmes Intelligents Pour l'Éducation
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-6xl mx-auto mb-8 font-light">
              Formez-vous aux <span className="text-white font-semibold">technologies d'IA avancées</span> et
              révolutionnez l'éducation de demain grâce aux systèmes intelligents
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 mb-2 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <span className="text-xs md:text-sm text-blue-100 font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href='programme.jpeg' download={'Program'} className="group cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-3xl transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              <Rocket className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
              Découvrir le Programme
              <ArrowDown className="h-4 w-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
            <a href='https://candidature.umi.ac.ma/' target='_blank' className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              <GraduationCap className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              Postuler Maintenant
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-blue-300">
          <span className="text-sm mb-2">Explorer</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;