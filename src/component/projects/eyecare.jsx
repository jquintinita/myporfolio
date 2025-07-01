import macBook from '../../assets/images/mac-book.png'
import screenShot from '../../assets/images/premier-eyecare-associate.png'
import EyecareTitle from '../../assets/images/Eyecare.svg'
import '../../assets/css/aesthetics.scss'
import { motion, AnimatePresence, color, scale } from 'framer-motion';

function Eyecare(){
    return(
        <motion.div className='w-full h-full relative proj-eyecare proj-tile'>
            <motion.img src={macBook} className='w-full  object-cover z-9 -top-5 absolute bg-image' alt="casino" />
            <motion.img src={screenShot} className='z-0 absolute screenshot' alt="screenshot"  />
            <motion.div className='overlay absolute top-100 left-0 w-full h-full flex place-items-center justify-center'   >
                <img src={EyecareTitle} alt='aesthetic title'/>
            </motion.div>
        </motion.div>
    )
}
export default Eyecare