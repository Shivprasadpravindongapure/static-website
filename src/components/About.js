import React from 'react';
import { Code, Cloud, Users, Target } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="page-header">
        <div className="container text-center">
          <h1>About Shivprasad D</h1>
          <p>
            Software Developer | Cloud Computing Enthusiast | Jalgaon, India
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>About Shivprasad D</h2>
              <p>
                Hello! I'm Shivprasad D, a passionate Software Developer from Jalgaon, Maharashtra. 
                I'm currently expanding my expertise in cloud computing, and this static website 
                represents my practical journey into modern web deployment technologies.
              </p>
              <p>
                As a software developer with a keen interest in cloud technologies, I believe in 
                creating efficient, scalable solutions that leverage the power of modern cloud platforms. 
                This project demonstrates my understanding of static websites, React development, 
                and AWS deployment strategies.
              </p>
              <p>
                My journey in software development is driven by continuous learning and practical 
                application of new technologies. This AWS static website practical is part of my 
                cloud computing education, where I'm exploring the benefits of serverless 
                architectures and modern deployment practices.
              </p>
            </div>
            <div className="about-features">
              <h3>Skills & Expertise</h3>
              <ul>
                <li>✓ React.js & Modern JavaScript</li>
                <li>✓ Cloud Computing (AWS)</li>
                <li>✓ Static Website Development</li>
                <li>✓ Responsive Web Design</li>
                <li>✓ Frontend Optimization</li>
                <li>✓ Modern Deployment Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="text-center">My Professional Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Target />
              </div>
              <h3>Continuous Learning</h3>
              <p>
                Always exploring new technologies and staying updated with the latest 
                trends in software development and cloud computing.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Code />
              </div>
              <h3>Clean Code</h3>
              <p>
                Writing maintainable, efficient, and well-structured code that follows 
                industry best practices and design patterns.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Cloud />
              </div>
              <h3>Cloud Native</h3>
              <p>
                Embracing cloud-first development approach with scalable, secure, and 
                cost-effective solutions.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users />
              </div>
              <h3>Problem Solving</h3>
              <p>
                Analytical approach to solving complex technical challenges with 
                innovative and practical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <div className="container text-center">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>Frontend</h4>
              <p>React 18, CSS3, Lucide Icons</p>
            </div>
            <div className="tech-item">
              <h4>Build Tools</h4>
              <p>Create React App, Webpack</p>
            </div>
            <div className="tech-item">
              <h4>Deployment</h4>
              <p>AWS S3, CloudFront, Route 53</p>
            </div>
            <div className="tech-item">
              <h4>Performance</h4>
              <p>CDN, Caching, Compression</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
