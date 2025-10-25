import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Diamond Essentials</h1>
            <p>Your premier destination for professional baseball equipment. From bats to gloves, we have everything you need to dominate the diamond.</p>
            <div className="hero-buttons">
              <Link to="/shop" className="btn btn-primary">Shop Now</Link>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">Why Choose Diamond Essentials?</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>We carry only the finest baseball equipment from top brands, ensuring you get the best performance on the field.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Shipping</h3>
              <p>Get your gear quickly with our fast and reliable shipping. Free shipping on orders over $100.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>Expert Support</h3>
              <p>Our team of baseball experts is here to help you find the perfect equipment for your game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Discover our most popular baseball equipment</p>
          <div className="grid grid-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/shop" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="grid grid-4">
            <Link to="/shop?category=Bats" className="category-card">
              <div className="category-icon">🏏</div>
              <h3>Bats</h3>
              <p>Professional-grade bats for every level</p>
            </Link>
            <Link to="/shop?category=Gloves" className="category-card">
              <div className="category-icon">🧤</div>
              <h3>Gloves</h3>
              <p>Premium leather gloves for superior feel</p>
            </Link>
            <Link to="/shop?category=Helmets" className="category-card">
              <div className="category-icon">⛑️</div>
              <h3>Helmets</h3>
              <p>Advanced protection for safety</p>
            </Link>
            <Link to="/shop?category=Cleats" className="category-card">
              <div className="category-icon">👟</div>
              <h3>Cleats</h3>
              <p>Lightweight cleats for optimal performance</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="grid grid-3">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The Louisville Slugger bat I bought here is incredible. My hitting has improved dramatically!"</p>
              </div>
              <div className="testimonial-author">
                <strong>Mike Johnson</strong>
                <span>High School Player</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Best baseball equipment store I've found. Great selection and excellent customer service."</p>
              </div>
              <div className="testimonial-author">
                <strong>Sarah Martinez</strong>
                <span>College Coach</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Fast shipping and quality products. My team loves the gear we got from Diamond Essentials."</p>
              </div>
              <div className="testimonial-author">
                <strong>Coach Davis</strong>
                <span>Little League Coach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Elevate Your Game?</h2>
            <p>Join thousands of players who trust Diamond Essentials for their baseball equipment needs.</p>
            <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 