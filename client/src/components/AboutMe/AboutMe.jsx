import './AboutMe.css'

function AboutMe() {
  return (
    <div className='wrapper'>
      <div className='about-title'>
      <h1>ABOUT ME</h1>
      </div>

      <div className='about-text'>
      <p>
        Hello! I am Kiaya Anderson, a Full Stack Software Engineer based out of Florida. 
        Whether I am going for a PR at my Crossfit gym or writing lines of code for app, I am always up for a challenge.
      </p>
      <p>
        After 8 years of professional experience working in various sectors - to include healthcare, business operations, and education - 
        I decided to pursue a career in technology full-time. Tech has always been a part of my life and job roles in some form; however, 
        in my last role, I was tasked with being on a committee that collaborated on projects with the IT team. 
        The work I completed sparked my interest immensely - and so began my journey into Software Engineering. 
      </p>
      <p>
        I am passionate about learning and increasing inclusivity and diversity in the tech industry through representation. I strive to
        be an example that you are capable of accomplishing anything you set out to do with perseverance and consistency.
        I am ecstatic about making the leap into the tech industry by joining a dynamic organization and continuing to refine my skills. 
      </p>
      <label>
        Skills:
      </label>
      <p>Front End - React, Javascript, HTML, CSS</p>
      <p>Back End - Node, MongoDB, SQL, POSTGRESQL, APIs, Python</p>
      <p>Libraries - Express, Mongoose, MaterialUI, Bootstrap</p>
      </div>
    </div>
  )
}

export default AboutMe