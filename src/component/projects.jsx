import '../assets/css/projects.scss'
import { useTransform, useScroll, motion, AnimatePresence } from 'framer-motion';
import useDimension from '../useDimension';

import othersPreview from '../assets/images/casino-preview.jpg';
import React, { useEffect, useRef, useState } from 'react';
import Aesthetics from './projects/aesthetics';
import Casino from './projects/casino';
import Eyecare from './projects/eyecare';
import Other from './projects/others';

// const projects = [
//   { title: 'Casino Websites', color: 'bg-stone-650', image: casinoPreview, colSpan: 'row-span-2 col-start-2' },
//   { title: 'Eyecare', color: 'bg-stone-800', image: eyecarePreview, colSpan: 'col-span-2 row-span-3 col-start-3' },
//   { title: 'Aesthetics', color: 'bg-stone-700', image: casinoPreview, colSpan: 'col-span-2 row-span-3 row-start-3' },
//   { title: 'Others', color: 'bg-stone-600', image: casinoPreview , colSpan: 'row-span-2 col-start-3 row-start-4' },
// ];

const projects = [
    {
        title: 'Casino', color: 'bg-stone-650', component: Casino, colSpan: 'col-span-6  row-span-2 row-start-2    md:col-span-2 md:row-span-3 md:row-start-2 lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-1'
        
    },
     {
        title: 'Eyecare', color: 'bg-stone-650', component: Eyecare, colSpan: 'col-span-6  row-span-2 row-start-4 md:col-span-3 md:row-span-3 md:col-start-3 md:row-start-2 lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-1'
        
    },
     {
        title: 'Aesthetic', color: 'bg-stone-650', component: Aesthetics, colSpan: 'col-span-6  row-span-2 row-start-6 md:col-span-3 md:row-span-3 md:row-start-5 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-3'
        
    },
     {
        title: 'Others', color: 'bg-stone-650', component: Other, colSpan: 'col-span-6  row-span-2 row-start8 md:col-span-2 md:row-span-3 md:col-start-4  md:row-start-5 lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-4'
        
    }
]
function Project(){
    const [activeProject, setActiveProject] = useState(null);

    const container = useRef(null)
    const {height} = useDimension();
    const {scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress , [0,1], [0, height]);


    return(
        <section className='project-sec' id="projects" ref={container}>
            <motion.div className='proj-text z-0' style={{x: y}}>
                <svg width="2400" height="250" >
                    <text x="150" y="200">PROJECTS</text>
                
                </svg>
            </motion.div>
            <div className='px-2 relative z-30'>
                <div className="relative w-full min-h-screen  text-white overflow-hidden">
                    <div className="grid grid-cols-6 grid-rows-9 md:grid-cols-5 md:grid-rows-7 lg:grid-cols-4 lg:grid-rows-5 gap-4 p-8 pt-10 pb-10 lg:pt-30 lg:pb-20 h-[100vh] md:h-[90vh]" >
                        <div  className='col-span-6 lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-1 flex h-full place-items-center justify-center'>
                            <h2 className='proj-heading block text-center text-stone-900 dark:text-white text-4xl md:text-5xl  font-bold lg:mb-15' data-aos="fade-down">
                               My Projects
                            </h2>
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