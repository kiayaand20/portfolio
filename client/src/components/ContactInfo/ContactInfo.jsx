import './ContactInfo.css'

function ContactInfo() {
  return (
    <div className='contact-pg'>
      <p className='connect-title'>LET'S CONNECT</p>
      <p className='connect-title2'>I would love to hear from you!</p>
      <p className='connect-sentence'>Whether you have a question, want to discuss
       opportunities, <br />or simply say hello - I am available to chat!</p>
      <div className='contact-info-imgs'>
          <a href="mailto: kiayaanderson89@gmail.com" className='gmail'>
            <img src="https://res.cloudinary.com/kacloud20/image/upload/c_scale,w_100/v1642885321/Portfolio/Gmailimg_dpbucx.png" 
            alt='gmail-img' />
          </a>
          <a href="https://www.linkedin.com/in/kiayaanderson/" className='linked-in'>
            <img src="https://icongr.am/devicon/linkedin-original.svg?size=100&color=currentColor" 
            alt='linked-in-img' />
          </a>
          <a href="https://github.com/kiayaand20" className='github'>
            <img src="https://icongr.am/devicon/github-original.svg?size=100&color=currentColor"
            alt='github-img' />
          </a>
      </div>
      <p className='connect-thanks'><em>Thanks for stopping by!</em></p>
    </div>
  )
}

export default ContactInfo