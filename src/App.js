import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Navbar, Home } from './components';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
