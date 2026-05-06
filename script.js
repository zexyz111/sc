const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

let width, height, snowflakes;

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    snowflakes = [];
    for (let i = 0; i < 150; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.5,
            speed: Math.random() * 1 + 0.5,
            wind: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    
    snowflakes.forEach(f => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        
        // Движение
        f.y += f.speed;
        f.x += f.wind;
        
        // Респаун снежинки, если улетела
        if (f.y > height) {
            f.y = -10;
            f.x = Math.random() * width;
        }
    });
    
    ctx.fill();
    requestAnimationFrame(draw);
}

// Следим за размером окна
window.addEventListener('resize', init);

init();
draw();

// Небольшой пасхалка: при клике сайт чуть-чуть "лагает" (глитч)
document.addEventListener('mousedown', () => {
    const container = document.querySelector('.iframe-container');
    container.style.filter = 'hue-rotate(320deg) brightness(1.5) contrast(2)';
    setTimeout(() => {
        container.style.filter = 'hue-rotate(265deg) saturate(1.3) brightness(0.8)';
    }, 100);
});
