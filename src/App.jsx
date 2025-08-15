import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header>
        <Hero />
      </header>
      <Main />
      <Footer />
    </div>
  )
}

export default App
