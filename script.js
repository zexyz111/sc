document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 50;

    // Генерация снега
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');
        
        const size = Math.random() * 3 + 1 + 'px';
        flake.style.width = size;
        flake.style.height = size;
        
        flake.style.left = Math.random() * 100 + 'vw';
        flake.style.top = Math.random() * 100 + 'vh';
        
        const duration = Math.random() * 10 + 5 + 's';
        const delay = Math.random() * -20 + 's';
        
        flake.animate([
            { transform: 'translateY(-10vh) translateX(0)', opacity: 0 },
            { opacity: 0.5, offset: 0.2 },
            { transform: 'translateY(110vh) translateX(20px)', opacity: 0 }
        ], {
            duration: parseFloat(duration) * 1000,
            iterations: Infinity,
            delay: parseFloat(delay) * 1000
        });

        snowContainer.appendChild(flake);
    }

    // Легкий параллакс для стеклянной панели
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        document.querySelector('.glass-wrapper').style.transform = 
            `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
});
