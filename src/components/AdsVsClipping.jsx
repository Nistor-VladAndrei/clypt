import { m } from 'framer-motion'
import { IconCheck, IconX } from './icons.jsx'

const adsItems = [
  'Atentie inchiriata, nu detinuta.',
  'Platesti pentru o singura vizionare.',
  'Audienta uita dupa cinci secunde.',
  'Campania se termina. Dispari.',
]

const clipItems = [
  'Vizibilitate castigata, distribuita organic.',
  '1000+ clipuri pe luna pe sute de conturi.',
  'Apari zi de zi pe feed-ul audientei.',
  'Frecventa → familiaritate → incredere.',
]

export default function AdsVsClipping() {
  return (
    <section>
      <div className="sec-num">02 / Comparatie</div>
      <div className="container">
        <div className="section-head">
          <span className="label">Ads vs Clipping</span>
          <h2>Doua modele. <span className="accent">Doua rezultate.</span></h2>
        </div>

        <div className="compare-grid">
          <m.div
            className="compare-col left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="col-label">Modelul vechi</span>
            <h3>Advertising platit</h3>
            <p className="lead">Cumperi atentie pentru un moment. Cand bugetul se opreste, vizibilitatea se opreste.</p>
            <ul className="compare-list">
              {adsItems.map((it, i) => (
                <li key={i}><IconX /> <span>{it}</span></li>
              ))}
            </ul>
          </m.div>

          <m.div
            className="compare-col right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <span className="col-label">Modelul CLYPT</span>
            <h3>Video clipping</h3>
            <p className="lead">Construim un sistem care iti distribuie autoritatea continuu — fara buget de media.</p>
            <ul className="compare-list">
              {clipItems.map((it, i) => (
                <li key={i}><IconCheck /> <span>{it}</span></li>
              ))}
            </ul>
          </m.div>
        </div>
      </div>
    </section>
  )
}
