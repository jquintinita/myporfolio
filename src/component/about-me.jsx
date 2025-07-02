
import '../assets/css/about.scss'
import myPhoto from '../assets/images/myphoto-latest.png'
import CodingText from './codingtext'

function About(){


    return(
        <section className="about-sec">
            <div className='container mx-auto px-4 sm:px-4 md:px-8'>
                <div className='flex flex-col lg:flex-row space-x-6 justify-between place-items-center'>
                    <div className='about-me-img flex-1' >
                         <div data-aos="fade-right"
                        data-aos-easing="ease-in">
                            <img src={myPhoto} alt="" />
                        </div>
                        
                    </div>
                    <div className='about-me-details flex-1 relative '>
                         <CodingText  />
                       
                        <h2 className='about-title text-stone-900 dark:text-white text-5xl font-bold mb-5' data-aos="fade-left"  data-aos-duration="800"  data-aos-delay="20" data-aos-easing="ease-in-out" >
                            About me
                        </h2>
                       
                    
                        <p className='text-stone-900 dark:text-white mb-5 text-base md:text-lg'  data-aos="fade-left"  data-aos-duration="900"  data-aos-delay="30" data-aos-easing="ease-in-out">
                            I'm a Front-End Developer with 11 years of experience crafting clean, responsive, and user-centered web solutions. I thrive on turning ideas into sleek, high-performing digital experiences using HTML, CSS, JavaScript, and frameworks like React. Over the years, I've built and customized sites on platforms like WordPress and Shopify, and delivered tailored, enterprise-grade experiences through Adobe Experience Manager.
                        </p>
                        <p className='text-stone-900 dark:text-white text-base md:text-lg'  data-aos="fade-left"  data-aos-duration="1000"  data-aos-delay="40" data-aos-easing="ease-in-out">
                            Collaboration is at the heart of how I work. I love teaming up with others to push boundaries and build better, smarter solutions. I'm constantly leveling up my skills, exploring new technologies, and challenging myself to grow. For me, development is more than writing clean code it’s about shaping meaningful, lasting interactions in the digital world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About