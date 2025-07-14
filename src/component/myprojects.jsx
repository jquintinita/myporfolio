import React, {useEffect, useRef, useState } from "react"
import { useTransform, useScroll, motion, AnimatePresence } from 'framer-motion';
import useDimension from '../useDimension';
import '../assets/css/projects.scss';
import HorizontalScroll from "./HorizontalScroll";

const projectLst = [
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
    },
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


const MyProjects = () => {
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);
    const height = useDimension();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
 const y = useTransform(scrollYProgress, [0, 1], [0, height]);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollContentRef.current;
    console.log(scrollContent.scrollWidth)
    if (container && scrollContent) {
      const scrollLength = scrollContent.scrollWidth - window.innerWidth;
      container.style.height = `${scrollLength}px`;
    }
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-stone-900" id="projects">
       
      <div className="sticky top-0 h-screen overflow-hidden py-40">
         <motion.div className='proj-text z-0' style={{ x }}>
            <svg width="2800" height="250">
                <text x="150" y="200">PROJECTS</text>
            </svg>
        </motion.div>
        <motion.div
          ref={scrollContentRef}
          style={{ x }}
          className="flex gap-8 w-fit px-10 py-10"
        >
          {
            projectLst.map((proj, index) => (
                <motion.div className="project-items bg-stone-800 text-white h-full overflow-hidden rounded-2xl w-110  flex-1 flex flex-col gap-4" key={index}
                initial={{opacity:0, y: 100}}  whileInView={{opacity: 1, y:0, threshold: 0.99}} transition={{duration: 0.5, ease: "easeOut"}} >
                    <img src={proj.image} alt={proj.name} className="w-full object-contain proj-item-img" />
                    <div className="flex-1 p-5">
                        <a href={proj.url} target='_blank' ><h3 className="text-2xl font-bold">{proj.name}</h3></a>
                        <p className="mt-2">{proj.description}</p>
                        <ul className="mt-4 list-none flex  flex-wrap gap-2 ml-0  text-sm">
                            {proj.techStack.map((tech, i) => (
                                <li key={i} className='border-1 py-2 px-6 rounded-3xl'>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
                ))
          }
           <div className="flex flex-col proj-heading">
             <motion.div className="text-8xl text-white font-bold " 
            initial={{opacity:0, y: 100}}  
            whileInView={{opacity: 1, y:0, threshold: 0.99, }} 
            transition={{duration: 0.5, ease: "easeOut", delay: 0.3}} >My Projects</motion.div>
            <motion.div className="text-8xl text-white font-bold " 
            initial={{opacity:0, y: 100}}  
            whileInView={{opacity: 0.6, y:0, threshold: 0.99}} 
            transition={{duration: 0.5, ease: "easeOut", delay:  0.4 }}>My Projects</motion.div>
            <motion.div className="text-8xl text-white font-bold" 
            initial={{opacity:0, y: 100}}  
            whileInView={{opacity: 0.4, y:0, threshold: 0.99}} 
            transition={{duration: 0.5, ease: "easeOut", delay:  0.5}}>My Projects</motion.div>
            <motion.div className="text-8xl text-white font-bold" 
            initial={{opacity:0, y: 100}}  
            whileInView={{opacity: 0.3, y:0, threshold: 0.99}} 
            transition={{duration: 0.5, ease: "easeOut", delay:  0.6}}>My Projects</motion.div>
            <motion.div className="text-8xl text-white font-bold " 
            initial={{opacity:0, y: 100}}  
            whileInView={{opacity: 0.2, y:0, threshold: 0.99}} 
            transition={{duration: 0.5, ease: "easeOut", delay:  0.7}}>My Projects</motion.div>
            <motion.div className="text-8xl text-white font-bold" 
            initial={{opacity:0, y: 100}}  
            whileInView={{opacity: 0.1, y:0, threshold: 0.99}} 
            transition={{duration: 0.5, ease: "easeOut" , delay:  0.8}}>My Projects</motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;