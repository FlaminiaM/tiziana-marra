import './ContactCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function ContactCard({icon, title, text}) {
    return (
        <div className='contact-card'>
            <div className='contact-card-icon'>{icon}</div>
            <div className='contact-card-title'>{title}</div>
            <div className='contact-card-text'>{text}</div>
            <FontAwesomeIcon icon={faCoffee} />
        </div>
    )

}

export default ContactCard;