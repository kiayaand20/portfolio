import './ContactInfo.css'

function ContactInfo() {
  return (
    <div className='contact-pg'>
        <p className='connect-title'>LET'S CONNECT!</p>
        <p className='connect-sentence'>If you would like to know more about me, my projects, or simply say hello - <br /> I am available to chat! </p>
        <p className='connect-thanks'><em>Thanks for stopping by!</em></p>
      <div className='contact-info-imgs'>
          <a href="mailto: kiayaanderson89@gmail.com" className='gmail'>
            <img src="https://res.cloudinary.com/kacloud20/image/upload/v1642885321/Portfolio/Gmailimg_dpbucx.png" 
            alt='gmail-img' />
          </a>
          <a href="https://www.linkedin.com/in/kiayaanderson/" className='linked-in'>
            <img src="https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor" 
            alt='linked-in-img' />
          </a>
          <a href="https://github.com/kiayaand20" className='github'>
            <img src="https://icongr.am/devicon/github-original.svg?size=128&color=currentColor"
            alt='github-img' />
          </a>
      </div>
    </div>
  )
}

export default ContactInfo