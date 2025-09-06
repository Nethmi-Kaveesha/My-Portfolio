import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills.tsx";
import Education from "./components/Education.tsx";
import ParallaxSection from "./components/ParallaxSection.tsx";

const App: React.FC = () => (
    <div>
        <Navbar />
        <Hero />
            <ParallaxSection />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
    </div>
);

export default App;
