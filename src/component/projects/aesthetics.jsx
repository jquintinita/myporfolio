import aesthicBg from '../../assets/images/aesthetic-bg.jpg'
import phone1 from '../../assets/images/phone1.png'
import phone2 from '../../assets/images/phone2.png'
import aestheticTitle from '../../assets/images/Aesthetics-text.svg'
import '../../assets/css/aesthetics.scss'


function Aesthetics(){
    return(
        <div className='w-full h-full relative proj-aesthetics proj-tile bg-stone-700' data-aos="fade-left" data-aos-easing="ease-in" data-aos-delay="150"  >
            <img src={aesthicBg} className='w-full h-full object-cover bg-image' alt="aesthetic" />
            <img src={phone1} className='w-20 md:w-50 lg:w-60 max-w-3xs right-30  md:right-40 lg:right-50 -bottom-15 md:-bottom-30 lg:-bottom-45  absolute phone1' alt="aesthetic" />
            <img src={phone2} className='w-20 md:w-50  lg:w-60  max-w-3xs right-20 md:right-20 lg:right-20 -bottom-20 md:-bottom-60 lg:-bottom-60 absolute phone2' alt="aesthetic"   />
            <div className='overlay absolute top-100 left-0 w-full h-full flex place-items-center justify-center'   >
                <img src={aestheticTitle} alt='aesthetic title'/>
            </div>
        </div>
    )
}
export default Aesthetics