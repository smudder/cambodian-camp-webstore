export function createParticles(x, y) {
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
}
