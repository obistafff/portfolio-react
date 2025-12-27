import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <nav style={{ padding: 12, background: "black" }}>
      <NavLink to="/" style={{ color: "white", marginRight: 12 }}>
        ACCUEIL
      </NavLink>

      <NavLink to="/services" style={{ color: "white", marginRight: 12 }}>
        SERVICES
      </NavLink>

      <NavLink to="/realisations" style={{ color: "white", marginRight: 12 }}>
        RÉALISATIONS
      </NavLink>

      <NavLink to="/contact" style={{ color: "white" }}>
        CONTACT
      </NavLink>
    </nav>
  )
}