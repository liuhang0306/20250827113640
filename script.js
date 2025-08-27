document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('acceptBtn');
    const declineBtn = document.getElementById('declineBtn');
    const response = document.getElementById('response');
    
    // Make the decline button run away from cursor
    declineBtn.addEventListener('mouseover', function(e) {
        const x = Math.random() * (window.innerWidth - this.offsetWidth);
        const y = Math.random() * (window.innerHeight - this.offsetHeight);
        
        // Make sure button stays within viewport
        const safeX = Math.min(Math.max(x, 10), window.innerWidth - this.offsetWidth - 10);
        const safeY = Math.min(Math.max(y, 10), window.innerHeight - this.offsetHeight - 10);
        
        this.style.position = 'fixed';
        this.style.left = safeX + 'px';
        this.style.top = safeY + 'px';
    });
    
    // Handle accept button click
    acceptBtn.addEventListener('click', function() {
        response.textContent = '❤️ 李嘉一，我们在一起吧！';
        response.style.color = '#ff4b4b';
        
        // Create falling hearts
        createFallingHearts();
        
        // Disable buttons
        acceptBtn.disabled = true;
        declineBtn.disabled = true;
    });
    
    // Handle decline button click (just in case they manage to click it)
    declineBtn.addEventListener('click', function() {
        response.textContent = '李嘉一，别担心，我会一直等你 ❤️';
        response.style.color = '#666';
        
        // Reset button position
        this.style.position = 'static';
    });
    
    // Create falling hearts animation
    function createFallingHearts() {
        // Create container for falling hearts
        const heartsContainer = document.createElement('div');
        heartsContainer.className = 'falling-hearts';
        document.body.appendChild(heartsContainer);
        
        // Create 50 hearts
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'falling-heart';
                heart.innerHTML = '❤️';
                
                // Random position
                const startPositionX = Math.random() * window.innerWidth;
                heart.style.left = startPositionX + 'px';
                
                // Random size
                const size = Math.random() * 20 + 10;
                heart.style.fontSize = size + 'px';
                
                // Random duration
                const duration = Math.random() * 3 + 2;
                heart.style.animation = `fall ${duration}s linear`;
                
                heartsContainer.appendChild(heart);
                
                // Remove heart after animation
                setTimeout(() => {
                    heart.remove();
                }, duration * 1000);
            }, i * 100);
        }
    }
    
    // Touch support for mobile
    declineBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const x = Math.random() * (window.innerWidth - this.offsetWidth);
        const y = Math.random() * (window.innerHeight - this.offsetHeight);
        
        const safeX = Math.min(Math.max(x, 10), window.innerWidth - this.offsetWidth - 10);
        const safeY = Math.min(Math.max(y, 10), window.innerHeight - this.offsetHeight - 10);
        
        this.style.position = 'fixed';
        this.style.left = safeX + 'px';
        this.style.top = safeY + 'px';
    });
});