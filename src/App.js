import BooksCatalog from './views/booksCatalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import { useState } from 'react';

const App = () => {

  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cartSize, setCartSize] = useState(0);
  
  const openCart = (isOpen) => {
    setIsOpenCart(isOpen)
  }

  return (
      <header>
        <NavBar openCart={openCart} size={cartSize} />
        <BooksCatalog opened={isOpenCart} getSize={setCartSize} />
      </header>
  );
}

export default App;
