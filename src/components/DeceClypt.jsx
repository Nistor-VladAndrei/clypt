import { useEffect, useRef, useState } from 'react'
import { m, useInView } from 'framer-motion'

function CountUp({ value, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return <span ref={ref}>{n}{suffix && <em>{suffix}</em>}</span>
}

const stats = [
  { num: <CountUp value={1000} suffix="+" />, label: 'Clipuri / luna', desc: 'Productie continua, distributie organica.' },
  { num: <CountUp value={100} suffix="+" />, label: 'Editori activi', desc: 'O echipa specializata pe formate short-form.' },
  { num: <>3</>, label: 'Platforme', desc: 'TikTok, Instagram Reels, YouTube Shorts.' },
  { num: <>#<em>1</em></>, label: 'Romania', desc: 'Prima agentie dedicata video clipping-ului.' },
]

export default function DeceClypt() {
  return (
    <section id="de-ce">
      <div className="sec-num">04 / Rezultate</div>
      <div className="container">
        <div className="section-head">
          <span className="label">De ce CLYPT</span>
          <h2>Operam la <span className="accent">scara industriala.</span></h2>
        </div>

        <m.div
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="stat">
              <span className="stat-num">{s.num}</span>
              <div className="stat-label">{s.label}</div>
              <p className="stat-desc">{s.desc}</p>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
