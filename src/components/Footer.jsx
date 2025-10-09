import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  BookOpen,
  Users,
  Rocket,
  Building,
  X
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Présentation", href: "#presentation", icon: BookOpen },
    { name: "Programme", href: "#programme", icon: GraduationCap },
    { name: "Admission", href: "#admission", icon: Users },
    { name: "Contact", href: "#contact", icon: Mail }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ensmeknes1983",
      icon: Facebook,
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      href: "https://x.com/ensmeknes1983",
      icon: Twitter,
      color: "hover:text-sky-400"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ensmeknes1983/",
      icon: Linkedin,
      color: "hover:text-blue-500"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@ensmeknes1983",
      icon: Youtube,
      color: "hover:text-red-500"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-white text-blue-600 p-2 rounded-xl mr-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Master SIE</h3>
                <p className="text-blue-200 text-sm">Systèmes Intelligents pour l'Éducation</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed text-sm">
              Formation d'excellence en IA éducative à l'École Normale Supérieure de Meknès.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-blue-200 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-all duration-300 flex items-center group text-sm"
                    >
                      <IconComponent className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-blue-200 text-sm">
                <MapPin className="h-4 w-4 mr-3" />
                <span>BP.3104, Toulal, ENS Meknès, Maroc</span>
              </div>
              <a href="mailto:e.abdellaouialaoui@uml.ac.ma" className="flex items-center text-blue-200 hover:text-white transition-colors group text-sm">
                <Mail className="h-4 w-4 mr-3" />
                <span>Nous écrire</span>
              </a>
              <a href="tel:+212535533885" className="flex items-center text-blue-200 hover:text-white transition-colors text-sm">
                <Phone className="h-4 w-4 mr-3" />
                <span>+212 5 35 53 38 85 / 53 38 83</span>
              </a>
              <a href="tel:+212535460250" className="flex items-center text-blue-200 hover:text-white transition-colors text-sm">
                <Building className="h-4 w-4 mr-3" />
                <span>+212 5 35 46 02 50</span>
              </a>
            </div>

            <a
              href="https://candidature.umi.ac.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg group text-sm"
            >
              <Rocket className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Postuler en ligne
              <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-blue-300 text-sm text-center md:text-left">
              &copy; {currentYear} Master SIE  | École Normale Supérieure de Meknès. Tous droits réservés.
            </p>
            
            {/* Legal Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;