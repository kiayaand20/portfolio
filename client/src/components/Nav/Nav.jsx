import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
      <Link to='/' className='home-link'>HOME</Link>
      <Link to='/about' className='about-link'>ABOUT</Link>
      <Link to='/projects' className='project-link'>PROJECTS</Link>
      <Link to='/contact' className='contact-link'>CONTACT</Link>
      <label className='resume-link'>RESUME</label>
    </div>
  )
}

export default Nav