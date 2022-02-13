import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './components';

function App() {
  return (
    <Router>
      <div>
        Navbar
        <Routes>
          <Route path="/about" element={< About />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
