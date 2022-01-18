import './ContactInfo.css'

function ContactInfo() {
  return (
    <div className='contact'>
      <div className='contact-info'>
        <p className='connect'>Let's Connect!</p>
        <p>If you would like to chat more about me, my projects, or opportunities - I am available!</p>
        <p className='email'>Email: kiayaanderson89@gmail.com</p>
        <div>
          <label>LinkedIn:</label>
        <a href="https://www.linkedin.com/in/kiayaanderson/">
          <img src="https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor" 
            alt='linked-in-img' />
        </a>
        </div>
        
        <div>
        <label>GitHub:</label>
        <a href="https://github.com/kiayaand20">
          <img src="https://icongr.am/devicon/github-original.svg?size=128&color=currentColor"
            alt='github-img' />
        </a>

        </div>
      </div>
    </div>
  )
}

export default ContactInfo