var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// Rectangle
// c.fillStyle = "#FDCEDF";
// c.fillRect(0,0,90,90);
// c.fillStyle = "#F2BED1";
// c.fillRect(100,100,90,90);

// // Lines
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,50);
// c.lineTo(100, 300);
// c.strokeStyle = "rgba(255,0,0,0.5)";
// c.stroke();

// // arc circle
// c.beginPath()
// c.arc(300, 150, 100, 0, Math.PI*2, false)
// c.stroke()

// for(var count=0; count < 5; count++){
//     x_cor = Math.random() * innerWidth;
//     y_cor = Math.random() * innerHeight;
//     red = Math.random() * 255;
//     blue = Math.random() * 255;
//     green = Math.random() * 255; 
//     c.beginPath()
//     c.arc(x_cor, y_cor, 100, 0, Math.PI*2, false)
//     c.fillStyle = `rgba(${red},${blue},${green},0.5)`;
//     c.fill()
//     x_cor+=300;
// }

var mouse = {
    x : undefined,
    y : undefined
}


window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('touchmove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;

})

document.body.addEventListener("touchstart", function(e){ if (e.target.nodeName == 'CANVAS') { e.preventDefault(); } }, false);
document.body.addEventListener("touchend", function(e){ if (e.target.nodeName == 'CANVAS') { e.preventDefault(); } }, false);
document.body.addEventListener("touchmove", function(e){ if (e.target.nodeName == 'CANVAS') { e.preventDefault(); } }, false);

function changeColor(){
    red = Math.random() * 255;
    blue = Math.random() * 255;
    green = Math.random() * 255; 
    c.fillStyle = `rgba(${red},${blue},${green},0.5)`;
    c.fill();
}

var x_cor = 300;
var dx = Math.random() * 20;
var y_cor = 300;
var dy = Math.random() * 20;
var radius = 100;

function changePosition(){
    x_cor = Math.random() * innerWidth;
    y_cor = Math.random() * innerHeight;    
}

function changeVelocity(){
    if (x_cor+radius > canvas.width || y_cor+radius > canvas.height){
        dx = -Math.random() * 20;
        dy = -Math.random() * 20;
    }
    if ( x_cor-radius < 0 || y_cor-radius < 0){
        dx = +Math.random() * 20;
        dy = +Math.random() * 20;
    }
    
}

var red = Math.random() * 255;
var blue = Math.random() * 255;
var green = Math.random() * 255; 
c.fillStyle = `rgba(${red},${blue},${green},0.5)`;
c.fill();


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < ballArray.length; i++ ){
        c.beginPath();
        ballArray[i].display();
        ballArray[i].move();
    }
    
}



class Ball {
    constructor(x_cor, y_cor, dx, dy, radius) {
        this.x_cor = x_cor;
        this.y_cor = y_cor;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius
    }

    display(){      
        c.arc(this.x_cor,this.y_cor, this.radius, 0, Math.PI*2, false);
        c.fill();  
    }

    changeColor(){
        var red = Math.random() * width;
        var blue = Math.random() * 255;
        var green = Math.random() * 255; 
        c.fillStyle = `rgba(${red},${blue},${green},0.5)`;
        c.fill();
    }

    move(){
        if (this.x_cor+this.radius > canvas.width || this.x_cor-this.radius < 0){
        this.dx = -this.dx;
    }
    if (this.y_cor+this.radius > canvas.height || this.y_cor-this.radius < 0){
        this.dy = -this.dy;
    }
    this.x_cor +=this.dx;
    this.y_cor +=this.dy;
    
    if (mouse.x - this.x_cor < 100 && mouse.x - this.x_cor > -100 && mouse.y - this.y_cor < 100 && mouse.y - this.y_cor > -100){
        if(this.radius < 200){
            this.radius += 1;
        }
    }
    else if (this.radius > 10){
        this.radius -=1;
    }
    }
}



var ballArray = [];

for(var i = 0; i < 100; i++){
    var radius = 100;
    var x_cor = Math.random() * (canvas.width-(radius*2)) + radius;
    var dx = Math.random() * 3;
    var y_cor = Math.random() * (canvas.height-(radius*2)) + radius;
    var dy = Math.random() * 3;
    ballArray.push(new Ball(x_cor, y_cor, dx, dy, radius));
}


animate();
