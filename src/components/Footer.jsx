// components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h5 className="mb-3">John Doe</h5>
            <ul className="footer-list">
              <li>40 rue Laure Diebold</li>
              <li>69009 Lyon, France</li>
              <li>10 20 30 40 50</li>
              <li>john.doe@gmail.com</li>
            </ul>

            <div className="social-icons mt-3">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noreferrer nofollow"
                aria-label="GitHub"
              >
                <i className="bi bi-github" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer nofollow"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer nofollow"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="mb-3">Liens utiles</h5>
            <ul className="footer-list">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Me contacter</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="mb-3">Mes dernières réalisations</h5>
            <ul className="footer-list">
              <li><Link to="/portfolio">Fresh Food</Link></li>
              <li><Link to="/portfolio">Restaurant Akira</Link></li>
              <li><Link to="/portfolio">Espace bien-être</Link></li>
              <li><Link to="/portfolio">SEO</Link></li>
              <li><Link to="/portfolio">Création d&apos;une API</Link></li>
              <li><Link to="/portfolio">Maquette d&apos;un site</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
