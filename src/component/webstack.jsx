import '../assets/css/webstack.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Webstack(){
    const webstack = ["HTML5", "CSS3", "Javascript", "WordPress", "Shopify", "ReactJs", "NodeJs", "ExpressJs", "GitHub" ]

    const settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        // cssEase: "linear",
        speed: 3000,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5,
                }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                
                }
            },
            {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,

                }
            }
        ]
    };


     return(
       <section className="webstack-sec ">
            <Slider {...settings}>
                {webstack.map((tech, index) => (
                    <div key={index} className='text-center'>
                        <span className='dark:text-neutral-700 font-bold text-lg md:text-2xl lg:text-3xl  px-4'>
                            {tech}
                        </span>
                    </div>
                ))}
            </Slider>
        </section>
    )
}
export default Webstack 