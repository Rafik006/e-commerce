import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import ShopContextProvider from './context/context-shop';
import Details from './pages/Details/Details';

function App() {
  return (
    <div >
      <ShopContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/details' element={<Details/>}/>
        </Routes>

      </Router>
      </ShopContextProvider>  

     
    </div>
  );
}

export default App;
