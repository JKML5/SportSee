import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import logo from '../assets/logo.svg'
import '../css/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="content">
        <Link to="/">
          <img src={logo} alt="Kasa" className="logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
