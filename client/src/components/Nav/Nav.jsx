import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
      <Link to='/' className='home-link'>&lt;home&gt;</Link>
      <Link to='/about' className='about-link'>&lt;about&gt;</Link>
      <Link to='/projects' className='project-link'>&lt;projects&gt;</Link>
      <Link to='/contact' className='contact-link'>&lt;contact&gt;</Link>
      <Link to='/resume' className='resume-link'>&lt;resume&gt;</Link>
    </div>
  )
}

export default Nav