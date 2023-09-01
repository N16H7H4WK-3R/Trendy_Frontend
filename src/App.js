import './App.css';
import NavBar from './components/navbar';
import Carousel from './components/carousel';
import ShopContent from './components/shop';
import Footer from './components/footer'
// import Cart from './components/cart';
// import Login from './components/login';

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