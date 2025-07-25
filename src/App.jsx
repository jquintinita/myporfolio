import { useState, useEffect } from 'react';
import Hero from './component/hero';
import Webstack from './component/webstack';
import About from './component/about-me';
import WorkExperience from './component/work-experience';
import Project from './component/projects';
import 'aos/dist/aos.css';
import Loading from './component/loading';
import Lenis from 'lenis';
import AOS from 'aos';
import Contact from './component/contact';
import Header from './component/header';
import GridProject from './component/GridProject';
import ProjectScroll from './component/myprojects';
import MyProjects from './component/myprojects';
import HorizontalScroll from './component/HorizontalScroll';


function App() {
  const [loading, setLoading] = useState(true);
  const [lenis, setLenis] = useState(null);


  useEffect(() => {
    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    // Initialize AOS
    const isMobile = window.innerWidth <= 768;
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated',
      offset: isMobile ? 0 : 250,
    });

    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    
    return () => {
      clearTimeout(timer);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <div className='bg-zinc-100 dark:bg-stone-900 scroll-smooth' id='smoothScroll'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header lenis={lenis} />
          <main>
            <Hero />
            <Webstack />
            <About />
            <MyProjects lenis={lenis} />
        

            <WorkExperience />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
