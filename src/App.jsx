import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import JSBI from './pages/JSBI';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <JSBI />
    </BrowserRouter>
  );
}

export default App;
