import './App.css';
import React from 'react';
import Carousel from './components/carousel';
import Footer from './components/footer';
import MainNavbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopDetails from './components/productDetails';
import Login from './components/login';

function App() {
  return (
    <>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/cart/*" element={<ShopDetails />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
