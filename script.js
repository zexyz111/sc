const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let w, h, flakes = [];

function init() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    flakes = [];
    for(let i = 0; i < 120; i++) {
        flakes.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2 + 0.5,
            v: Math.random() * 0.8 + 0.3
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.beginPath();
    for(let f of flakes) {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI*2);
        f.y += f.v;
        if(f.y > h) f.y = -10, f.x = Math.random()*w;
    }
    ctx.fill();
    requestAnimationFrame(draw);
}

window.onresize = init;
init(); draw();
