import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
    const { cartItems } = useCart();
    
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

    return (
        <div className="shop-section" style={{ minHeight: '60vh' }}>
            <h2 className="section-title">YOUR LOOT</h2>
            {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center' }}>
                    <p style={{fontSize: '2rem', marginBottom: '20px'}}>Your cart is completely empty. How un-punk.</p>
                    <Link to="/" className="action-btn jitter" style={{display: 'inline-block', textDecoration: 'none'}}>BUY DOILIES</Link>
                </div>
            ) : (
                <div style={{ backgroundColor: 'black', border: '5px solid var(--nick-green)', padding: '20px', color: 'white', boxShadow: '15px 15px 0 var(--nick-orange)' }}>
                    {cartItems.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px dashed var(--nick-orange)', padding: '10px 0', fontSize: '1.5rem' }}>
                            <span>{item.name}</span>
                            <span style={{color: 'var(--nick-yellow)'}}>{item.price}</span>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '2rem', borderTop: '5px solid var(--nick-blue)', paddingTop: '10px' }}>
                        <span>TOTAL SCUM TAX:</span>
                        <span style={{color: 'var(--nick-green)'}}>${total.toFixed(2)}</span>
                    </div>
                    
                    <Link to="/checkout" style={{ display: 'block', textAlign: 'center', marginTop: '30px', textDecoration: 'none' }} className="action-btn jitter">
                        PROCEED TO SECURE PUNK CHECKOUT
                    </Link>
                </div>
            )}
        </div>
    );
}
