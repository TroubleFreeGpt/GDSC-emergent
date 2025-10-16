import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dashboard" element={<div className="min-h-screen bg-[#0A0D14] text-white flex items-center justify-center pt-20"><h1 className="text-4xl font-bold">Dashboard - Coming Soon</h1></div>} />
          <Route path="/shop" element={<div className="min-h-screen bg-[#0A0D14] text-white flex items-center justify-center pt-20"><h1 className="text-4xl font-bold">Shop - Coming Soon</h1></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
