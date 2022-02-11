import "./AboutMe.css";
import TextScramble from "@twistezo/react-text-scramble";

const scrambleTexts = [
  "Book Worm",
  "Lifetime Learner",
  "Crossfitter",
  "Naturalista",
  "Music Lover",
];

function AboutMe() {
  return (
    <div className="wrapper">
      <div className="about-title">
        <p className="about">Hi, I'm Kiaya!</p>
        <div className="scramble-container">
          <TextScramble
            texts={scrambleTexts}
            letterSpeed={90}
            nextLetterSpeed={100}
            pauseTime={400}
            className="scramble-color"
          />
        </div>
      </div>

      <div className="about-text">
        <p>
          I'm a Software Engineer with an undisputed love for learning,
          problem-solving, and technology. My interest in web development
          started back in 2005 when MySpace was the top social media platform -
          who would have thought personalizing a profile page would unknowingly
          teach me how to use HTML and CSS!
        </p>
        <p>
          Fast-forward to today, my curiosity and passion for tech has led me to
          pursue a career in Software Development full-time. With over 8 years
          of professional experience and educational endeavors, I bring a
          multifaceted perspective, with strong knowledge of project planning,
          customer relationship/database management, and organizational methods
          for varied settings. I look forward to joining a great team to excel
          with and building a long-term career.
        </p>
        <p className="skills">
          <strong>Skills:</strong>
        </p>
      </div>

      <div className="skill-container section-container">
        <ul className="skill-grid">
          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"
                alt="react"
                width="65"
                height="66.5"
              />
              <p>React</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"
                alt="javascript"
                width="65"
                height="66.5"
              />
              <p>Javascript</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor"
                alt="html"
                width="65"
                height="66.5"
              />
              <p>HTML</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor"
                alt="css"
                width="65"
                height="66.5"
              />
              <p>CSS</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor"
                alt="node"
                width="65"
                height="66.5"
              />
              <p>Node.js</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor"
                alt="mongodb"
                width="65"
                height="66.5"
              />
              <p>MongoDB</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/mysql-original.svg?size=128&color=currentColor"
                alt="mysql"
                width="65"
                height="66.5"
              />
              <p>MySQL</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor"
                alt="postgresql"
                width="65"
                height="66.5"
              />
              <p>PostgreSQL</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/express-original.svg?size=128&color=currentColor"
                alt="express"
                width="65"
                height="66.5"
              />
              <p>Express</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/django-plain.svg?size=128&color=currentColor"
                alt="django"
                width="65"
                height="66.5"
              />
              <p>Django</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://res.cloudinary.com/kacloud20/image/upload/c_scale,w_128/v1641962192/Portfolio/mongoose.d7449f04_symtph.png"
                alt="mongoose"
                width="65"
                height="66.5"
              />
              <p>Mongoose</p>
            </li>
          </div>

          <div className="item-container">
            <li>
              <img
                src="https://icongr.am/devicon/python-original.svg?size=128&color=currentColor"
                alt="python"
                width="65"
                height="66.5"
              />
              <p>Python</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
