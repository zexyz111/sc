const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

let w, h, particles = [];

function init() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    particles = [];
    for(let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2 + 1,
            d: Math.random() * 1,
            o: Math.random() * 0.5 + 0.2
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    for(let p of particles) {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        p.y += Math.cos(p.d) + 1 + p.r/2;
        p.x += Math.sin(p.d) * 1;
        if(p.y > h) p.y = -10, p.x = Math.random()*w;
    }
    ctx.fill();
    requestAnimationFrame(draw);
}

window.onresize = init;
init();
draw();
