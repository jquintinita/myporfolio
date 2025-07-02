import '../assets/css/hero.scss'
import { useEffect, useRef, useState } from 'react';

import { useTransform, useScroll, motion } from 'framer-motion';
import useDimension from '../useDimension';

function Hero(){

    const [text, setText] = useState("");
    const fullText = "Code.Design.Flow";

    const container = useRef(null)
    const {height} = useDimension();
    const {scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress , [0,1], [0, height]);
    const y2 = useTransform(scrollYProgress , [0,1], [0, height * 2.4]);
    useEffect(() => {
        let index = 0;
        let isDeleting = false;

        const type = () => {
            setText(fullText.slice(0, index));

            if (!isDeleting) {
                if (index < fullText.length) {
                    index++;
                } else {
                    isDeleting = true;
                }
            } else {
                if (index > 0) {
                    index--;
                } else {
                    isDeleting = false;
                }
            }

            setTimeout(type, isDeleting ? 60 : 120);
        };

        type();

        return () => {};
    }, []);


 return(
    <div className="hero-section flex  flex-col justify-center" ref={container}>
           <div className='container mx-auto px-4 md:px-10 lg:px-20'>
                <div className='flex flex-col-reverse  md:flex-row space-y-4 justify-between  md:place-items-center'>
                    <div className='intro-text '>
                        <div className='text-orange-500 intro-line text-md font-medium'  data-aos="fade-up" >Meet the Developer</div>
                        <h1 className='text-stone-900 dark:text-white text-6xl lg:text-7xl xl:text-9xl font-bold' data-aos="fade-up"  data-aos-delay="10"  data-aos-duration="500" >Joseph <br/> Quintinita</h1>
                        <h2 className='text-stone-900 dark:text-white text-2xl font-medium dynamic-text' data-aos="fade-up" data-aos-offset="250"  ><span id="dynamic-text">{text}</span></h2>
                        <a href='/' className='bg-orange-500 text-white rounded-full font-medium inline-block py-4 px-9 ' data-aos="fade-up" data-aos-offset="250"   >Download CV</a>
                    </div>
                    <div className='logo-wrapper mb-9 md:mb-0' data-aos="fade-in"
                        data-aos-offset="0"
                        data-aos-delay="10"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                       <svg width="342" height="398" viewBox="0 0 342 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M255 52.25L246 0.75H341.5V256.75H87V162.75H142V195.75H284.5V52.25H255Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 342.75V90.75H256V342.75H203.5V397.25H153V342.75H0.5ZM51.5 146.75V298.25H153V269.25H203.5V146.75H51.5Z" fill="white"/>
                        </svg>

                    </div>
                </div>
           </div>
           {/* <div className='front-end-text'>
            <img src={frontendtext} alt="" />
           </div> */}
            <motion.div  style={{y: y2}} className='fe-text'>
                <svg width="800" height="200" className='fe-text' >
                    <text x="50" y="150">FRONTEND</text>
                </svg>
            </motion.div>
           
           <motion.div style={{y}} className='dev-text'>
                <svg >
                    <text x="0" y="150">DEVELOPER</text>
                </svg>
           </motion.div>
    </div>
 )
}

export default Hero