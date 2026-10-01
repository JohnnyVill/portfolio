import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-[100dvh] overflow-x-clip bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
