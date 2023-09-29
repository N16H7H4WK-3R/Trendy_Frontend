import './App.css';
import React from 'react';
import Carousel from './components/carousel';
import Footer from './components/footer';
import MainNavbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopDetails from './components/productDetails';
import Login from './components/login';
import Cart from './components/cart';
import Wishlist from './components/wishlist';
import EditProfile from './components/editProfile';
import OrderList from './components/orderList';
import SignUp from './components/signUp';

function App() {
  return (
    <>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/wishlist/*" element={<Wishlist />} />
          <Route path="/editProfile/*" element={<EditProfile />} />
          <Route path="/Id/:productId/*" element={<ShopDetails />} />
          <Route path="/orders/*" element={<OrderList />} />
          <Route path="/signup/*" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
