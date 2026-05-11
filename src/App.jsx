import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JSBI from './pages/JSBI';
import Programs from './pages/Programs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JSBI />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
