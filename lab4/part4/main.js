// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
// The ball class is defined here.
class Ball extends Shape{
   constructor(x, y, velX, velY, color, size) {
      super(Shape)
      this.color = color;
      this.size = size;
      this.exists=true
   }
   // The draw method is defined here
   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }
   // The update method is defined here
   update() {
    if (this.y + this.size >= height)
      this.velY = -(this.velY)
    if (this.y - this.size <= 0)
      this.velY = -(this.velY)
    if (this.x + this.size >= width)
      this.velX = -(this.velX)
    if (this.x - this.size <= 0)
      this.velX = -(this.velX)    

    this.y += this.velY
    this.x += this.velX
  }

  // This method detects whether the ball collides 

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

class EvilCircle extends Shape{
    constructor(x,y){
        super(x,y,20,20)
        this.color="white"
        this.size=10

        window.addEventListener('keydown',(e)=>{
            switch(e.key){
                case 'a':
                    this.x-=this.velX;
                    break;
                case 'd':
                    this.x+=this.velX;
                    break
                case 'w':
                    this.y-=this.velY;
                    break;
                case 's':
                    this.y+=this.velY;
                    break
            }
        })
    }
}
class Shape{
    constructor(x,y,velX,velY){
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY
    }
}
// This stores the balls 
const balls = [];
// The while loop makes sure there is always less than 25 balls
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  
    requestAnimationFrame(loop);
  }
  // This initiates the animation
  loop();