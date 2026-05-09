export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">CLYPT<span className="logo-dot">.</span></div>
            <p className="footer-tag">
              Prima agentie de video clipping din Romania. Transformam long-form in prezenta zilnica.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navigare</h4>
            <ul>
              <li><a href="#problema">Problema</a></li>
              <li><a href="#solutia">Proces</a></li>
              <li><a href="#de-ce">Rezultate</a></li>
              <li><a href="#pentru-cine">Pentru cine</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@clypt.ro">hello@clypt.ro</a></li>
              <li><a href="#cta">Aplica pentru colaborare</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CLYPT</span>
          <span>Bucuresti, Romania</span>
        </div>
      </div>
    </footer>
  )
}
