import React from 'react';
import { Cloud, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Cloud className="logo-icon" />
              <span>CloudStatic Pro</span>
            </div>
            <p>
              Professional static website solutions for modern cloud computing education.
              Built with React, optimized for AWS deployment.
            </p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="/services">Static Hosting</a></li>
              <li><a href="/services">Performance Optimization</a></li>
              <li><a href="/services">Security Solutions</a></li>
              <li><a href="/services">Development Tools</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>prasaddongapure@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+91 98765-43210</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Jalgaon, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Shivprasad D. All rights reserved. | 
              Software Developer | Cloud Computing Student
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
