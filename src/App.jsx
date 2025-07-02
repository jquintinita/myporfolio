import { useState, useEffect } from 'react'
import Hero from './component/hero'
import Webstack from './component/webstack'
import About from './component/about-me'
import WorkExperience from './component/work-experience'
import Project from './component/projects'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Loading from './component/loading'
import Lenis from 'lenis'

import AOS from 'aos';
import Contact from './component/contact'




function App() {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });
    // Simulate loading delay (e.g. fetching data or assets)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
        useClassNames: true,
        initClassName: false,
        animatedClassName: 'animated',
        offset: 400
    });
  },[])



  return (
    <div className=' bg-zinc-100 dark:bg-stone-900 scroll-smooth' id='smoothScroll'>
     {
       loading ?  <Loading/> : (
        <main>
          <Hero/>
          <Webstack/>
          <About/>
          
          <Project></Project>
          <WorkExperience/>
          <Contact/>
        </main>
       )
     }
     
    </div>
  )
}

export default App
