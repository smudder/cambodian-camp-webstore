import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { createParticles } from '../utils/animations';

export default function Checkout() {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

    useEffect(() => {
        if (cartItems.length === 0 && !success) {
            navigate('/cart');
        }
    }, [cartItems.length, navigate, success]);

    const handlePayment = (e) => {
        e.preventDefault();
        setProcessing(true);
        createParticles(window.innerWidth / 2, window.innerHeight / 2);
        
        let flashes = 0;
        const interval = setInterval(() => {
            const colors = ['#FF5A00', '#39FF14', '#9D00FF', '#00FFFF', '#FFFF00', '#000000'];
            document.body.style.backgroundColor = colors[flashes % colors.length];
            flashes++;
            if(flashes > 15) {
                clearInterval(interval);
                document.body.style.backgroundColor = '';
                setProcessing(false);
                setSuccess(true);
                clearCart();
            }
        }, 100);
    };

    if (cartItems.length === 0 && !success) {
        return null;
    }

    if (success) {
        return (
            <div className="shop-section" style={{ minHeight: '60vh', textAlign: 'center' }}>
                <h2 className="garish-title" style={{color: 'var(--nick-green)'}}>PAYMENT AUTHORIZED</h2>
                <p style={{fontSize: '2rem', marginBottom: '30px', backgroundColor: 'black', display: 'inline-block', padding: '15px', color: 'var(--nick-yellow)', border: '4px solid var(--nick-orange)'}}>
                    $ {total.toFixed(2)} extracted successfully from your capitalist holdings.
                </p>
                <button className="metal-btn" onClick={() => navigate('/')} style={{display: 'block', margin: '0 auto', fontSize: '1.5rem', padding: '10px 20px'}}>
                    RETURN TO THE MOSHPIT
                </button>
            </div>
        );
    }

    return (
        <div className="shop-section" style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'var(--nick-blue)', border: '8px solid black', padding: '40px', width: '100%', maxWidth: '600px', boxShadow: '20px 20px 0 var(--nick-orange)'}}>
                <h2 className="garish-title" style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px'}}>SECURE TERMINAL</h2>
                
                <h3 style={{fontSize: '2rem', textAlign: 'center', marginBottom: '20px', backgroundColor: 'black', color: 'white', padding: '10px', WebkitTextStroke: '1px var(--nick-yellow)'}}>
                    DUE: ${total.toFixed(2)}
                </h3>

                <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    <div>
                        <label style={{fontWeight: 'bold', fontSize: '1.5rem', color: 'black', display: 'block'}}>CARD NUMBER</label>
                        <input required type="text" placeholder="0000 0000 0000 0000" pattern="[\d ]{16,19}" maxLength="19" style={{ width: '100%', padding: '15px', fontSize: '1.5rem', border: '5px solid black', fontFamily: 'inherit', outline: 'none', backgroundColor: 'var(--nick-yellow)', color: 'black' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <label style={{fontWeight: 'bold', fontSize: '1.5rem', color: 'black', display: 'block'}}>EXPIRY</label>
                            <input required type="text" placeholder="MM/YY" pattern="\d\d/\d\d" maxLength="5" style={{ width: '100%', padding: '15px', fontSize: '1.5rem', border: '5px solid black', fontFamily: 'inherit', outline: 'none', backgroundColor: 'var(--nick-yellow)', color: 'black' }} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <label style={{fontWeight: 'bold', fontSize: '1.5rem', color: 'black', display: 'block'}}>CVC</label>
                            <input required type="text" placeholder="123" pattern="\d{3,4}" maxLength="4" style={{ width: '100%', padding: '15px', fontSize: '1.5rem', border: '5px solid black', fontFamily: 'inherit', outline: 'none', backgroundColor: 'var(--nick-yellow)', color: 'black' }} />
                        </div>
                    </div>

                    <button type="submit" className="action-btn jitter" disabled={processing} style={{ width: '100%', marginTop: '20px', opacity: processing ? 0.5 : 1 }}>
                        {processing ? "PROCESSING..." : "AUTHORIZE PAYMENT"}
                    </button>
                    
                </form>
            </div>
        </div>
    );
}
