import './AboutMe.css'
import TextScramble from '@twistezo/react-text-scramble'

const scrambleTexts = [
  'book worm 🐛',
  'lifetime learner 📚',
  'crossfitter 💪🏾',
  'naturalista ➰',
  'music lover 🎶'
]

function AboutMe() {
  return (
    <div className='wrapper'>
      <div className='about-title'>
      <p>ABOUT ME</p>
      </div>
      <div>
        <p className='scramble-'>
          <TextScramble
            texts={scrambleTexts}
            letterSpeed={110}
            nextLetterSpeed={100}
            pauseTime={400}
            className='scramble-color'
          />
        </p> 
      </div>

      <div className='about-text'>
      <p>
          Hello! I am Kiaya Anderson, a Software Engineer with an undisputed
          love for learning, problem-solving, and all things design. Whether
          I am going for a PR at my Crossfit gym or learning a new programming
          language, I am always ready to face and conquer a challenge.
          After 8 years of professional experience working in healthcare,
          business, and education, I am looking to bring my skills for curating
          memorable user experiences and finding creative solutions to the
          tech industry. I am passionate about increasing inclusivity and
          diversity in the tech industry through representation and strive to be an
          example that you are capable of accomplishing anything you set out to do
          with perseverance and consistency.
      </p>
      <label>
      <strong>&lt;toolbox&gt;</strong>
      </label>
      <p>React, Javascript, HTML, CSS</p>
      <p>Node, MongoDB, SQL, POSTGRESQL, RESTful APIs, Python</p>
      <p>Express, Mongoose, Material-UI</p>
      </div>
    </div>
  )
}

export default AboutMe