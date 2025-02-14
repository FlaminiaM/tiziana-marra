import './Trattamenti.scss';

import Services from '../../organisms/Services/Services';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

function Trattamenti() {

    return (
       <div className='trattamenti'>
            <div className='container'>
                <SectionTitle type='white' text='Trattamenti'/>
                <Services />
            </div>
       </div>
    )

}

export default Trattamenti;