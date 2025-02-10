import './Logo.scss';
import logo from '../../../assets/logo-7.png';
import LogoSvg from '../../../assets/logo-5.png?react';


function Logo({}) {
    return (
        <div className='logo'>
            <img src={logo} alt='logos' />
            {/* <LogoSvg /> */}
       </div>
    )

}

export default Logo;