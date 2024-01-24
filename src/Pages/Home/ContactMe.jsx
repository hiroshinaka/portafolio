import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const form = useRef();
  const [showMessage, setShowMessage] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(  process.env.REACT_APP_YOUR_SERVICE_ID, 
      process.env.REACT_APP_YOUR_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 3000);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Don't hesitate to contact me if you have any questions.
        </p>
      </div>
      <form ref={form} className="contact--form--container" onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name='message'
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" value="Send" type='submit'>Submit</button>
        </div>
      </form>
      {showMessage && (
        <div className="contact--form--message">
          <p>Your message has been sent successfully!</p>
        </div>
      )}
    </section>
  );
}
