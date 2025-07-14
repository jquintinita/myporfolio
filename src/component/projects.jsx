import '../assets/css/projects.scss';
import { useTransform, useScroll, motion, AnimatePresence } from 'framer-motion';
import useDimension from '../useDimension';
import React, { useEffect, useRef, useState } from 'react';
import Aesthetics from './projects/aesthetics';
import Casino from './projects/casino';
import Eyecare from './projects/eyecare';
import Other from './projects/others';
import ModalPortal from './modal-portal';
import Lenis from 'lenis'; // Import Lenis
import { u } from 'framer-motion/client';
import ChromaGrid from './ChromaGrid';
import CasinoTitle from '../assets/images/Casino.svg'
import aestheticTitle from '../assets/images/Aesthetics-text.svg'
import EyecareTitle from '../assets/images/Eyecare.svg'

const projects = [
    {
        title: 'Casino',
        borderColor: "#10B981",
        gradient: "linear-gradient(180deg, #10B981, #000)",
        component: CasinoTitle,
        colSpan: 'col-span-6 row-span-2 row-start-2 md:col-span-2 md:row-span-3 md:row-start-2 lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-1',
        project_lst: [
            {
                name: 'Pbc88bd.com',
                url: 'https://pbc88bd.com',
                image: '/images/pbcbd-site.jpg',
                description: 'A sports betting and online casino platform focused on user trust, accessibility, and onboarding. Built with WordPress and Divi Builder, featuring a live streaming page integrated via JavaScript and PHP.',
                techStack: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'PHP']
            },
            {
                name: 'Pbc88Affiliate.com',
                url: 'https://pbc88affiliates.com/',
                image: '/images/pbc88Aff.jpg',
                description: 'The official affiliate platform for PBC88, enabling agents to earn commissions by promoting cricket betting, virtual games, slots, and live casino services.',
                techStack: ['WordPress', 'HTML5', 'CSS', 'JavaScript', 'PHP']
            },
            {
                name: 'iPlay818.net',
                url: 'https://iplay818.net',
                image: '/images/iplay818.jpg',
                description: 'A responsive website for a Chinese casino platform, offering sports, poker, live casino, lotto, slots, and fishing games with interactive rewards. Built with HTML, CSS3, SCSS, and JavaScript.',
                techStack: ['HTML5', 'CSS3', 'JavaScript', 'SCSS', 'jQuery']
            },
            {
                name: 'Pbc88-live.app',
                url: 'https://pbc88-live.app/',
                image: '/images/pbc88-live.jpg',
                description: 'A livestreaming platform for sports including Cricket, Football, Basketball, Tennis, and Esports. Built with ReactJS (client) and ExpressJS (server).',
                techStack: ['ReactJS', 'HTML5', 'JavaScript', 'CSS/SCSS', 'NodeJS', 'ExpressJS', 'MySQL']
            },
            {
                name: 'Hope Star',
                url: 'https://xtu168.com',
                image: '/images/hope-star.jpg',
                description: 'HopeStar Technology provides comprehensive business solutions, specializing in API services and gaming platforms.',
                techStack: ['HTML5', 'CSS3', 'JavaScript', 'SCSS', 'jQuery']
            },
            {
                name: 'Max Casino',
                url: 'https://jquintinita.github.io/index/max-casino/index.html',
                image: '/images/max-casino.jpg',
                description: 'A landing page promoting the Max Casino mobile gaming app, designed for visual appeal and driving downloads. Fun, flashy, and energetic style.',
                techStack: ['HTML5', 'CSS3', 'JavaScript', 'SCSS', 'jQuery']
            }
        ]
    },
    {
        title: 'Eyecare',
        borderColor: "#10B981",
        gradient: "linear-gradient(210deg, #10B981, #000)",
        component: EyecareTitle,
        colSpan: 'col-span-6 row-span-2 row-start-4 md:col-span-3 md:row-span-3 md:col-start-3 md:row-start-2 lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-1',
        project_lst: [
            {
                name: 'Premier Eyecare Associates',
                url: 'https://premiereyecare.biz',
                image: '/images/premiereyecare-biz.jpg',
                description: 'A modern, responsive WordPress website converted from Figma, featuring a user-friendly interface and optimized for all devices.',
                techStack: ['WordPress', 'HTML5', 'JavaScript', 'CSS', 'jQuery', 'PHP']
            },
            {
                name: 'Advance Eyecare Vintage Eyewear',
                url: 'https://premiereyecare.biz',
                image: '/images/advance-eyecare-vintage.jpg',
                description: 'A WordPress site converted from Figma, offering a modern design, easy navigation, and mobile optimization.',
                techStack: ['WordPress', 'HTML5', 'JavaScript', 'CSS', 'jQuery', 'PHP']
            },
            {
                name: 'Somerset Eyecare',
                url: 'https://premiereyecare.biz',
                image: '/images/somerset-eyecare.jpg',
                description: 'A fully functional WordPress website based on Figma design, with a focus on usability and responsive layout.',
                techStack: ['WordPress', 'HTML5', 'JavaScript', 'CSS', 'jQuery', 'PHP']
            },
            {
                name: 'University Vision Center',
                url: 'https://premiereyecare.biz',
                image: '/images/university-vision-ceneter.jpg',
                description: 'A WordPress site converted from Figma, featuring a modern, responsive design and optimized navigation.',
                techStack: ['WordPress', 'HTML5', 'JavaScript', 'CSS', 'jQuery', 'PHP']
            }
        ]
    },
    {
        title: 'Aesthetic',
        borderColor: "#F59E0B",
        gradient: "linear-gradient(165deg, #F59E0B, #000)",
        component: aestheticTitle,
        colSpan: 'col-span-6 row-span-2 row-start-6 md:col-span-3 md:row-span-3 md:row-start-5 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-3'
    },
    {
        title: 'Others',
        borderColor: "#8B5CF6",
        gradient: "linear-gradient(225deg, #8B5CF6, #000)",
        component: "Other",
        colSpan: 'col-span-6 row-span-2 row-start-8 md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-5 lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-4'
    }
];

