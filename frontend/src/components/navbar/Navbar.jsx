import './navbar.scss'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className='left'>
          <a href="" className='logo'>
            <img src={logo} alt="Logo" />
            <span>RealEstate</span>
          </a>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
        </div>
        <div className='right'>
          <a href="">Sign In</a>
          <a href="" className='sign-up'>Sign Up</a>
        </div>
    </nav>
  )
}

export default Navbar
