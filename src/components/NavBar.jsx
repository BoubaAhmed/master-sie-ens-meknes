import { useState, useEffect } from "react";
import { Home, Info, BookOpen, FileText, Newspaper, Mail, Bell } from "lucide-react";
import logo from '../../public/SIE_logo.png';
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "accueil", label: "Accueil", icon: Home },
    { id: "presentation", label: "Présentation", icon: Info },
    { id: "announcements", label: "Annonces", icon: Bell },
    { id: "programme", label: "Programme", icon: BookOpen },
    { id: "admission", label: "Admission", icon: FileText },
    { id: "activites", label: "Activités", icon: Newspaper },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md backdrop-blur text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div
              className={`flex items-center justify-center w-12 h-12  text-[15px] font-bold`}
            >
              <img src={logo} alt="" />
            </div>
            <div className="hidden sm:block">
              <h1
              style={{ fontFamily: "Capriola", sansSerif: true }}
                className={`font-semibold text-lg ${
                  scrolled ? "text-gray-900" : "text-gray-100"
                }`}
              >
                Master SIE
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-1 px-2 py-1 text-sm transition-colors ${
                    scrolled
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  <Icon size={18} className="inline" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div
              className={`ml-4 flex items-center gap-1 text-sm font-medium transition-colors ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10s8-4.5 8-10a8 8 0 1 0-16 0c0 5.5 8 10 8 10z"
                />
              </svg>
              <span>Meknes, MA</span>
            </div>

          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`p-2 rounded transition ${
                scrolled ? "hover:bg-blue-100" : "hover:bg-blue-50/10"
              }`}
              aria-label="Menu"
            >
              <svg
                className={`h-6 w-6 ${
                  scrolled ? "text-blue-900" : "text-white"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 py-2 shadow-sm border-b border-blue-100">
            <div className="flex flex-col px-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-2 py-2 text-left text-blue-800 hover:text-blue-600 transition-colors"
                  >
                    <Icon size={18} className="inline" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <span className="mt-2 mb-1 py-2 text-center text-blue-700 border border-blue-400 rounded font-semibold text-sm bg-white/80">
                Meknes, MA
              </span>
              <p className="text-center text-xs text-blue-900/60 mt-1">
                Candidatures: 11/08 - 07/09/2025
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
