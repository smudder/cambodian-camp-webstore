import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import './index.css';

function App() {
  const [time, setTime] = useState('12:00 PM');

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
      <header className="metal-header">
          <div className="header-content">
              <Link to="/" style={{textDecoration: 'none'}}>
                  <h1 className="bold-logo">CAMBODIAN CAMP</h1>
              </Link>
              <nav>
                  <Link to="/" className="metal-btn">HOME</Link>
                  <a href="#cart" className="metal-btn cart-btn">CART (0)</a>
              </nav>
          </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

      <footer className="xp-footer">
          <div className="xp-start-btn" onClick={handleStartCrash}>
              <span className="xp-logo">⊞</span> Start
          </div>
          <div className="xp-taskbar-tasks">
              <div className="xp-task active">CAMBODIAN_CAMP.exe</div>
              <div className="xp-task">doily_manifesto.txt</div>
          </div>
          <div className="xp-tray">
              <span className="xp-time">{time}</span>
          </div>
      </footer>
    </>
  );
}

export default App;
