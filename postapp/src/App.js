import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import { useState } from 'react';

function App() {
  let [menuOpen, setMenuOpen] = useState(true);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='App container'>
      <Header toggle={toggleMenu}></Header>
      <main>
        <Aside isOpen={menuOpen}></Aside>
        <div className='routeHolder'>Home</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
