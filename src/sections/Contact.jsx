// import './Contact.css';

// function Contact() {
//   return (
//     <section className="container contact">
//       <h1>Contact Me</h1>
//       <p>I'd love to connect! Feel free to reach out through any of the platforms below:</p>

//       <ul className="contact-list">
//         <li><strong>Email:</strong> <a href="mailto:shwetajs.lrn@gmail.com">shwetajs.lrn@gmail.com</a></li>
//         <li><strong>LinkedIn:</strong> <a href="https://in.linkedin.com/in/shweta-sure-308879193" target="_blank" rel="noopener noreferrer">Shweta Sure</a></li>
//         <li><strong>GitHub:</strong> <a href="https://github.com/shweta-js" target="_blank" rel="noopener noreferrer">shweta-js</a></li>
//       </ul>
//     </section>
//   );
// }

// export default Contact;


import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error: ' + result.message);
      }
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message. Server not responding.');
    }
  };

  return (
    <section className="container contact">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
        <p className="status">{status}</p>
      </form>
    </section>
  );
}

export default Contact;
