import { useEffect, useState } from 'react'
import { m } from 'framer-motion'

const links = [
  { href: '#problema', label: 'Problema' },
  { href: '#solutia', label: 'Proces' },
  { href: '#de-ce', label: 'Rezultate' },
  { href: '#pentru-cine', label: 'Pentru cine' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      setScrolled(window.scrollY > 24)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <m.nav
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav-inner">
        <a href="#top" className="logo">
          CLYPT<span className="logo-dot">.</span>
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#cta" className="btn btn-primary nav-cta">
          Aplica acum
        </a>
      </div>
    </m.nav>
  )
}
