import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RfqDrawer from './components/RfqDrawer';
import ToastContainer from './components/ToastContainer';

import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-surface-bg text-slate-body">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <RfqDrawer />
      <ToastContainer />
    </div>
  );
}
