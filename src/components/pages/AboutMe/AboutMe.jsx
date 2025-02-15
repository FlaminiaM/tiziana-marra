import './AboutMe.scss';

import aboutMeData from '../../../data/aboutMe.json'
import parse from 'html-react-parser';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

function AboutMe() {    
    return (
        <section id="about" className="section">
            <div className='about-me'>
                    <div className='container'>
                        <SectionTitle type='blue' text='Chi sono'/>
                        <div className='about-me-inner'>
                            <div className='about-me-image' style={{backgroundImage: `url(${aboutMeData.imageUrl})`}}></div>
                            <div className='about-me-text'>
                                {parse(aboutMeData.text)}
                            </div>
                        </div>
                    </div>
            </div>
       </section>
    )

}

export default AboutMe;