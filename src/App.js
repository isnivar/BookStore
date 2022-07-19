import BooksCatalog from './views/booksCatalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';

function App() {
  return (
      <header>
        <NavBar/>
        <BooksCatalog />
      </header>
  );
}

export default App;
