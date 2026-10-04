import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatStrip from './components/StatStrip'
import Services from './components/Services'
import Capabilities from './components/Capabilities'
import Showcase from './components/Showcase'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Integrations from './components/Integrations'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatStrip />
      <Services />
      <Capabilities />
      <Showcase />
      <HowItWorks />
      <Testimonials />
      <Integrations />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
