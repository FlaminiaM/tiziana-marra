import './NavigationMenu.scss';
import React, { useState, useEffect, useRef } from 'react';
import NavigationItem from '../../atoms/NavigationItem/NavigationItem';
import Hamburger from 'hamburger-react';
import Logo from '../../atoms/Logo/Logo';
import Button from '../../atoms/Button/Button';

import useScrollspy from '../../../hooks/useScrollspy.js';
import scrollToEl from '../../../helpers/scrollToEl.js';

const navData = [
    {
        id:'home',
        text: 'Home',
        scrolltoel: '#homepage'
    },
    {
        id:'treatments',
        text: 'Trattamenti',
        scrolltoel: '#trattamenti'
    },
    {
        id:'about',
        text: 'Chi sono',
        scrolltoel: '#chi-sono'
    },
    {
        id:'contacts',
        text: 'Dove trovarmi',
        scrolltoel: '#dove-trovarmi'
    },

]


function NavigationMenu({}) {
    const [isOpen, setOpen] = React.useState(false);
    const ids = ["home", "treatments", "about", "contacts"];
    const activeId = useScrollspy(ids, 107); //107 nav height

    const navClickHandler = (e) => {
        const scrolltoel = e.target.attributes['scrolltoel'].value;
        scrollToEl(scrolltoel);
        setOpen(!isOpen);
    }
  
    return (
        <div className='navigation-wrapper'>
            <div className='container'>
                <div className='navigation-container'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    <Logo />
                </div>
                <div className={isOpen ? 'navigation-menu navigation-menu--open' : 'navigation-menu'}>
                    <div className='navigation-menu-inner'>
                        {navData.map((nav, i) => <NavigationItem key={i} text={nav.text} id={nav.id} activeId={activeId} navClickHandler={navClickHandler}/>)}
                    </div>
                </div>
                <Button type="primary" text='Prendi appuntamento' clickHandler={()=> scrollToEl("contacts")}/>
            </div>
       </div>
    )

}

export default NavigationMenu;