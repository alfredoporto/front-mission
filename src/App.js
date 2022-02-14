import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Navbar, Home, ProductGrid } from './components';
import ProductDetailContainer from './containers/ProductDetailContainer/ProductDetailContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/products" element={< ProductGrid />} />
        <Route path="/products/:productId" element={< ProductDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
