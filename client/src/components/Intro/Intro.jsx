import React from 'react'
import TextScramble from '@twistezo/react-text-scramble'
import './Intro.css'

const scrambleTexts = [
  'BOOK WORM',
  'LIFETIME LEARNER',
  'CROSSFITTER',
  'NATURALISTA',
  'TRAVELER',
  'MUSIC LOVER'
]

function Intro() {
  return (
    <div className='home-pg'>
      <div className='home-intro'>
        <p className='name'>HI, I'M KIAYA!</p>
        <p className='title'>SOFTWARE ENGINEER</p>
      <div>
          <p className='about-me'>A LITTLE ABOUT ME:
          <TextScramble
            texts={scrambleTexts}
            letterSpeed={80}
            nextLetterSpeed={90}
            pauseTime={200}
            className='scramble'
          />
        </p> 
      </div>
    </div>
   </div>
  )
}

export default Intro