function Project({ openModal, closeModal }) {
    const [activeProject, setActiveProject] = useState(null);
    const [modalLenis, setModalLenis] = useState(null); // State for modal Lenis
    const container = useRef(null);
    const modalContentRef = useRef(null); // Ref for modal content
    const { height } = useDimension();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, height]);

    useEffect(() => {
        if (activeProject) {
            openModal(); // Disable smooth scroll when modal is active
            // Initialize modal Lenis when modal opens
            if (modalContentRef.current && !modalLenis) {
                const newLenis = new Lenis({
                    wrapper: modalContentRef.current,
                    content: modalContentRef.current,
                    duration: 0.8,
                    smoothWheel: true
                });

                const raf = (time) => {
                    newLenis.raf(time);
                    requestAnimationFrame(raf);
                };
                requestAnimationFrame(raf);
                setModalLenis(newLenis);
            }
        } else {
            closeModal(); // Enable smooth scroll when modal is closed
            if (modalLenis) {
                modalLenis.destroy(); // Cleanup modal Lenis
                setModalLenis(null);
            }
        }

        // Cleanup just in case
        return () => {
            closeModal(); // Ensure smooth scroll is enabled on unmount
            if (modalLenis) {
                modalLenis.destroy(); // Cleanup on unmount
            }
        };
    }, [activeProject, openModal, closeModal, modalLenis]);

    return (
        <section className='project-sec' id="projects" ref={container}>
            <motion.div className='proj-text z-0' style={{ x: y }}>
                <svg width="2400" height="250">
                    <text x="150" y="200">PROJECTS</text>
                </svg>
            </motion.div>
            <div className='px-2 relative z-30'>
                <div className="relative w-full min-h-screen text-white overflow-hidden">
                    {/* <div className="grid grid-cols-6 grid-rows-9 md:grid-cols-5 md:grid-rows-7 lg:grid-cols-4 lg:grid-rows-5 gap-4 p-8 pt-10 pb-10 lg:pt-30 lg:pb-20 h-[100vh] md:h-[90vh]">
                        <div className='col-span-6 lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-1 flex h-full place-items-center justify-center'>
                            <h2 className='proj-heading block text-center text-stone-900 dark:text-white text-4xl md:text-5xl font-bold lg:mb-15' data-aos="fade-down">
                                My Projects
                            </h2>
                        </div>
                        {projects.map((project, index) => (
                            <>
                            <motion.div
                                key={index}
                                layout
                                className={`cursor-pointer relative p-0 proj-items ${project.colSpan}`}
                                onClick={() => {
                                    setActiveProject(project);
                                }}
                            >
                                {React.createElement(project.component)}
                            </motion.div>
                            </>
                            
                        ))}
                    </div> */}

                    <ChromaGrid  items={projects}
                            radius={300}
                            damping={0.45}
                            fadeOut={0.6}
                            ease="power3.out"></ChromaGrid>

                    <AnimatePresence>
                        {activeProject && (
                            <ModalPortal>
                                <motion.div
                                    className="fixed inset-0 bg-black/90 w-full  h-full flex items-center justify-center z-[99999]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.div
                                        className="bg-white dark:bg-stone-900 text-black dark:text-white w-full h-full pt-[50px]  relative"
                                        initial={{ scale: 0.95 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0.95 }}
                                    >   <h2 className="text-3xl font-bold text-center mb-6">
                                            {activeProject.title}</h2>
                                        <button
                                            onClick={() => setActiveProject(null)}
                                            className="absolute top-4 right-4 text-2xl font-bold"
                                        >
                                            &times;
                                        </button>
                                        
                                        <div 
                                            className="overflow-auto proj-items-wrapper h-[85vh] px-8 modal-content [&::-webkit-scrollbar]:w-2
                                            [&::-webkit-scrollbar-track]:rounded-full
                                            [&::-webkit-scrollbar-track]:bg-gray-100
                                            [&::-webkit-scrollbar-thumb]:rounded-full
                                            [&::-webkit-scrollbar-thumb]:bg-gray-300
                                            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" 
                                            ref={modalContentRef} // Use the ref for modal content
                                        >
                                            <div className=" py-10 flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 gap-5 ">
                                                {activeProject.project_lst && activeProject.project_lst.length > 0 ? (
                                                    activeProject.project_lst.map((proj, index) => (
                                                        <div key={index} className=" bg-stone-800 text-white h-full overflow-hidden rounded-2xl flex flex-col gap-4">
                                                            <img
                                                                src={proj.image}
                                                                alt={proj.name}
                                                                className="w-full object-contain proj-item-img"
                                                            />
                                                            <div className="flex-1 p-5">
                                                                <a href={proj.url} target='_blank' ><h3 className="text-2xl font-bold">{proj.name}</h3></a>
                                                                <p className="mt-2">{proj.description}</p>
                                                                <ul className="mt-4 list-none flex  flex-wrap gap-2 ml-0  text-sm">
                                                                    {proj.techStack.map((tech, i) => (
                                                                        <li key={i} className='border-1 py-2 px-6 rounded-3xl'>{tech}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="text-center text-3xl">Coming Soon</p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </ModalPortal>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default Project;
