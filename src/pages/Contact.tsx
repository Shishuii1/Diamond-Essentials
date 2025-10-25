import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with our team.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have questions about our products or need help finding the perfect baseball equipment? 
              Our expert team is here to help you make the right choice.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Address</h3>
                  <p>123 Baseball Ave<br />Sports City, SC 12345</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>info@diamondessentials.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">🕒</div>
                <div>
                  <h3>Hours</h3>
                  <p>Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM<br />Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="social-media-section">
              <h3>Connect with us on Social Media</h3>
              <div className="social-links">
                <a href="https://facebook.com/diamondessentials" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span role="img" aria-label="Facebook">📘</span> Facebook
                </a>
                <a href="https://instagram.com/diamondessentials" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span role="img" aria-label="Instagram">📷</span> Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="order-status">Order Status</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is your return policy?</h3>
              <p>We offer a 30-day return policy on all unused items in their original packaging. Shipping costs are the responsibility of the customer.</p>
            </div>
            <div className="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>Currently, we only ship within the United States. We're working on expanding our shipping options.</p>
            </div>
            <div className="faq-item">
              <h3>How long does shipping take?</h3>
              <p>Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer size guides?</h3>
              <p>Yes! We provide detailed size guides for all our products to help you find the perfect fit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 