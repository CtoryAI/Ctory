import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Create Amazing Stories with AI</h1>
        <p>Transform your ideas into stunning video stories using cutting-edge AI technology</p>
        <Link to="/studio" className="cta-button">
          Start Creating
        </Link>
      </section>

      <section className="features">
        <h2>Why Choose Ctory?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>AI-Powered Creation</h3>
            <p>Generate high-quality video content from simple text descriptions</p>
          </div>
          <div className="feature-card">
            <h3>Blockchain Integration</h3>
            <p>Secure your content ownership and monetize your creations</p>
          </div>
          <div className="feature-card">
            <h3>Professional Quality</h3>
            <p>Access industry-standard tools and templates</p>
          </div>
          <div className="feature-card">
            <h3>Community Driven</h3>
            <p>Join a thriving community of creators and storytellers</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Write Your Story</h3>
            <p>Describe your story idea in text</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>AI Generation</h3>
            <p>Our AI creates visuals and audio</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Customize</h3>
            <p>Fine-tune your creation</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Share & Earn</h3>
            <p>Publish and monetize your work</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 