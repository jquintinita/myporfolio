
import '../assets/css/about.scss'
import myPhoto from '../assets/images/myphoto-latest.png'
import CodingText from './codingtext'
import { motion } from 'framer-motion';

function About(){


    return(
        <section className="about-sec">
            <div className='container mx-auto px-4 sm:px-4 md:px-8'>
                <div className='flex flex-col lg:flex-row space-x-6 justify-between place-items-center'>
                    <motion.div className='about-me-img flex-1' 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                        
                        <img src={myPhoto} alt="" />
                    </motion.div>
                    <div className='about-me-details flex-1 '>
                         <CodingText  />
                        <motion.h2 className='about-title text-stone-900 dark:text-white text-5xl font-bold mb-5' 
                            initial={{x: 500, opacity: 0}}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4 , delay: 0.2}}
                            exit={{opacity: 0}}
                        >
                            About me
                        </motion.h2>
                        <motion.p className='text-stone-900 dark:text-white mb-5 text-base md:text-lg'
                            initial={{x: 500, opacity: 0}}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}>
                            I'm a Front-End Developer with 11 years of experience crafting clean, responsive, and user-centered web solutions. I thrive on turning ideas into sleek, high-performing digital experiences using HTML, CSS, JavaScript, and frameworks like React. Over the years, I've built and customized sites on platforms like WordPress and Shopify, and delivered tailored, enterprise-grade experiences through Adobe Experience Manager.
                        </motion.p>
                        <motion.p className='text-stone-900 dark:text-white text-base md:text-lg' 
                            initial={{x: 500, opacity: 0}}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}>
                            Collaboration is at the heart of how I work. I love teaming up with others to push boundaries and build better, smarter solutions. I'm constantly leveling up my skills, exploring new technologies, and challenging myself to grow. For me, development is more than writing clean code it’s about shaping meaningful, lasting interactions in the digital world.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About