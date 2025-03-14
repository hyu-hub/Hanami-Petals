const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const petals = [];
let mouseX = 0;
let mouseY = 0;

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create initial petals
    for (let i = 0; i < 100; i++) {
        petals.push(new Petal(
            Math.random() * canvas.width,
            Math.random() * canvas.height
        ));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each petal
    petals.forEach(petal => {
        petal.update(mouseX, mouseY);
        petal.draw(ctx);
    });

    requestAnimationFrame(animate);
}

// Event listeners
window.addEventListener('resize', init);
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Start the simulation
init();
animate();

// Add control handlers
document.getElementById('petalCount').addEventListener('input', (e) => {
    const newCount = parseInt(e.target.value);
    while (petals.length > newCount) {
        petals.pop();
    }
    while (petals.length < newCount) {
        petals.push(new Petal(Math.random() * canvas.width, Math.random() * canvas.height));
    }
});

document.getElementById('petalSize').addEventListener('input', (e) => {
    const size = parseInt(e.target.value);
    petals.forEach(petal => {
        petal.baseSize = size;
    });
});

document.getElementById('petalSpeed').addEventListener('input', (e) => {
    const speed = parseInt(e.target.value) / 5;
    petals.forEach(petal => {
        petal.speedMultiplier = speed;
    });
});