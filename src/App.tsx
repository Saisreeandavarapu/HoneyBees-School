import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingBees from './components/FloatingBees'
import StickyWhatsApp from './components/StickyWhatsApp'

function App() {
  return (
    <div className="min-h-screen font-body text-text-dark selection:bg-primary/30 relative">
      <FloatingBees />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  )
}

export default App
