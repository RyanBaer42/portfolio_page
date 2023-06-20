import './AboutMe.scss'
import Iceland from '../../Media/Iceland.jpeg'
import Guitar from '../../Media/Guitar.jpg'
import { useEffect } from 'react'

const AboutMe = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className='aboutme-page'>
            <div className='aboutme-section'>
                <img src={Iceland} alt="Myself in Iceland" className='iceland-photo'/>
                <div className='aboutme-text-section'>
                    <h2>Ryan Baer</h2>
                    <p className='aboutme-text'>Being born and raised in the Denver Metropolitan area I fell in love with all things outdoors. 
                       I'm an avid nature enthusiast with a deep love for all things outside. The thrill of exploring 
                       and immersing myself in the beauty of nature is truly invigorating. Whether it's skiing down powdery 
                       slopes, feeling the wind in my hair while biking along scenic trails, or perfecting my aim
                       during a round of disc golf, I find immense joy in these exhilarating activities. Camping under the stars and 
                       breathing in the fresh mountain air brings me a sense of tranquility and rejuvenation. Hiking through 
                       lush forests and conquering challenging trails ignites my adventurous spirit. The outdoors is my playground,
                       where I feel most alive and connected to the world around me. It's a place where I can escape the hustle and 
                       bustle of everyday life and find solace in nature's embrace.</p>
                </div>
            </div>
            <div className='aboutme-section-two'>
                <p className='aboutme-text-two'>Whenever I'm not burying myself in nature you can find me at my computer. I immerse myself in the world of web 
                   technologies, staying up to date with the latest trends, frameworks, and design principles. I thrive on the challenge 
                   of transforming ideas and concepts into intuitive and visually appealing user experiences. From HTML and CSS to JavaScript 
                   and beyond, I believe in the power of clean and efficient code to create impactful digital products. I find great joy in 
                   the process of bringing designs to life, meticulously crafting interactive interfaces that engage and delight users. With 
                   each project, I embrace the opportunity to push the boundaries of my knowledge, exploring innovative solutions and expanding my skill set. 
                   I am a firm believer in continuous learning, whether it's through online courses, reading blogs, participating in coding communities, or 
                   attending conferences. By constantly seeking new knowledge and skills, I am dedicated to staying at the forefront of front-end development, 
                   and I look forward to the endless possibilities and exciting challenges this ever-evolving field has to offer.</p>
                <img src={Guitar} alt="Myself playing guitar" className='guitar-photo'/>
            </div>
        </div>
    )
}

export default AboutMe