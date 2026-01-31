import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form - in production, this would send to a backend service.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const deploymentSteps = [
    {
      title: 'Step 1: Build Your React App',
      description: 'Run `npm run build` to create the production build folder.',
      command: 'npm run build'
    },
    {
      title: 'Step 2: Create S3 Bucket',
      description: 'Create an S3 bucket and enable static website hosting.',
      command: 'aws s3 mb s3://your-website-name'
    },
    {
      title: 'Step 3: Upload Files',
      description: 'Upload the build folder contents to your S3 bucket.',
      command: 'aws s3 sync build/ s3://your-website-name --delete'
    },
    {
      title: 'Step 4: Configure Permissions',
      description: 'Set bucket policy for public read access.',
      command: 'aws s3api put-bucket-policy --bucket your-website-name --policy file://policy.json'
    },
    {
      title: 'Step 5: Enable CloudFront',
      description: 'Create CloudFront distribution for HTTPS and CDN.',
      command: 'aws cloudfront create-distribution --distribution-config file://cloudfront-config.json'
    }
  ];

  return (
    <div className="contact">
      <section className="page-header">
        <div className="container text-center">
          <h1>Contact & Deployment Guide</h1>
          <p>
            Get in touch with us and learn how to deploy this static website on AWS.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="contact-items">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <h3>Email</h3>
                    <p>prasaddongapure@gmail.com</p>
                    <p>shivprasad@cloudstaticpro.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <h3>Phone</h3>
                    <p>+91 98765-43210</p>
                    <p>Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <h3>Location</h3>
                    <p>Jalgaon, Maharashtra</p>
                    <p>India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock className="contact-icon" />
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9AM - 6PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
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
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <Send className="btn-icon" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="deployment-guide">
        <div className="container">
          <h2 className="text-center">AWS Deployment Guide</h2>
          <p className="text-center">
            Follow these steps to deploy this React static website on AWS S3.
          </p>
          
          <div className="deployment-steps">
            {deploymentSteps.map((step, index) => (
              <div key={index} className="deployment-step">
                <div className="step-header">
                  <h3>{step.title}</h3>
                  <MessageCircle className="step-icon" />
                </div>
                <p>{step.description}</p>
                <div className="command-block">
                  <code>{step.command}</code>
                </div>
              </div>
            ))}
          </div>

          <div className="additional-resources">
            <h3>Additional Resources</h3>
            <div className="resources-grid">
              <div className="resource-item">
                <h4>📚 AWS S3 Documentation</h4>
                <p>Complete guide to S3 static website hosting</p>
              </div>
              <div className="resource-item">
                <h4>🚀 CloudFront Setup</h4>
                <p>Configure CDN and HTTPS for your website</p>
              </div>
              <div className="resource-item">
                <h4>🔧 Route 53 DNS</h4>
                <p>Connect your custom domain to AWS</p>
              </div>
              <div className="resource-item">
                <h4>💡 Best Practices</h4>
                <p>Optimization tips for static websites</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
