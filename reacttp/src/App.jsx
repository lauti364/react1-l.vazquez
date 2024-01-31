
import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import './App.css';

const App = () => {

  const cartCount = 2;

  return (
    <div className="app">
      <Navbar />
      <ItemListContainer />
      <CartWidget cartCount={cartCount} />
    </div>
  );
};

export default App;