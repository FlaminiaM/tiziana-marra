import './Trattamenti.scss';

import Services from '../../organisms/Services/Services';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

function Trattamenti() {

    return (
        <section id="treatments" className="section">
            <div className='trattamenti'>
                    <div className='container'>
                        <SectionTitle type='white' text='Trattamenti'/>
                        <Services />
                    </div>
            </div>
       </section>
    )

}

export default Trattamenti;