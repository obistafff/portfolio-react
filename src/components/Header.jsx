import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            JOHN DOE
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    "nav-link text-uppercase " + (isActive ? "active" : "")
                  }
                >
                  Accueil
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "nav-link text-uppercase " + (isActive ? "active" : "")
                  }
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    "nav-link text-uppercase " + (isActive ? "active" : "")
                  }
                >
                  Réalisations
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-link text-uppercase " + (isActive ? "active" : "")
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/mentions-legales"
                  className={({ isActive }) =>
                    "nav-link text-uppercase " + (isActive ? "active" : "")
                  }
                >
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}