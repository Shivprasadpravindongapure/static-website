import React from 'react';
import { Zap, Shield, DollarSign, Globe, Server, Cpu } from 'lucide-react';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Static websites load instantly with no server processing time, providing the best user experience.'
    },
    {
      icon: Shield,
      title: 'Highly Secure',
      description: 'With no server-side processing or databases, static sites have minimal security vulnerabilities.'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Extremely low hosting costs with free tiers available on most cloud platforms.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Automatically scales to handle enterprise-level traffic with no additional configuration.'
    },
    {
      icon: Server,
      title: 'Zero Maintenance',
      description: 'No server management, updates, or security patches required.'
    },
    {
      icon: Cpu,
      title: 'High Performance',
      description: 'Optimized for speed with CDN integration and caching capabilities.'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>CloudStatic Pro</h1>
            <p>
              Experience the power of modern static websites. Built for performance, 
              designed for scalability, perfect for your cloud computing journey.
            </p>
            <div className="hero-buttons">
              <a href="/about" className="btn btn-primary">Learn More</a>
              <a href="/contact" className="btn btn-secondary">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">Why Choose Static Websites?</h2>
            <p className="fade-in">
              Static websites are the future of web development, offering unmatched 
              performance and reliability for modern applications.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card fade-in">
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container text-center">
          <h2>Ready to Deploy Your Static Website?</h2>
          <p>
            This React application is optimized for AWS S3 static hosting. 
            Follow our deployment guide to get your website live in minutes.
          </p>
          <a href="/contact" className="btn btn-primary">View Deployment Guide</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
