import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-header">
          <h1>About Diamond Essentials</h1>
          <p>Your trusted partner in baseball excellence since 2010</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Diamond Essentials was founded with a simple mission: to provide baseball players 
              of all levels with the highest quality equipment they need to perform at their best. 
              What started as a small local shop has grown into a premier destination for baseball 
              gear, serving players from little league to the pros.
            </p>
            <p>
              Our founder, a former college baseball player, understood the importance of having 
              the right equipment. Whether it's a perfectly balanced bat, a glove that fits like 
              a second skin, or cleats that provide the perfect grip, every piece of equipment 
              can make a difference in your game.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              We believe that every player deserves access to professional-quality equipment. 
              Our mission is to provide the best baseball gear at competitive prices, backed by 
              expert advice and exceptional customer service.
            </p>
            <div className="mission-points">
              <div className="mission-point">
                <div className="mission-icon">🏆</div>
                <h3>Quality First</h3>
                <p>We only carry products from trusted brands that meet our high standards.</p>
              </div>
              <div className="mission-point">
                <div className="mission-icon">👨‍💼</div>
                <h3>Expert Advice</h3>
                <p>Our team of baseball experts is here to help you find the perfect gear.</p>
              </div>
              <div className="mission-point">
                <div className="mission-icon">🚚</div>
                <h3>Fast Service</h3>
                <p>Quick shipping and easy returns to get you back on the field faster.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Premium Selection</h3>
                <p>Carefully curated inventory featuring the best brands in baseball equipment.</p>
              </div>
              <div className="feature">
                <h3>Expert Staff</h3>
                <p>Our team includes former players and coaches who understand the game.</p>
              </div>
              <div className="feature">
                <h3>Customer Satisfaction</h3>
                <p>We're committed to your satisfaction with our 100% guarantee.</p>
              </div>
              <div className="feature">
                <h3>Community Focus</h3>
                <p>Supporting local teams and leagues through sponsorships and donations.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value">
                <h3>Integrity</h3>
                <p>We conduct business with honesty and transparency in all our dealings.</p>
              </div>
              <div className="value">
                <h3>Excellence</h3>
                <p>We strive for excellence in every product we carry and every service we provide.</p>
              </div>
              <div className="value">
                <h3>Community</h3>
                <p>We're proud to be part of the baseball community and give back to the sport we love.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 