import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Accueil
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Profil
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Réglages
      </NavLink>

      <NavLink
        to="/community"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Communauté
      </NavLink>
    </nav>
  )
}

export default Navbar
