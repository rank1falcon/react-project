import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem from '../../components/NavItem/NavItem'


const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark text-white cyborg-navbar ">
    <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
                <NavItem className="nav-item"><Link to="/" className="nav-link">Home</Link></NavItem>
                <NavItem className="nav-item"><Link to="/browse" className="nav-link">Browse</Link></NavItem>
                <NavItem className="nav-item"><Link to="/details" className="nav-link">Details</Link></NavItem>
                <NavItem className="nav-item"><Link to="/streams" className="nav-link">Streams</Link></NavItem>
                <NavItem className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></NavItem>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Header
