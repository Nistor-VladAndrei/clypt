import { LazyMotion, domAnimation } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Problema from './components/Problema.jsx'
import AdsVsClipping from './components/AdsVsClipping.jsx'
import Solutia from './components/Solutia.jsx'
import DeceClypt from './components/DeceClypt.jsx'
import PentruCine from './components/PentruCine.jsx'
import CTAFinal from './components/CTAFinal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Nav />
      <main>
        <Hero />
        <Problema />
        <AdsVsClipping />
        <Solutia />
        <DeceClypt />
        <PentruCine />
        <CTAFinal />
      </main>
      <Footer />
    </LazyMotion>
  )
}
