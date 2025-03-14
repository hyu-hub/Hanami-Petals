class Petal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseSize = 10;
        this.speedMultiplier = 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 + 1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.5 + 0.5;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#FFB7C5';
        ctx.ellipse(0, 0, this.baseSize, this.baseSize / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    update(mouseX, mouseY) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
            const angle = Math.atan2(dy, dx);
            this.speedX -= Math.cos(angle) * 0.1;
            this.speedY -= Math.sin(angle) * 0.1;
        }

        this.x += this.speedX * this.speedMultiplier;
        this.y += this.speedY * this.speedMultiplier;
        this.rotation += this.rotationSpeed * this.speedMultiplier;

        if (this.y > window.innerHeight) {
            this.y = -10;
            this.x = Math.random() * window.innerWidth;
        }
    }
}