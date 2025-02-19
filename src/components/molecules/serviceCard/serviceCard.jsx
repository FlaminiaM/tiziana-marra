import './ServiceCard.scss';

import Button from '../../atoms/Button/Button';


function ServiceCard({imageUrl, cardTitle, cardText}) {

    return (
       <div className='service-card'>
            <div className='service-card-roundel' style={{backgroundImage: `url(${imageUrl})`}}></div>
            <h3>{cardTitle}</h3>
            <p className='service-card-text'>{cardText}</p>
            {/* <Button type="secondary" text="Scopri di più"/> */}
       </div>
    )

}

export default ServiceCard;