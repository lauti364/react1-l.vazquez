import React from 'react';
const CartWidget = ({ cartCount }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartWidget;