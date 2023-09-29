import './App.css';
import React, { useState, useEffect } from 'react';
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
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/services/data/', {
      method: 'GET',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch product data');
        }
      })
      .then(data => {
        setProductData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function productRoutes() {
    return productData.map((product) => (
      <Route
        key={product.productId}
        path={`/Id${product.productId}`}
        element={
          <ShopDetails
            productTitle={product.productTitle}
            productDescription={product.productDescription}
            productPrice={product.productPrice}
            imageUrl={product.imageUrl}
          />
        }
      />
    ));
  }

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
          {productRoutes()}
          <Route path="/orders/*" element={<OrderList />} />
          <Route path="/signup/*" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
