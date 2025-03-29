import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Create Amazing Story Videos with AI</h1>
        <p>Transform your ideas into engaging video content using cutting-edge AI technology</p>
        <Link to="/create" className="cta-button">
          Start Creating
        </Link>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>AI-Powered Generation</h3>
            <p>Create unique stories from simple text descriptions using advanced AI models</p>
          </div>
          <div className="feature-card">
            <h3>Customizable Styles</h3>
            <p>Choose from various visual styles to match your brand and vision</p>
          </div>
          <div className="feature-card">
            <h3>Decentralized Storage</h3>
            <p>Your content is securely stored on the blockchain, ensuring ownership and accessibility</p>
          </div>
          <div className="feature-card">
            <h3>Real-time Preview</h3>
            <p>Preview your video as it's being generated and make adjustments on the fly</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Write Your Story</h3>
            <p>Describe your story idea and choose your preferred style</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>AI Generation</h3>
            <p>Our AI models create your video based on your input</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Preview & Edit</h3>
            <p>Review your video and make any necessary adjustments</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Share & Monetize</h3>
            <p>Share your video and earn from your content</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 