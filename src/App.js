import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import Footer from './components/Footer';
import MenuPopUp from './components/MenuPopUp';
import LeftButtonMenu from './components/LeftButton';

function App() {
  return (
    <div className='App'>
      <header>
        <Navigation style={{ color: 'red' }} />
      </header>
      <main>
        <LeftButtonMenu />
        <MenuPopUp />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
