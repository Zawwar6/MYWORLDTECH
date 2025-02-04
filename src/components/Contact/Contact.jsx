import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div>
   
      <section className="contact">
        <h2>Contact Us</h2>
        <p>We would love to hear from you. Get in touch with us for a free consultation.</p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

    </div>
  )
}

export default Contact
