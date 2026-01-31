import React from 'react';
import { Package, Zap, Shield, Globe, Smartphone, Database } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Static Website Hosting',
      description: 'Deploy your React applications as static websites with zero server maintenance.',
      features: ['AWS S3 Integration', 'Auto-scaling', 'Global CDN', '99.99% Uptime']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast loading times with advanced optimization techniques.',
      features: ['Code Splitting', 'Image Optimization', 'Caching Strategies', 'Minification']
    },
    {
      icon: Shield,
      title: 'Security & Reliability',
      description: 'Enterprise-grade security with built-in DDoS protection and SSL certificates.',
      features: ['HTTPS Encryption', 'DDoS Protection', 'Regular Backups', 'Security Headers']
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Perfect viewing experience across all devices and screen sizes.',
      features: ['Mobile-First Design', 'Cross-Browser Support', 'Touch Optimization', 'Accessibility']
    },
    {
      icon: Database,
      title: 'Content Management',
      description: 'Easy content updates without technical knowledge required.',
      features: ['Headless CMS Ready', 'Git-based Workflow', 'Preview Deployments', 'Rollback Options']
    },
    {
      icon: Package,
      title: 'Development Tools',
      description: 'Modern development workflow with automated testing and deployment.',
      features: ['CI/CD Pipeline', 'Automated Testing', 'Code Quality Checks', 'Performance Monitoring']
    }
  ];

  return (
    <div className="services">
      <section className="page-header">
        <div className="container text-center">
          <h1>Our Services</h1>
          <p>
            Comprehensive static website solutions for modern cloud computing needs.
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-intro text-center">
            <h2>Professional Static Website Solutions</h2>
            <p>
              We provide end-to-end static website services that combine cutting-edge technology 
              with best practices for performance, security, and scalability.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2 className="text-center">Our Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Understanding your requirements and objectives for the static website.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Development</h3>
              <p>Building your React application with modern best practices and optimization.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Deployment</h3>
              <p>Configuring AWS S3 and CloudFront for optimal performance and security.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Optimization</h3>
              <p>Continuous monitoring and optimization for best performance metrics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p>
            Transform your ideas into high-performance static websites that scale globally.
          </p>
          <a href="/contact" className="btn btn-primary">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
};

export default Services;
