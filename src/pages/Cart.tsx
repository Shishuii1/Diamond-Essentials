import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import './Cart.css';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: productId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const handleRemoveItem = (productId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  if (state.items.length === 0) {
    return (
      <div className="cart">
        <div className="container">
          <div className="empty-cart">
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{state.items.length} item{state.items.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {state.items.map((item) => (
              <div key={item.product.id} className="cart-item">
                <div className="item-image">
                  <img src={item.product.image} alt={item.product.name} />
                </div>
                
                <div className="item-details">
                  <h3 className="item-name">{item.product.name}</h3>
                  <p className="item-category">{item.product.category}</p>
                  <p className="item-price">${item.product.price.toFixed(2)}</p>
                </div>

                <div className="item-quantity">
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="item-total">
                  <span className="total-price">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>

                <button
                  onClick={() => handleRemoveItem(item.product.id)}
                  className="remove-btn"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping:</span>
              <span>{state.total >= 100 ? 'Free' : '$9.99'}</span>
            </div>
            
            <div className="summary-row total">
              <span>Total:</span>
              <span>${(state.total + (state.total >= 100 ? 0 : 9.99)).toFixed(2)}</span>
            </div>

            <div className="shipping-info">
              {state.total >= 100 ? (
                <p className="free-shipping">🎉 Free shipping on orders over $100!</p>
              ) : (
                <p className="shipping-notice">
                  Add ${(100 - state.total).toFixed(2)} more for free shipping
                </p>
              )}
            </div>

            <Link to="/checkout" className="btn btn-primary checkout-btn">
              Proceed to Checkout
            </Link>

            <Link to="/shop" className="btn btn-outline continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 