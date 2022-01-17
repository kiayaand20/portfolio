import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
      <p><Link to='/' className='home-link'>HOME</Link></p>
      <p><Link to='/about' className='about-link'>ABOUT</Link></p>
      <p><Link to='/projects' className='project-link'>PROJECTS</Link></p>
      <p><Link to='/contact'  className='contact-link'>CONTACT</Link></p>
    </div>
  )
}

export default Nav