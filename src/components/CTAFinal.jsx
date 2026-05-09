import { m } from 'framer-motion'
import { IconArrow } from './icons.jsx'

export default function CTAFinal() {
  return (
    <section id="cta" className="cta-final">
      <div className="hero-ornament" aria-hidden />

      <div className="container cta-inner">
        <span className="label">Decizia</span>

        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: 24 }}
        >
          Inainte de a cheltui <span className="accent">mii de euro</span> pe reclame, intreaba-te:
        </m.h2>

        <m.div
          className="cta-questions"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <div className="q">Cati oameni te vor <span className="accent">recunoaste</span> peste 30 de zile?</div>
          <div className="q">Sau ai prefera sa fii peste tot, in fiecare zi?</div>
        </m.div>

        <m.div
          className="cta-actions"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          <a href="#" className="btn btn-primary btn-lg">
            Aplica pentru colaborare
            <IconArrow className="arrow" width="16" height="16" />
          </a>
          <span className="cta-meta">Locuri limitate · Selectie pe baza de aplicatie</span>
        </m.div>
      </div>
    </section>
  )
}
