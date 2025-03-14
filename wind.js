class Wind {
    constructor() {
        this.angle = 0;
        this.strength = 0.5;
        this.time = 0;
    }

    update() {
        this.time += 0.01;
        this.angle = Math.sin(this.time) * 0.5;
        return {
            x: Math.cos(this.angle) * this.strength,
            y: Math.sin(this.angle) * this.strength
        };
    }

    setStrength(strength) {
        this.strength = strength / 100;
    }
}