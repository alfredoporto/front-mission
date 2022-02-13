import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Navbar } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={< About />} />
      </Routes>
    </Router>
  );
}

export default App;
