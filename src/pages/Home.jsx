import { useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { createParticles } from '../utils/animations';

export default function Home() {
    const navigate = useNavigate();

    const handleActionClick = (e, targetPath) => {
        // Explode particles and background
        createParticles(e.clientX, e.clientY);
        const colors = ['#FF5A00', '#39FF14', '#9D00FF', '#00FFFF', '#FFFF00'];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Wait briefly for effect, then navigate
        setTimeout(() => {
            document.body.style.backgroundColor = '';
            if (targetPath) {
                navigate(targetPath);
            }
        }, 150);
    };

    return (
        <>
            <section className="hero-section">
                <div className="hero-overlay">
                    <h2 className="garish-title">ANARCHY & CROCHET</h2>
                    <p className="garish-subtitle">The purest punk doilies, woven with attitude and steel.</p>
                    <button className="action-btn jitter" onClick={(e) => handleActionClick(e, '#shop')}>
                        SHOP DOILIES NOW
                    </button>
                </div>
            </section>

            <main className="shop-section" id="shop">
                <h3 className="section-title">FEATURED SCUM DOILIES</h3>
                
                <div className="product-grid">
                    {products.map(product => (
                        <div className="product-card" key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.image} alt={product.name} />
                            </Link>
                            <div className="product-info">
                                <h4>{product.name}</h4>
                                <p className="price">{product.price}</p>
                                <button className="buy-btn jitter" onClick={(e) => handleActionClick(e, `/product/${product.id}`)}>
                                    GRAB IT
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
