import { useEffect, useState } from 'react';
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

  const handleActionClick = (e) => {
    createParticles(e.clientX, e.clientY);
    const colors = ['#FF5A00', '#39FF14', '#9D00FF', '#00FFFF', '#FFFF00'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 300);
  };

  const handleStartCrash = () => {
    alert("CRASH: System Error. Punk Rock overload in kernel32.dll. Buy doilies to resolve.");
  };

  const createParticles = (x, y) => {
    for(let i=0; i<30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = Math.random() * 20 + 5 + 'px';
        particle.style.height = particle.style.width;
        
        const colors = ['#FF5A00', '#39FF14', '#9D00FF', '#00FFFF', '#FFFF00', '#000000'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 20 + 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let opacity = 1;
        let pX = x;
        let pY = y;
        
        const animate = () => {
            pX += vx;
            pY += vy;
            opacity -= 0.05;
            
            particle.style.left = pX + 'px';
            particle.style.top = pY + 'px';
            particle.style.opacity = opacity;
            particle.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            if(opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        requestAnimationFrame(animate);
    }
  };

  return (
    <>
      <header className="metal-header">
          <div className="header-content">
              <h1 className="bold-logo">CAMBODIAN CAMP</h1>
              <nav>
                  <a href="#shop" className="metal-btn">DOILIES</a>
                  <a href="#about" className="metal-btn">PUNK</a>
                  <a href="#cart" className="metal-btn cart-btn">CART (0)</a>
              </nav>
          </div>
      </header>

      <section className="hero-section">
          <div className="hero-overlay">
              <h2 className="garish-title">ANARCHY & CROCHET</h2>
              <p className="garish-subtitle">The purest punk doilies, woven with attitude and steel.</p>
              <button className="action-btn jitter" onClick={handleActionClick}>SHOP DOILIES NOW</button>
          </div>
      </section>

      <main className="shop-section" id="shop">
          <h3 className="section-title">FEATURED SCUM DOILIES</h3>
          
          <div className="product-grid">
              <div className="product-card">
                  <img src="/assets/punk_doily_one_1773895378943.png" alt="Punk Crocheted Doily" />
                  <div className="product-info">
                      <h4>Rugged Chain Doily</h4>
                      <p className="price">$45.00</p>
                      <button className="buy-btn jitter" onClick={handleActionClick}>GRAB IT</button>
                  </div>
              </div>
              <div className="product-card">
                  <img src="/assets/punk_doily_two_1773895492556.png" alt="Woven Metal Doily" />
                  <div className="product-info">
                      <h4>Woven Spikes Doily</h4>
                      <p className="price">$66.60</p>
                      <button className="buy-btn jitter" onClick={handleActionClick}>GRAB IT</button>
                  </div>
              </div>
              <div className="product-card">
                  <img src="/assets/punk_doily_one_1773895378943.png" alt="Punk Crocheted Doily" />
                  <div className="product-info">
                      <h4>Acid Wash Lace</h4>
                      <p className="price">$30.00</p>
                      <button className="buy-btn jitter" onClick={handleActionClick}>GRAB IT</button>
                  </div>
              </div>
              <div className="product-card">
                  <img src="/assets/punk_doily_two_1773895492556.png" alt="Woven Metal Doily" />
                  <div className="product-info">
                      <h4>Barbed Wire Mat</h4>
                      <p className="price">$55.00</p>
                      <button className="buy-btn jitter" onClick={handleActionClick}>GRAB IT</button>
                  </div>
              </div>
          </div>
      </main>

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
