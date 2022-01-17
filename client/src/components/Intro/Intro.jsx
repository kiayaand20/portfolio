import React from 'react'
// import TextScramble from '@twistezo/react-text-scramble'
import './Intro.css'

// const scrambleTexts = [
//   'AVID READER',
//   'LIFETIME LEARNER',
//   'CROSSFIT ENTHUSIAST',
//   'WIFE & MOM',
//   'NATURALISTA',
//   'TRAVELER',
//   'KARAOKE FAMOUS'
// ]

function Intro() {
  return (
    <div className='intro'>
      <div className='home-intro'>
        <p className='name'>KIAYA ANDERSON</p>
        <p className='title'>FULL STACK</p>
        <p className='title2'>SOFTWARE ENGINEER</p>
        <div>
          <p className='sentence'>A LITTLE ABOUT ME: 
            <div className='sliding-text'>
              <span>AVID READER</span>
              <span>LIFETIME LEARNER</span>
              <span>CROSSFIT ENTHUSIAST</span>
              <span>WIFE & MOM</span>
              <span>NATURALISTA</span>
              <span>TRAVELER</span>
              <span>KARAOKE FAMOUS</span> 
            </div>
          </p>
      </div>
    </div>
   </div>
  )
}

export default Intro

 /* <p className='about-me'>A LITTLE ABOUT ME:
          <TextScramble
            texts={scrambleTexts}
            letterSpeed={100}
            nextLetterSpeed={250}
            pauseTime={200}
            className='scramble'
          />
        </p> */