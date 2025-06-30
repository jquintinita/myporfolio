import aesthicBg from '../../assets/images/aesthetic-bg.jpg'
import phone1 from '../../assets/images/phone1.png'
import phone2 from '../../assets/images/phone2.png'
import { motion, AnimatePresence, color, scale } from 'framer-motion';

function Aesthetics(){
    return(
        <motion.div className='w-full h-full relative' initial={{scale:1}} whileHover={{scale: 1.02}} transition={{duration: 0.4}} >
            <motion.img src={aesthicBg} className='w-full h-full object-cover' alt="aesthetic" />
            <motion.img src={phone1} className='w-10 md:w-60 max-w-3xs right-0 md:right-40 -bottom-25  absolute' alt="aesthetic" initial={{opacity:0, x: 40}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.4, delay: 0.2 }} />
            <motion.img src={phone2} className='w-10 md:w-60   max-w-3xs right-0 md:right-20 -bottom-35 absolute' alt="aesthetic"initial={{opacity:0, x: 40}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.4, delay: 0.3 }}  />
        </motion.div>
    )
}
export default Aesthetics