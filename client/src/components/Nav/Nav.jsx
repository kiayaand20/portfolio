import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
      <Link to='/' className='home-link'>&lt;home&gt;</Link>
      <Link to='/about' className='about-link'>&lt;about&gt;</Link>
      <Link to='/projects' className='project-link'>&lt;projects&gt;</Link>
      <Link to='/contact' className='contact-link'>&lt;contact&gt;</Link>
      <a href="https://drive.google.com/file/d/1_wAXoveW9AjQV8RC1e-s24ftp-cO2mFW/view"
        rel="noreferrer" target="_blank" className='resume-link'><Link to='/resume'>
        </Link>&lt;resume&gt;</a>
    </div>
  )
}

export default Nav