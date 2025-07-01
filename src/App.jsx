import { useState, useEffect } from 'react'
import Hero from './component/hero'
import Webstack from './component/webstack'
import About from './component/about-me'
import WorkExperience from './component/work-experience'
import Project from './component/projects'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Loading from './component/loading'

function App() {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g. fetching data or assets)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);



  return (
    <div className=' bg-zinc-100 dark:bg-stone-900 scroll-smooth'>
     {
       loading ?  <Loading/> : (
        <main>
          <Hero/>
          <Webstack/>
          <About/>
          <Project></Project>
          <WorkExperience/>
        </main>
       )
     }
     
    </div>
  )
}

export default App
