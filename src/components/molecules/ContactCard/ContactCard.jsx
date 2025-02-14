import './ContactCard.scss';

function ContactCard({icon, title, text}) {
    return (
        <div className='contact-card'>
            <div className='contact-card-icon'>{icon}</div>
            <h4 className='contact-card-title'>{title}</h4>
            <div className='contact-card-text'>{text}</div>
        </div>
    )

}

export default ContactCard;