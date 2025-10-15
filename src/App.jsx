import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

function App() {
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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

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
    </Router>
  );
}
export default App;