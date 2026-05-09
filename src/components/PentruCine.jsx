import { m } from 'framer-motion'

const tags = ['Podcasteri', 'Antreprenori', 'Creatori', 'Coaches', 'Influenceri']

const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const item = {
  hidden: { y: 14, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function PentruCine() {
  return (
    <section id="pentru-cine">
      <div className="sec-num">05 / Pentru cine</div>
      <div className="container">
        <div className="section-head">
          <span className="label">Pentru cine</span>
          <h2>Construit pentru <span className="accent">cei care produc.</span></h2>
        </div>

        <div className="audience">
          <m.ul
            className="audience-list"
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {tags.map((t) => (
              <m.li key={t} variants={item}>{t}</m.li>
            ))}
          </m.ul>

          <m.div
            className="audience-aside"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Lucram cu oameni care au deja o naratiune si o produc consistent — dar care vor sa acapareze atentia din spatiul short-form din Romania.
            </p>
            <div className="closing">
              Tu faci long-form. <span className="accent">Noi facem viralizarea.</span>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
