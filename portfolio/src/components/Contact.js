import React, { useState } from 'react';
// import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
