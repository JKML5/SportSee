import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
  return (
    <header className="header">
      <Link to="/">Logo</Link>
      <Navbar />
    </header>
  )
}

export default Header
