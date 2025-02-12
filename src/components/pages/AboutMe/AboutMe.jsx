import './AboutMe.scss';

import aboutMeData from '../../../data/aboutMe.json'
import parse from 'html-react-parser';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

function AboutMe() {    
    return (
       <div className='about-me'>
            <SectionTitle type='blue' text='Chi sono'/>
            <div className='about-me-inner'>
                <div className='about-me-image' style={{backgroundImage: `url(${aboutMeData.imageUrl})`}}></div>
                <div className='about-me-text'>
                    {parse(aboutMeData.text)}
                </div>
            </div>
       </div>
    )

}

export default AboutMe;