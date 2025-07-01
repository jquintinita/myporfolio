import casinoImg from '../../assets/images/casino-banner.png'
import ball from '../../assets/images/ball-floating.png'
import clover from '../../assets/images/clover-floating.png'
import heart from '../../assets/images/heart-floating.png'
import CasinoTitle from '../../assets/images/Casino.svg'
import '../../assets/css/aesthetics.scss'
import { motion, AnimatePresence, color, scale } from 'framer-motion';

function Casino(){
    return(
        <div className='w-full h-full relative proj-Casino proj-tile bg-stone-650' data-aos="fade-left" data-aos-easing="ease-in"  data-aos-delay="40" >
            <img src={casinoImg} className='w-full  object-cover md:top-10 lg:-top-5 absolute bg-image' alt="casino" />
            <img src={ball} className='w-10 md:w-15 max-w-2xs right-40  lg:right-90 md:bottom-10 lg:bottom-15  absolute ball' alt="aesthetic"  />
            <img src={clover} className='w-10 md:w-18   max-w-2xs right-0 md:right-40 bottom-0 absolute clover' alt="aesthetic" />
             <img src={heart} className='w-10 md:w-10   max-w-2xs right-0 md:right-10 bottom-50 absolute heart' alt="aesthetic"  />
            <div className='overlay absolute top-100 left-0 w-full h-full flex place-items-center justify-center'   >
                <img src={CasinoTitle} alt='aesthetic title'/>
            </div>
        </div>
    )
}
export default Casino