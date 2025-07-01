import '../assets/css/projects.scss'
import { motion, AnimatePresence, color } from 'framer-motion';
import casinoPreview from '../assets/images/casino-preview.jpg';
import eyecarePreview from '../assets/images/eyecare-preview.jpg';
import aestheticPreview from '../assets/images/casino-preview.jpg';
import othersPreview from '../assets/images/casino-preview.jpg';
import React, { useState } from 'react';
import Aesthetics from './projects/aesthetics';
import Casino from './projects/casino';
import Eyecare from './projects/eyecare';
import Other from './projects/others';
import AOS from 'aos';


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// const projects = [
//   { title: 'Casino Websites', color: 'bg-stone-650', image: casinoPreview, colSpan: 'row-span-2 col-start-2' },
//   { title: 'Eyecare', color: 'bg-stone-800', image: eyecarePreview, colSpan: 'col-span-2 row-span-3 col-start-3' },
//   { title: 'Aesthetics', color: 'bg-stone-700', image: casinoPreview, colSpan: 'col-span-2 row-span-3 row-start-3' },
//   { title: 'Others', color: 'bg-stone-600', image: casinoPreview , colSpan: 'row-span-2 col-start-3 row-start-4' },
// ];

const projects = [
    {
        title: 'Casino', color: 'bg-stone-650', component: Casino, colSpan: 'col-span-6 row-start-2  md:col-span-2 md:row-span-2 md:row-start-2 lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-1'
        
    },
     {
        title: 'Eyecare', color: 'bg-stone-650', component: Eyecare, colSpan: 'col-span-6 row-start-3 md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-2 lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-1'
        
    },
     {
        title: 'Aesthetic', color: 'bg-stone-650', component: Aesthetics, colSpan: 'col-span-6 row-start-4 md:col-span-4 md:row-span-2 md:row-start-4 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-3'
        
    },
     {
        title: 'Others', color: 'bg-stone-650', component: Other, colSpan: 'col-span-6 row-start-5 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4 lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-4'
        
    }
]
function Project(){
    const [activeProject, setActiveProject] = useState(null);


    return(
        <section className='project-sec'>
            <svg width="800" height="250" className='proj-text z-0'>
                <text x="150" y="200">PROJECTS</text>
               
            </svg>
            <div className='px-2 relative z-30'>
                <div className="relative w-full min-h-screen  text-white overflow-hidden">
                    <div className="grid grid-cols-6 grid-rows-5 lg:grid-cols-4 lg:grid-rows-5 gap-4 p-8 pt-30 pb-20 h-[100vh] md:h-[90vh]" >
                        <div  className='col-span-6 lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-1 flex h-full place-items-center justify-center'>
                            <motion.h2 className='proj-heading block text-center text-stone-900 dark:text-white text-5xl  font-bold lg:mb-15'
                                initial={{y:-110, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                transition={{duration: 0.4}}
                            >
                               My Projects
                            </motion.h2>
                        </div>
                        {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layout
                            className={` cursor-pointer relative p-0 ${project.colSpan}`}
                            onClick={() => setActiveProject(project)}>
                           
                            {React.createElement(project.component)}
                        </motion.div>
                        ))}
                       
                    </div>

                    <AnimatePresence>
                        {activeProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black flex items-center justify-center z-50"
                        >
                            <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="w-full h-full p-8"
                            >
                            <button
                                onClick={() => setActiveProject(null)}
                                className="absolute top-4 right-4 text-white text-2xl"
                            >
                                &times;
                            </button>
                            <div className="h-full flex items-center justify-center">
                                <h1 className="text-5xl font-bold">{activeProject.title} Slider Placeholder</h1>
                            </div>
                            </motion.div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
            </div>

        </section>
    )
}
export default Project