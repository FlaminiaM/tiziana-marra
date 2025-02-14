import { useState } from 'react'
import './App.scss'
import Button from './components/atoms/Button/Button.jsx'
import NavigationMenu from './components/molecules/NavigationMenu/NavigationMenu.jsx'
import HeroBanner from './components/molecules/HeroBanner/HeroBanner.jsx'
import Trattamenti from './components/pages/Trattamenti/Trattamenti.jsx'
import AboutMe from './components/pages/AboutMe/AboutMe.jsx'
import Contatti from './components/pages/Contatti/Contatti.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationMenu />
      <HeroBanner />
      <Trattamenti />
      <AboutMe />
      <Contatti />
    </>
  )
}

export default App
