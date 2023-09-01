import './App.css';
import NavBar from './components/navbar';
import Carousel from './components/carousel';
import ShopContent from './components/shop';
import Footer from './components/footer'
import Login from './components/login';
import Cart from './components/cart';

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <ShopContent />
      <Footer />
      {/* <Login />
      <Cart /> */}
    </>
  );
}

export default App;