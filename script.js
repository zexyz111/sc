const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

let width, height, snowflakes;

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    snowflakes = [];
    for (let i = 0; i < 120; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 2 + 0.5,
            d: Math.random() * 1, // плотность/скорость
            o: Math.random() * 0.5 + 0.3
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let f = snowflakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        
        f.y += Math.cos(f.d) + 1 + f.r / 2;
        f.x += Math.sin(f.d) * 1;

        if (f.y > height) {
            snowflakes[i] = { x: Math.random() * width, y: -10, r: f.r, d: f.d, o: f.o };
        }
    }
    ctx.fill();
    requestAnimationFrame(draw);
}

window.addEventListener('resize', init);
init();
draw();
