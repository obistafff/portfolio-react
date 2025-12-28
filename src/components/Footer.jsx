import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* COL 1 : Coordonnées */}
          <div className="col-12 col-md-4 mb-4">
            <h5>John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>

            <div className="social-icons d-flex gap-3">
              <a href="#" className="text-secondary" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="text-secondary" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-secondary" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* COL 2 : Liens utiles */}
          <div className="col-12 col-md-4 mb-4">
            <h5>Liens utiles</h5>
            <ul className="footer-list">
              <li>
                <Link to="/" className="footer-link text-secondary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link text-secondary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link text-secondary">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="footer-link text-secondary">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3 : Dernières réalisations */}
          <div className="col-12 col-md-4 mb-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="footer-list">
              <li><span className="text-secondary">Fresh Food</span></li>
              <li><span className="text-secondary">Restaurant Akira</span></li>
              <li><span className="text-secondary">Espace bien-être</span></li>
              <li><span className="text-secondary">SEO</span></li>
              <li><span className="text-secondary">Création d'une API</span></li>
              <li><span className="text-secondary">Maquette d'un site</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
