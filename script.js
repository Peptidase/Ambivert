//Made by arif from youtube tutorial

const canvas = document.getElementById("canvas");
console.log("Running!")
const ctx = canvas.getContext('2d');

ctx.canvas.width= window.innerWidth;
ctx.canvas.height= window.innerHeight;

let particleArray;


//Constructor
function Particle(x,y,directionX,directionY,size,color){
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}
//drawer

Particle.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    ctx.fillStyle = this.color;
    ctx.fill();
}
//Updter
Particle.prototype.update = function(){
    if(this.x + this.size > canvas.width || this.x - this.size < 0){
        this.directionX =-this.directionX;
    }
    if(this.y + this.size > canvas.height || this.y - this.directionY < 0){
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y = this.directionY;
    this.draw();
}

//create particle array
function init(){
    particleArray = [];
    for(let i=0; i<10; i++){
        let size = Math.random() *20;
        let x = Math.random * (innerWidth - size * 2);
        let y = Math.random * (innerHeight- size * 2)
        let directionX = (Math.random() * .4) -2;
        let directionY = (Math.random() * .4) -2;
        let color = 'rgb(255,255,255)';
        particleArray.push(new Particle(x,y,directionX,directionY,size,color));
        console.log("Particle!" + i + "Made");

    }
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, innerWidth,innerHeight);

    for (let i=0; i<particleArray.length;i++){
        particleArray[i].update();
        
       
    }
}

init();
animate();