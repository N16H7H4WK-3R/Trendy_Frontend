import './App.css';
import Carousel from './components/carousel';
import ShopContent from './components/shop';
import Footer from './components/footer';
import MainNavbar from './components/navbar';
// import ShopDetails from './components/productDetails';
import Cart from './components/cart';
// import Login from './components/login';

function App() {
  return (
    <>
      <MainNavbar/>
      <Carousel />
      <ShopContent />
      <Footer />
      {/* <Login />
      <Cart /> */}
      {/* <ShopDetails/> */}
    </>
  );
}

export default App;