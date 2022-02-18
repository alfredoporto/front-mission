import './App.css';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Navbar, Home, ProductGrid } from './components';
import ProductDetailContainer from './containers/ProductDetailContainer/ProductDetailContainer';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products?limit=8').then(r => r.json());

    setProducts(res);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/products" element={< ProductGrid products={products} />} />
        <Route path="/products/:productId" element={< ProductDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
