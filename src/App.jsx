import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
