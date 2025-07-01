import React, { useState } from 'react';
import '../assets/css/work-experience.scss';
import AOS from 'aos';

AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
});


const skillColors = {
    'HTML5': 'orange',
    'CSS3': 'blue',
    'Javascript': 'yellow',
    'NodeJS': 'green',
    'ReactJs': 'cyan',
    'Shopify': 'green',
    'Kentico': 'orange',
    'Github': 'purple',
    'Agile': 'teal',
    'Adobe Photoshop': 'blue',
    'Adobe Animate': 'violet',
    'WordPress': 'blue',
    'jQuery': 'gray',
    'TypeScript': 'blue',
    'PixiJs': 'green',
    'PureMVC': 'blue',
    'Bootstrap': 'violet',
    'AngularJS': 'green',
    'C#': 'blue',
    'Microsoft SQL Server': 'gold',
    'Adobe Premier': 'violet',
    'Sass / Scss': 'pink',
    'Bourbon.IO': 'blue',
    'Visual Basic': 'blue'
};

function WorkExperience() {
    const experiences = [
        {
            dates: "Oct 2022 – June 2025",
            title: "Front-end Developer",
            company: "Seven Seven Global Services, Inc. | Pasig City",
            details: "I have experience creating landing pages using Kentico and Shopify, integrating HTML templates and developing reusable components to build dynamic web application pages. My work involves maintaining and updating client websites, customizing Shopify templates and sections using Liquid, and implementing content management systems, application functionalities, and integration requirements. I ensure adherence to accessibility and performance standards while delivering high-quality user experiences. Additionally, I have built React.js web applications in collaboration with backend developers and have worked within agile development environments, closely collaborating with cross-functional delivery teams to meet project goals efficiently.",
            skills: ["HTML5", "CSS3", "Javascript", "NodeJS", "ReactJs", "Shopify", "Kentico", "Github", "Agile", "Adobe Photoshop", "Adobe Animate"]
        },
        {
            dates: "Nov 2020 – Oct 2022",
            title: "Senior Website Developer",
            company: "National Strategic Group | Remote",
            details: "Skilled in transforming PSD designs into fully responsive WordPress websites, I specialize in bringing visual concepts to life with clean, functional code. I create custom features and plugins to match unique design specifications and ensure websites are optimized with compressed images for improved performance. I also assist with regular website updates and deliver mobile-friendly sites that adapt seamlessly across devices. With hands-on experience using popular website builders like DIVI, Elementor, and WP Bakery, I can efficiently build and manage sites tailored to various client needs.",
            skills: ["WordPress", "HTML5", "CSS3", "Javascript", "jQuery", "Shopify", "Adobe Photoshop"]
        },
        {
            dates: "Apr 2019 – Jul 2020",
            title: "Front-end Developer",
            company: "Cobalt 7 Designs Tech | Mandaluyong City",
            details: "Experienced in developing web-based slot games using modern technologies such as JavaScript (ES6), TypeScript, Node.js, Webpack, PixiJS, and the PureMVC framework. I consistently delivered 1–2 games per month, ensuring timely releases while maintaining high-quality standards. My responsibilities included optimizing game assets for performance, implementing game enhancements through regular updates, and ensuring each game was fully responsive and mobile-ready for a seamless player experience across devices.",
            skills: ["HTML5", "CSS3", "Javascript (ES6)", "NodeJS", "ReactJs", "TypeScript", "PixiJs", "Github", "PureMVC", "Adobe Photoshop"]
        },
        {
            dates: "Apr 2018 – Mar 2019",
            title: "Front-end Developer / Designer",
            company: "YRB Solutions | Parañaque City",
            details: "With a strong eye for design and functionality, I’ve created graphic visuals for marketing campaigns and website assets, supporting cohesive brand presentation. I’ve developed and maintained landing pages, regularly updating website content and design elements to improve user engagement. My experience also includes building custom plugins to enhance site capabilities, along with developing a game scheduling feature using AngularJS 1 to support interactive content and dynamic data display.",
            skills: ["HTML5", "CSS3", "Javascript", "jQuery", "Github", "Bootstrap", "AngularJS", "Adobe Photoshop"]
        },
        {
            dates: "Mar 2015 – Mar 2018",
            title: "Jr. Back-end Developer / Web Designer",
            company: "Falcontek Corp. | Makati City",
            details: "<strong>Jr. Back-End Developer</strong> <br/> As a Jr. Back-End Developer, I was responsible for developing the server-side functionality of our B2B website ig128.com using an MVC framework and AngularJS 1. My role included implementing and integrating APIs, as well as providing client support for API integration processes to ensure seamless connectivity and performance. <br/>  <br/>  <strong>Web Designer / Front-End Developer</strong> <br/> - In this role, I was involved in both the visual and functional aspects of web development. I created web graphics and developed websites while also handling plugin development to extend website features. I optimized websites for better performance, regularly updated content, and designed mobile landing pages for responsive viewing. Additionally, I provided web graphic elements for various needs and resolved cross-browser compatibility issues to ensure consistent user experiences across platforms.",
            skills: ["HTML5", "CSS3", "Javascript", "jQuery", "C#", "Microsoft SQL Server", "AngularJS", "Bootstrap", "Adobe Photoshop", "Adobe Premier"]
        },
        {
            dates: "Feb 2014 – Jan 2015",
            title: "Web Designer / Graphic Artist",
            company: "Click 4 Corp | Remote",
            details: "I have experience converting PSD designs into clean, semantic HTML, creating responsive websites using frameworks like Bootstrap and Bourbon. My design skills include creating mockups, banners, logos, and invitations tailored to client needs. I'm also well-versed in WordPress development and have hands-on knowledge of SASS and SCSS for efficient, maintainable styling. Additionally, I focus on performance optimization, using tools such as GTmetrix, Google PageSpeed Insights, and FeedtheBot to enhance website speed and overall user experience.",
            skills: ["HTML5", "CSS3", "Javascript", "jQuery", "Sass / Scss", "WordPress", "Bourbon.IO", "Bootstrap", "Adobe Photoshop"]
        },
        {
            dates: "Apr 2013 – Jan 2014",
            title: "System Administrator / Graphic Support",
            company: "Qtech Business Solution, Inc. | Lucena City",
            details: "In my role as System Administrator for ETRACS (Enhanced Tax Revenue Assessment and Collection System), I handled system configuration, supported end-users through training and troubleshooting, and provided timely technical assistance during system issues. I also delivered user support for QASA (Quality and Simple Accounting) and contributed to the design and development of user interfaces for database processing and QPOS. My work extended to configuring server connections and ensuring system stability. Additionally, I supported graphic needs for Raquel Pawnshop’s internal system development and created marketing materials including brochures, flyers, and poster advertisements to strengthen the company’s visual identity.",
            skills: ["Microsoft SQL Server", "Visual Basic", "Adobe Photoshop"]
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="section work-experience px-4 md:px-5" id="work-experience">
            <div className='container px-4 md:px-5'>
                <h2 className='work-heading block text-center text-stone-900 dark:text-white text-5xl  font-bold mb-15' data-aos="fade-down"   data-aos-delay="400"
                        data-aos-duration="760"
                        data-aos-easing="ease-in">
                    My work experience
                </h2>
                <div className="row">
                    
                    <div className="work"  data-aos="zoom-in"   data-aos-delay="600"
                        data-aos-duration="760"
                        data-aos-easing="ease-in">
                        <div className="timeline">
                            <nav className="timeline__nav">
                                <ul>
                                    {experiences.map((exp, index) => (
                                        <li
                                            key={index}
                                            className={index === activeIndex ? 'active' : ''}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            <span>{exp.dates}</span>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="timeline__section">
                                {experiences.map((exp, index) => (
                                    <div key={index} className={`timeline-item ${index === activeIndex ? 'active' : ''}`}>
                                        <div className="dates">{exp.dates}</div>
                                        <h3 className="job-title">{exp.title}</h3>
                                        <div className="company">{exp.company}</div>
                                    <p className="details" dangerouslySetInnerHTML={{ __html: exp.details }}></p>
                                        <ul className="skill-list">
                                            {exp.skills.map((skill, i) => (
                                                <li key={i} style={{ transition: 'background 0.3s' }} onMouseEnter={e => e.target.style.background = skillColors[skill] || 'gray'}  onMouseLeave={e => e.target.style.background = 'transparent'}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
             <svg width="800" height="250" className='exp-text'>
                <text x="150" y="200">EXPERIENCE</text>
           </svg>
        </div>
    );
}

export default WorkExperience;
