import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../components/CartContext';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="container">
        <div className="product-not-found">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/shop')} className="btn btn-primary">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_ITEM', payload: product });
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">⭐</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star">⭐</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">⭐</span>);
    }

    return stars;
  };

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-images">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
              {!product.inStock && (
                <div className="out-of-stock-badge">Out of Stock</div>
              )}
            </div>
          </div>

          <div className="product-info">
            <nav className="breadcrumb">
              <button onClick={() => navigate('/shop')} className="breadcrumb-link">
                Shop
              </button>
              <span className="breadcrumb-separator">/</span>
              <button 
                onClick={() => navigate(`/shop?category=${product.category}`)}
                className="breadcrumb-link"
              >
                {product.category}
              </button>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">{product.name}</span>
            </nav>

            <h1 className="product-title">{product.name}</h1>

            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">
                {product.rating} out of 5 ({product.reviews} reviews)
              </span>
            </div>

            <div className="product-price">
              <span className="price">${product.price.toFixed(2)}</span>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            {product.features && (
              <div className="product-features">
                <h3>Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="product-actions">
              {product.inStock ? (
                <>
                  <div className="quantity-selector">
                    <label htmlFor="quantity">Quantity:</label>
                    <div className="quantity-controls">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="quantity-btn"
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                        className="quantity-input"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="btn btn-primary add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </>
              ) : (
                <div className="out-of-stock-message">
                  <p>This product is currently out of stock.</p>
                  <button onClick={() => navigate('/shop')} className="btn btn-outline">
                    Browse Other Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 