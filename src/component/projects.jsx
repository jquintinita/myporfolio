import '../assets/css/projects.scss'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import casinoPreview from '../assets/images/casino-preview.jpg';
import eyecarePreview from '../assets/images/eyecare-preview.jpg';
import aestheticPreview from '../assets/images/casino-preview.jpg';
import othersPreview from '../assets/images/casino-preview.jpg';
const projects = [
  { title: 'Casino Websites', color: 'bg-stone-650', image: casinoPreview, colSpan: 'row-span-2 col-start-2' },
  { title: 'Eyecare', color: 'bg-stone-800', image: eyecarePreview, colSpan: 'col-span-2 row-span-3 col-start-3' },
  { title: 'Aesthetics', color: 'bg-stone-700', image: casinoPreview, colSpan: 'col-span-2 row-span-3 row-start-3' },
  { title: 'International Aid', color: 'bg-stone-600', image: casinoPreview , colSpan: 'row-span-2 col-start-3 row-start-4' },
];

function Project(){
    const [activeProject, setActiveProject] = useState(null);


    return(
        <section className='project-sec'>
            <svg width="800" height="250" className='proj-text'>
                <text x="150" y="200">PROJECTS</text>
            </svg>
            <div className='px-2'>
                <div className="relative w-full min-h-screen  text-white overflow-hidden">
                    <div className="grid grid-cols-4 grid-rows-5 gap-4 p-8 pt-30 pb-20 h-[90vh]">
                        <div className='row-span-2 col-start-1 flex h-full place-items-center justify-center'>
                            <motion.h2 className='proj-heading block text-center text-stone-900 dark:text-white text-5xl  font-bold mb-15'
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
                            className={`overflow-hidden cursor-pointer mix-blend-luminosity relative p-4 ${project.color} ${project.colSpan}`}
                            onClick={() => setActiveProject(project)}
                            whileHover={{ scale: 1.01 }}
                        >
                           
                            <h3 className="text-lg font-semibold z-3 relative">{project.title}</h3>
                            <img src={project.image} alt={project.title} className="w-full object-cover mb-2 absolute top-0 left-0 z-1" />
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