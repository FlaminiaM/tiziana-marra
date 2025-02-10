import './NavigationMenu.scss';
import React from 'react';
import NavigationItem from '../../atoms/NavigationItem/NavigationItem';
import Hamburger from 'hamburger-react';
import Logo from '../../atoms/Logo/Logo';


function NavigationMenu({}) {
    const [isOpen, setOpen] = React.useState(false)
    return (
        <div className='navigation-wrapper'>
            <div className='navigation-container'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <Logo />
            </div>
            <div className={isOpen ? 'navigation-menu navigation-menu--open' : 'navigation-menu'}>
                    <NavigationItem text='home' isSelected={true}/>
                    <NavigationItem text='trattamenti'/>
            </div>
       </div>
    )

}

export default NavigationMenu;