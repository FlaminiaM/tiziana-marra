import { useState } from 'react'
import './App.scss'
import Button from './components/atoms/Button/Button.jsx'
import NavigationMenu from './components/molecules/NavigationMenu/NavigationMenu.jsx'
import HeroBanner from './components/molecules/HeroBanner/HeroBanner.jsx'
import Trattamenti from './components/pages/Trattamenti/Trattamenti.jsx'
import AboutMe from './components/pages/AboutMe/AboutMe.jsx'
import ContactCard from './components/molecules/ContactCard/ContactCard.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <NavigationMenu />
      <HeroBanner />
      <Trattamenti />
      <AboutMe />
      <ContactCard title="Telefono" text='375 7876363'/>
{/* 
    
      <Button type='primary' text='Scopri come posso aiutarti'/>
      <Button type='secondary' text='Scopri di piu'/>
      <Button type='tertiary' text='Prendi appuntamento'/> */}


    </>
  )
}

export default App
