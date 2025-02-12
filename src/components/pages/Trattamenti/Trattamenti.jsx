import './Trattamenti.scss';

import Services from '../../organisms/Services/Services';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

function Trattamenti() {

    return (
       <div className='trattamenti'>
            <SectionTitle type='white' text='Trattamenti'/>
            <Services />
       </div>
    )

}

export default Trattamenti;