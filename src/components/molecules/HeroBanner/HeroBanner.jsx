import './HeroBanner.scss';
import heroBannerDesktop from '../../../assets/Homepage_image_desktop.webp';
import heroBannerMobile from '../../../assets/Homepage_image_mobile.webp';
import Button from '../../atoms/Button/Button';

import scrollToEl from '../../../helpers/scrollToEl.js'

function HeroBanner({}) {
    return (
        <section id="home" className="section">
        <div className='hero-banner-wrapper'>
            <div className='container'>
                <div className='hero-banner-content'>
                    <h1>Studio massofisioterapico</h1>
                    <h2>Tiziana Marra</h2>
                    <p>Specializzata in riabilitazione, trattamenti manuali, strumentali e pancafit</p>
                    <div className='hero-banner-content-ctas'>
                        <Button type='primary' text="Scopri come posso aiutarti" clickHandler={()=> scrollToEl("treatments")} />
                        <Button type='tertiary' text="Prendi appuntamento" clickHandler={()=> scrollToEl("contacts")}/>
                    </div>
                </div>
            </div>
            <div className='hero-banner hero-banner--desktop' style={{backgroundImage: `url(${heroBannerDesktop})`}}>
            </div>
            <div className='hero-banner hero-banner--mobile' style={{backgroundImage: `url(${heroBannerMobile})`}}>
            </div>
           
        </div>
        </section>
    )

}

export default HeroBanner;