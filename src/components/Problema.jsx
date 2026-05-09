import { m } from 'framer-motion'
import { IconMic, IconClock, IconChartDown } from './icons.jsx'

const cards = [
  { Icon: IconMic, num: '01', text: 'Podcasturi si interviuri raman nedescoperite.' },
  { Icon: IconClock, num: '02', text: 'Ore intregi de content de calitate, pierdute.' },
  { Icon: IconChartDown, num: '03', text: 'Audienta consuma short-form. Tu produci long-form.' },
]

const grid = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Problema() {
  return (
    <section id="problema">
      <div className="sec-num">01 / Problema</div>
      <div className="container">
        <div className="section-head">
          <span className="label">Problema</span>
          <h2>Ai content de calitate. <span className="accent">Nimeni nu il vede.</span></h2>
        </div>

        <m.div
          className="problem-grid"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {cards.map((c, i) => (
            <m.div key={i} className="problem-card" variants={item}>
              <div className="num">{c.num}</div>
              <div>
                <div className="ico"><c.Icon /></div>
                <p>{c.text}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
