import './AboutMe.css'
// import TextScramble from '@twistezo/react-text-scramble'
// import { getByLabelText } from '@testing-library/react'

// const scrambleTexts = [
//   'Book Worm 🐛',
//   'Lifetime Learner 📚',
//   'Crossfitter 💪🏾',
//   'Naturalista ➰',
//   'Music Lover 🎶'
// ]

function AboutMe() {
  return (
    <div className='wrapper'>
      <div className='about-title'>
      <p>ABOUT ME</p>
      </div>
      {/* <div>
        <div className='scramble-container'>
          <TextScramble
            texts={scrambleTexts}
            letterSpeed={90}
            nextLetterSpeed={100}
            pauseTime={400}
            className='scramble-color'
          />
        </div> 
      </div> */}

      <div className='about-text'>
        <p>
          Hello! I am Kiaya Anderson, a Software Engineer with an undisputed
          love for learning, problem-solving, and all things design. Whether
          I am going for a PR at my Crossfit gym or learning a new programming
          language, I am always ready to face and conquer a challenge.
        </p>
        <p>
          Professional experiences in healthcare, business, and education have
          developed my ability to adapt to ever-changing environments, curate
          memorable user experiences, and find creative solutions to any problem.
          I am passionate about increasing inclusivity and diversity in tech
          through representation and strive to be an example that you are capable
          of accomplishing anything you set out to do with perseverance and
          consistency.
        </p>
        <br />
        <h2><strong>&lt;toolbox&gt;</strong></h2> 
      </div> 
      
      <div className='skills-row-1'>
        <label className='skills'><img src="https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"
            alt="react" width="65" height="66.5" /><p>React</p></label>
        <label className='skills'><img src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"
            alt="javascript" width="65" height="66.5" /><p>Javascript</p></label>
        <label className='skills'><img src="https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor"
            alt="html" width="65" height="66.5" /><p>HTML</p></label> 
        <label className='skills'><img src="https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor"
            alt="css" width="65" height="66.5" /><p>CSS</p></label> 
      </div>
      
      <div className='skills-row-2'>
        <label className='skills'><img src="https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor"
            alt="node" width="65" height="66.5"/><p>Node.js</p></label> 
        <label className='skills'><img src="https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor"
          alt="mongo" width="65" height="66.5"/><p>MongoDB</p></label> 
        <label className='skills'><img src="https://icongr.am/devicon/mysql-original.svg?size=128&color=currentColor"
          alt="sql" width="65" height="66.5"/><p>MySQL</p></label> 
        <label className='skills'><img src="https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor"
            alt="postgresql" width="65" height="66.5"/><p>PostgreSQL</p></label> 
      </div>
        
      <div className='skills-row-3'>
        <label className='skills'><img src="https://icongr.am/devicon/python-original.svg?size=128&color=currentColor"
          alt="python" width="65" height="66.5"/><p>Python</p></label> 
        <label className='skills'><img src="https://icongr.am/devicon/express-original.svg?size=128&color=currentColor"
          alt="express" width="65" height="66.5"/><p>Express</p></label> 
        <label className='skills'><img src="https://icongr.am/devicon/django-plain.svg?size=128&color=currentColor"
          alt="django" width="65" height="66.5"/><p>Django</p></label> 
        <label className='skills'><img src="https://res.cloudinary.com/kacloud20/image/upload/c_scale,w_128/v1641962192/Portfolio/mongoose.d7449f04_symtph.png"
          alt="mongoose" width="65" height="66.5"/><p>Mongoose</p></label> 
      </div>
    </div>
  )
}

export default AboutMe