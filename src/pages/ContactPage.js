import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactPage.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_bxfg9hn',
      'template_8zkylok',
      { message, to_email: 'anandbabukonnackaparampil@gmail.com' },
      '4Hjcc8QRpu9N_mqkS'
    )
    .then(() => {
      alert('Message sent successfully!');
      setMessage('');
      setShowMessageBox(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to send message.');
    });
  };

  return (
    <section className="contact-page">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <p><FaEnvelope /> anandbabukonnackaparampil@gmail.com</p>
        <p><FaPhone /> +91 8078507058</p>
        <div className="contact-links">
          <a href="https://github.com/anandbabuajce" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/anand-babu-ajce" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <button onClick={() => setShowMessageBox(!showMessageBox)} className="contact-button">
        {showMessageBox ? 'Close' : 'Message'}
      </button>

      {showMessageBox && (
        <form className="message-form" onSubmit={handleSend}>
          <textarea
            rows="5"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="send-button">Send</button>
        </form>
      )}
    </section>
  );
};

export default ContactPage;
