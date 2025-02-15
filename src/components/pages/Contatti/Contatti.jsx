import './Contatti.scss';

import HomeIcon from '../../../assets/home-icon.svg?react'
import PhoneIcon from '../../../assets/phone-icon.svg?react'
import LocationIcon from '../../../assets/location-icon.svg?react'
import ContactCard from '../../molecules/ContactCard/ContactCard';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

function Contatti() {

    const contacts = [
        {
            "icon": <LocationIcon />,
            "title": "Studio",
            "text": "Largo Tosi, 5, 60030, Belvedere Ostrense (AN)"
        },
        {
            "icon": <PhoneIcon />,
            "title": "Telefono",
            "text": "375 7876363"
        },
        {
            "icon": <HomeIcon />,
            "title": "Domiciliari",
            "text": "Possibilità di trattamenti domiciliari"
        }
    ]

    return (
    <section id="contacts" className="section">
        <div className='contacts'>
            <div className='container'>
                <SectionTitle type="white" text="Dove trovarmi"/>
                <div className='contacts-inner'>
                    <div className='contacts-list'>
                        {contacts.map((contact, i) => (
                            <ContactCard key={i} icon={contact.icon} title={contact.title} text={contact.text}/>
                        ))}
                    </div>
                    <div className='contacts-map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.276608947935!2d13.162750277503884!3d43.57995447110575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132da1bfdddbdb13%3A0xfb5a7a1929274fe!2sTiziana%20Marra%20-%20Studio%20Massofisioterapico!5e0!3m2!1sen!2sit!4v1739526100205!5m2!1sen!2sit" style={{"border": "0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )

}

export default Contatti;