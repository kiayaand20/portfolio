import './ContactInfo.css'
import emailjs from "emailjs-com";
import React from 'react';

function ContactInfo(e) {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_2wugvdb', e.target, 'user_yVdA2jmrAWFqXiwZqAeHq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className='contact-pg'>
      <p className='connect-title'>Let's Connect</p>
      <p className='connect-title2'>I would love to hear from you!</p>
      <p className='connect-sentence'>Whether you have a question, want to discuss
        opportunities, <br />or simply say hello - I am available to chat!</p>

      <div>
        <form onSubmit={sendEmail}>
          <div className='row pt-5 mx-auto'>
            <input type="text" className='form-control' placeholder='Name' name="name" />
          </div>
          <div className='col-8 form-group pt-2 mx-auto'>
            <input type="text" className='form-control' placeholder='Email Address' name="email" />
          </div>
          <div className='col-8 form-group pt-2 mx-auto'>
            <textarea type="text" className='form-control' cols="30" rows="8" placeholder='Message' name="message"></textarea>
          </div>
          <div className='col-8 pt-3 mx-auto'>
            <input type="submit" className='submit' value="Send" />
          </div>
        </form>
      </div>

    </div>
  )
}

export default ContactInfo