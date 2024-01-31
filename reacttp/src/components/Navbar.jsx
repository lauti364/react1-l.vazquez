import React, { useState } from 'react';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleCategoryClick = (category) => {
    console.log(`Categoría seleccionada: ${category}`);
  };

  return (
    <nav className="navbar">
      <div className="brand">Nombre de la Tienda</div>
      {/* ... Resto del código ... */}
      <div className="cart-container">
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;