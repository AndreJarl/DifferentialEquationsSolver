import React from 'react';
import Home from './Home';
import About from './routes/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
  );
}

export default App;
