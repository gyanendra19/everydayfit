import { useState } from 'react'
import Navbar from '@/components/navbar' 
import { GymContext } from '@/contexts/gymContext'
import { Pages } from '@/shared/types'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Features from '@/components/Features'
import ContactUs from '@/components/contact/index'
import Footer from './components/Footer'

function App() {
  const [selectedPage, setSelectedPage] = useState(Pages.Home) 

  return (
    <>
    <GymContext.Provider value={{selectedPage, setSelectedPage}}>
      <div>
        <Navbar />
        <Home />
        <Services />
        <Features/>
        <ContactUs />
        <Footer />
      </div>
    </GymContext.Provider>
    </>
  )
}

export default App
