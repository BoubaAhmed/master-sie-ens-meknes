import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Program from './components/Program';
import Admission from './components/Admission';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import image from './assets/bb.jpg'
import Activities from './components/Activities';
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import Gallery from './components/Gallery';
// const bgImage = "https://images.pexels.com/photos/7972326/pexels-photo-7972326.jpeg";

const App = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <div
        className="relative md:min-h-screen bg-cover bg-center bg-no-repeat pt-16"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-900/80 z-0 pointer-events-none" />
        <div className="relative z-10 flex flex-col">
          <section id="accueil">
            <Hero />
          </section>
        </div>
      </div>
      
      <main className="bg-white">
        <section id="presentation" className="scroll-mt-12">
          <Presentation />
        </section>
        <section id="gallery" className="scroll-mt-12">
          <Gallery />
        </section>
        <section id="programme" className="scroll-mt-12">
          <Program />
        </section>
        <section id="admission" className="scroll-mt-12">
          <Admission />
        </section>
        <section id="activites" className="scroll-mt-12">
          <Activities />
        </section>
        {/* <section id="actualites" className="scroll-mt-12">
          <News />
        </section> */}
        <section id="contact" className="scroll-mt-12">
          <Contact />
        </section>
      </main>
      <Footer />

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50
            text-black p-2 rounded-md cursor-pointer
            transition-all duration-500 ease-out
            border border-gray-300
            backdrop-blur-md
            hover:scale-110 active:scale-95
            group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <ChevronUp className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-300" />
            <div className="absolute inset-0 border-2 border-gray-400 rounded-xl animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </button>
      )}
    </div>
  );
};

export default App;