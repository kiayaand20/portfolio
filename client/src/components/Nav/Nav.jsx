import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className='navbar'>
      <Link to='/' className='home-link'>Home</Link>
      <Link to='/about' className='about-link'>About</Link>
      <Link to='/projects' className='project-link'>Projects</Link>
      <Link to='/contact' className='contact-link'>Contact</Link>
      <a href="https://drive.google.com/file/d/1_wAXoveW9AjQV8RC1e-s24ftp-cO2mFW/view"
        rel="noreferrer" target="_blank" className='resume-link'><Link to='/resume'>
        </Link>Resume</a>
    </nav>
  )
}

export default Nav