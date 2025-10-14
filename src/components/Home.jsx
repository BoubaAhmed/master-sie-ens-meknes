import NavBar from './NavBar';
import Hero from './Hero';
import Presentation from './Presentation';
import Program from './Program';
import Admission from './Admission';
import Contact from './Contact';
import Footer from './Footer';
import image from '../assets/bb.jpg'
import Activities from './Activities';
import Gallery from './Gallery';
import Announcements from './Announcements';
import InternationalConferences from './InternationalConferences';
import ProjectIdeas from './ProjectIdeas';
// const bgImage = "https://images.pexels.com/photos/7972326/pexels-photo-7972326.jpeg";

const Home = () => {
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
            <section id="announcements" className="scroll-mt-12">
            <Announcements />
            </section>
            <section id="gallery" className=" scroll-mt-12">
            <Gallery />
            </section>
            <section id="programme" className="scroll-mt-12">
            <Program />
            </section>
            <section id="activites" className="scroll-mt-12">
            <Activities />
            </section>
            <section id="international-conferences" className="scroll-mt-12">
            <InternationalConferences />
            </section>
            <section id="admission" className="scroll-mt-12">
            <Admission />
            </section>
            <section id="projets" className="scroll-mt-12">
            <ProjectIdeas />
            </section>
            <section id="contact" className="scroll-mt-12">
            <Contact />
            </section>
        </main>
        <Footer />
        </div>
    );
};

export default Home;