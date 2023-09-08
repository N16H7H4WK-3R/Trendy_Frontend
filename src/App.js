import './App.css';
import React from 'react';
import Carousel from './components/carousel';
import Footer from './components/footer';
import MainNavbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopDetails from './components/productDetails';
import Login from './components/login';
import Cart from './components/cart';
import productData from './components/productDetailData.json'

function App() {
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
          {productRoutes()}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
