import { useNavigate } from 'react-router-dom';

export default function Manifesto() {
    const navigate = useNavigate();
    
    return (
        <div className="shop-section" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '800px', backgroundColor: 'var(--nick-blue)', padding: '10px', border: '5px solid black', boxShadow: '20px 20px 0 var(--nick-orange)'}}>
                
                <div className="xp-window-header" style={{marginBottom: '0'}}>
                    <div className="xp-window-title">
                        <span style={{fontSize: '1.2rem', textShadow: 'none'}}>📝</span>
                        <span>doily_manifesto.txt - Notepad</span>
                    </div>
                    <div className="xp-window-controls">
                        <div className="xp-window-btn minimize">_</div>
                        <div className="xp-window-btn maximize">□</div>
                        <div className="xp-window-btn close" onClick={() => navigate('/')}>X</div>
                    </div>
                </div>
                
                <div className="xp-menu-bar" style={{marginBottom: '0'}}>
                    <span className="xp-menu-item">File</span>
                    <span className="xp-menu-item">Edit</span>
                    <span className="xp-menu-item">Format</span>
                    <span className="xp-menu-item">View</span>
                    <span className="xp-menu-item">Help</span>
                </div>

                <textarea readOnly style={{ 
                    width: '100%', 
                    height: '500px', 
                    padding: '20px', 
                    fontFamily: '"Courier New", Courier, monospace', 
                    fontSize: '1.2rem',
                    border: '2px solid #8db5e2',
                    borderTop: 'none',
                    backgroundColor: 'white',
                    color: 'black',
                    resize: 'none',
                    outline: 'none'
                }} value={`DOILY MANIFESTO - V1.0

The capitalist machine demands endless consumption of identical, soulless plastic. They want you buying mass-produced garbage assembled in suffering.

We say NO.

We crochet in the shadows.
We weave steel wire into the delicate patterns of our grandmothers.
Every knot is an act of defiance. Every ruffled edge is a middle finger to the corporate overlords.

Why doilies?
Because society tells you they are obsolete.
Because society tells you they belong under a porcelain cat collecting dust.

We put them under our boots. We spill anarchy on them. We harden them with rust and spite.

You cannot buy freedom. But you CAN buy a $66.60 Woven Spikes Doily to remind the system that even the most delicate traditions can be weaponized.

DEATH TO THE ESTABLISHMENT.
LONG LIVE THE CROCHET RESISTANCE.

- [End of document]`} />

            </div>
        </div>
    );
}
