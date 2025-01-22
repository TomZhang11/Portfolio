import { useState } from 'react'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Hero />
      </header>
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
