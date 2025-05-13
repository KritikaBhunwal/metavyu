import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim())    errs.name    = 'Name is required';
    if (!formData.email.trim())   errs.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                   errs.email   = 'Invalid email';
    if (!formData.message.trim()) errs.message = 'Message cannot be empty';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
    } else {
      setErrors({});
      setSubmitted(true);
      // TODO: wire up your backend or email service here
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
       <h2 style={{ 
        fontFamily: 'amandine, serif', 
        fontSize: '2.5rem',
        fontWeight: 400, 
        fontStyle: 'normal', 
        textAlign: 'center',
        padding: '2rem 0',
      }}>
        CONTACT US
      </h2>

      {submitted ? (
        <p className="success-message">
          Thanks for reaching out! We’ll get back to you shortly.
        </p>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit">Send Message</button>
        </>
      )}
    </form>
  );
}
