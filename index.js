const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1080;
canvas.height = 920;

const floorY = 700;

class Player {
    constructor(position, width, height, id) {
        this.position = position,
        this.height = height,
        this.width = width,
        this.id = id
    }

    draw() {
        if (this.position.y >= 0 && this.position.y <= floorY) {
            ctx.fillStyle = "blue";
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }
}

Player.draw();