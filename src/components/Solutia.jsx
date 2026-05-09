import { m } from 'framer-motion'
import { IconArrow } from './icons.jsx'

const steps = [
  { text: <>Ne trimiti contentul long-form</> },
  { text: <>Identificam <span className="accent">cele mai bune momente</span></> },
  { text: <>Editam la standard <span className="accent">viral</span></> },
  { text: <>Distribuim pe sute de conturi → <span className="accent">milioane de vizualizari</span></> },
]

const list = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Solutia() {
  return (
    <section id="solutia">
      <div className="sec-num">03 / Proces</div>
      <div className="container">
        <div className="section-head">
          <span className="label">Solutia</span>
          <h2>Patru pasi. <span className="accent">Zero efort din partea ta.</span></h2>
        </div>

        <m.ol
          className="steps"
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {steps.map((s, i) => (
            <m.li key={i} className="step" variants={item}>
              <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="step-text">{s.text}</div>
              <div className="step-arrow"><IconArrow width="20" height="20" /></div>
            </m.li>
          ))}
        </m.ol>
      </div>
    </section>
  )
}
