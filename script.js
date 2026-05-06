// Ждем, пока вся страница загрузится
document.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.background');

    // Эффект движения фона за мышкой (параллакс)
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Слегка двигаем градиент в зависимости от положения курсора
        bg.style.transform = `translate(-${x * 20}px, -${y * 20}px) scale(1.1)`;
    });

    // Функция для создания случайного "глитча" (мерцания)
    setInterval(() => {
        if (Math.random() > 0.95) { // Шанс 5%, что сработает глитч
            bg.style.filter = 'hue-rotate(90deg) brightness(1.2)';
            setTimeout(() => {
                bg.style.filter = 'none';
            }, 100);
        }
    }, 200);

    console.log("Visuals initialized in Lane style...");
});
