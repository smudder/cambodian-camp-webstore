import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Manifesto from './pages/Manifesto';
import './index.css';

function App() {
  const [time, setTime] = useState('12:00 PM');
  const { cartItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      setTime(`${hours}:${minutes} ${ampm}`);
    };
    
    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, []);

  const handleStartCrash = () => {
    alert("CRASH: System Error. Punk Rock overload in kernel32.dll. Buy doilies to resolve.");
  };

  return (
    <>
      <header className="xp-header-container">
          <div className="xp-window-header">
              <div className="xp-window-title">
                  <span style={{fontSize: '1.2rem', textShadow: 'none'}}>🗔</span>
                  <span>CAMBODIAN_DEATHCAMP.exe</span>
              </div>
              <div className="xp-window-controls">
                  <div className="xp-window-btn minimize">_</div>
                  <div className="xp-window-btn maximize">□</div>
                  <div className="xp-window-btn close" onClick={() => alert('Nice try, punk.')}>X</div>
              </div>
          </div>
          <div className="xp-menu-bar">
              <span className="xp-menu-item">File</span>
              <span className="xp-menu-item">Edit</span>
              <span className="xp-menu-item">View</span>
              <Link to="/" className="xp-menu-item">Storefront</Link>
              <Link to="/cart" className="xp-menu-item" style={{fontWeight: 'bold', color: cartItems.length > 0 ? '#c43224' : 'black'}}>
                  Cart ({cartItems.length})
              </Link>
          </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/manifesto" element={<Manifesto />} />
      </Routes>

      <footer className="xp-footer">
          <div className="xp-start-btn" onClick={handleStartCrash}>
              <span className="xp-logo">⊞</span> Start
          </div>
          <div className="xp-taskbar-tasks">
              <div 
                  className={`xp-task ${location.pathname !== '/manifesto' ? 'active' : ''}`}
                  onClick={() => navigate('/')}
              >
                  CAMBODIAN_DEATHCAMP.exe
              </div>
              <div 
                  className={`xp-task ${location.pathname === '/manifesto' ? 'active' : ''}`}
                  onClick={() => navigate('/manifesto')}
              >
                  doily_manifesto.txt
              </div>
          </div>
          <div className="xp-tray">
              <span className="xp-time">{time}</span>
          </div>
      </footer>
    </>
  );
}

export default App;
