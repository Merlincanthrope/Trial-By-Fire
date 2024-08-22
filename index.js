var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 1475;
canvas.height = 690;

const floorY = 450;

class Player {
  constructor({ width, height, id }) {
    this.position = {
      x: 500,
      y: 300,
    };
    this.velocity = {
      x: 0,
      y: 0,
    }
    this.height = height;
    this.width = width;
    this.id = id;
    this.color = "blue";
    this.gravity = 1;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  checkCollisionY() {
    if (
      this.position.y + this.height >= floorY &&
      this.gravity > 0
    ) {
      this.position.y = floorY - this.height - 0.1;
      this.gravity = 0;
      this.velocity.y = 0;
    }
  }

  jump() {
    if (key.w.pressed && player.velocity.y === 0) {
        player.velocity.y = -50
    }
  }
}

var key = {
  w: {pressed: false},
};

var player = new Player({ width: 60, height: 100, id: "plyr1" });
console.log("Player has successfully been created with stats:");
console.log("width: " + player.width);
console.log("height: " + player.height);
console.log("id: " + player.id);

function animate() {
  // request an animation frame of itself everytime it's run in order to create a main loop
  window.requestAnimationFrame(animate);
  // clear all drawn objects from previous frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.checkCollisionY();

  // apply gravity (Make into a function later)
  player.gravity++;
  player.velocity.y += player.gravity;
  player.position.y += player.velocity.y;
  player.draw();
}

// run main loop
animate();