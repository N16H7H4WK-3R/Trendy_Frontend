import './App.css';
import Carousel from './components/carousel';
import Footer from './components/footer';
import MainNavbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopDetails from './components/productDetails';

function App() {
  return (
    <>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/cart/*" element={<ShopDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
