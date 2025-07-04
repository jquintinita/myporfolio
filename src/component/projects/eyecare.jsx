import macBook from '../../assets/images/mac-book.png'
import screenShot from '../../assets/images/premier-eyecare-associate.png'
import EyecareTitle from '../../assets/images/Eyecare.svg'
import '../../assets/css/aesthetics.scss'


function Eyecare(){
    return(
        <div className='w-full h-full relative proj-eyecare bg-sky-900 proj-tile' data-aos="fade-left" data-aos-easing="ease-in" data-aos-delay="100" >
            <img src={macBook} className='w-full  object-cover z-9 -top-5 absolute bg-image' alt="casino" />
            <img src={screenShot} className='z-0 absolute screenshot' alt="screenshot"  />
            <div className='overlay absolute top-100 left-0 w-full h-full flex place-items-center justify-center'   >
                <img src={EyecareTitle} alt='aesthetic title'/>
            </div>
        </div>
    )
}
export default Eyecare