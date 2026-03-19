import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { createParticles } from '../utils/animations';

export default function Product() {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    const handleAddToCart = (e) => {
        createParticles(e.clientX, e.clientY);
        const colors = ['#FF5A00', '#39FF14', '#9D00FF', '#00FFFF', '#FFFF00'];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        setTimeout(() => {
            document.body.style.backgroundColor = '';
            alert("ADDED TO CART. STAY PUNK.");
        }, 300);
    };

    if (!product) {
        return (
            <div className="shop-section" style={{ textAlign: 'center', minHeight: '60vh' }}>
                <h2 className="garish-title">DOILY NOT FOUND</h2>
                <Link to="/" className="metal-btn" style={{display: 'inline-block', marginTop: '20px'}}>BACK TO SCUM STORE</Link>
            </div>
        );
    }

    return (
        <div className="shop-section" style={{ minHeight: '70vh' }}>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', backgroundColor: 'var(--nick-blue)', border: '8px solid black', padding: '30px', boxShadow: '15px 15px 0 var(--nick-orange)' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        style={{ width: '100%', border: '6px solid black', borderRadius: '10px' }} 
                        className="jitter" 
                    />
                </div>
                <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 className="garish-title" style={{ fontSize: '4rem', WebkitTextStroke: '1px black', textAlign: 'left', marginBottom: '10px' }}>
                        {product.name}
                    </h2>
                    <p className="price" style={{ fontSize: '2.5rem', marginBottom: '30px' }}>{product.price}</p>
                    <p style={{ fontSize: '1.5rem', marginBottom: '40px', backgroundColor: 'black', color: 'var(--nick-yellow)', padding: '15px', border: '3px solid var(--nick-green)' }}>
                        {product.description}
                    </p>
                    
                    <button className="action-btn jitter" onClick={handleAddToCart} style={{ width: '100%', marginBottom: '20px' }}>
                        ADD TO CART
                    </button>
                    
                    <Link to="/" className="metal-btn" style={{ textAlign: 'center', display: 'block' }}>
                        &lt; BACK TO SCUM STORE
                    </Link>
                </div>
            </div>
        </div>
    );
}
