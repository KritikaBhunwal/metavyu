// src/ContactForm.js
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

  const handleSubmit = async e => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrors({ submit: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      console.error('Network error:', err);
      setErrors({ submit: 'Network error—please try again.' });
    }
  };

  return (
    <>
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

            {errors.submit && (
              <p className="error" style={{ textAlign: 'center' }}>
                {errors.submit}
              </p>
            )}

            <button type="submit">Send Message</button>
          </>
        )}
      </form>
      <div style={{ width: '100%'}}>
        <iframe
          title="METAVYU DESIGNS Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7086910543753!2d77.2111101!3d28.548474499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce32c9210c257%3A0x633015c1c3d81fda!2sMETAVYU%20DESIGNS!5e0!3m2!1sen!2sin!4v1749214370506!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
