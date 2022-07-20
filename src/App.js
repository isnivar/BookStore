import BooksCatalog from './views/booksCatalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import { useState } from 'react';

const App = () => {

  const [isOpenCart, setIsOpenCart] = useState(false);
  const openCart = (isOpen) => {
    setIsOpenCart(isOpen)
  }

  return (
      <header>
        <NavBar openCart={openCart}/>
        <BooksCatalog opened={isOpenCart}/>
      </header>
  );
}

export default App;
