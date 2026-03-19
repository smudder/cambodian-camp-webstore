import { useState, useEffect } from 'react';

export default function VirusOverlay({ active }) {
    const [popups, setPopups] = useState([]);

    useEffect(() => {
        if (!active) return;
        
        // Rapidly spawn popups
        const interval = setInterval(() => {
            setPopups(prev => [
                ...prev, 
                {
                    id: Date.now() + Math.random(),
                    x: Math.random() * (window.innerWidth - 300),
                    y: Math.random() * (window.innerHeight - 150),
                    title: "FATAL ERROR 0x000" + Math.floor(Math.random() * 9999),
                    message: ["SYSTEM CORRUPTED", "PUNK IS NOT DEAD", "BUY MORE DOILIES", "CAPITALISM INJECTED", "MEMORY LEAK", "FORMATTING C:\\", "I AM INSIDE YOUR WALLS"][Math.floor(Math.random() * 7)]
                }
            ]);

            // Flash background colors violently
            const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#000000'];
            document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Jitter the whole screen
            document.body.style.transform = `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) skewX(${Math.random() * 10 - 5}deg)`;

        }, 150);

        return () => {
            clearInterval(interval);
            document.body.style.backgroundColor = '';
            document.body.style.transform = '';
        };
    }, [active]);

    if (!active) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999999, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '10rem', color: 'red', WebkitTextStroke: '3px black', zIndex: 9999999, textShadow: '10px 10px 0 black' }}>
                INFECTED.
            </div>
            
            {popups.map(popup => (
                <div key={popup.id} style={{
                    position: 'absolute',
                    left: `${popup.x}px`,
                    top: `${popup.y}px`,
                    width: '300px',
                    backgroundColor: '#ece9d8',
                    border: '3px solid #0058e6',
                    boxShadow: '10px 10px 0px rgba(0,0,0,0.8)'
                }}>
                    <div style={{
                        background: 'linear-gradient(to right, #0058e6 0%, #3a93ff 10%, #0058e6 100%)',
                        color: 'white',
                        padding: '5px',
                        fontFamily: 'Tahoma, "Segoe UI", sans-serif',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span style={{fontSize: '0.8rem'}}>⚠️ {popup.title}</span>
                        <span style={{background: 'red', padding: '0 5px', color: 'white', border: '1px solid white'}}>X</span>
                    </div>
                    <div style={{ padding: '20px', textAlign: 'left', color: 'black', fontFamily: 'Tahoma, "Segoe UI", sans-serif', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: '2.5rem', color: 'red' }}>❌</span>
                        <span style={{fontWeight: 'bold'}}>{popup.message}</span>
                    </div>
                    <div style={{ padding: '10px', textAlign: 'center', borderTop: '1px solid #d4d0c8', background: '#e4e2d4' }}>
                        <div style={{ border: '2px solid black', display: 'inline-block', padding: '2px 20px', background: '#ece9d8', fontWeight: 'bold' }}>OK</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
