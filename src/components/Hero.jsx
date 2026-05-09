import { m } from 'framer-motion'
import { IconArrow } from './icons.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
}
const word = {
  hidden: { y: '105%' },
  show: { y: '0%', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Words({ words, accent = false }) {
  return (
    <m.span variants={container} initial="hidden" animate="show" style={{ display: 'inline' }}>
      {words.map((w, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          <m.span
            variants={word}
            className="word"
            style={{ display: 'inline-block', color: accent ? 'var(--accent)' : undefined, willChange: 'transform' }}
          >
            {w}
          </m.span>
        </span>
      ))}
    </m.span>
  )
}

const ticker = [
  { num: <>1000<em>+</em></>, lab: 'Clipuri / luna' },
  { num: <>100<em>+</em></>, lab: 'Editori activi' },
  { num: <>3</>, lab: 'Platforme' },
  { num: <>#1</>, lab: 'Romania' },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-ornament" aria-hidden />

      <div className="container hero-inner">
        
        <h1>
          <span className="line"><Words words={['Transformam', 'long-form']} /></span>
          <span className="line"><Words words={['in', 'clipuri']} /></span>
          <span className="line"><Words words={['care', 'viralizeaza.']} accent /></span>
        </h1>

        <div className="hero-bottom">
          <m.p
            className="hero-sub"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Tu construiesti naratiunea. Noi o transformam in <span className="accent">prezenta zilnica</span> pe feed-ul audientei tale.
          </m.p>

          <m.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#cta" className="btn btn-primary btn-lg">
              Aplica pentru colaborare
              <IconArrow className="arrow" width="16" height="16" />
            </a>
            <a href="#solutia" className="btn btn-ghost">
              Cum functioneaza
            </a>
          </m.div>
        </div>

        <m.div
          className="hero-ticker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {ticker.map((t, i) => (
            <div key={i} className="ticker-item">
              <div className="num">{t.num}</div>
              <div className="lab">{t.lab}</div>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
