let canvas = document.getElementById("square");
let ctx = canvas.getContext('2d');

// Triángulo
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(100, 200); 
ctx.lineTo(0, 200);   
ctx.closePath();
ctx.strokeStyle = "blue";
ctx.stroke(); 

// Rectángulo
ctx.strokeStyle = "red";
ctx.strokeRect(150, 50, 100, 50); 

// Trapecio
ctx.beginPath();
ctx.moveTo(300, 100); 
ctx.lineTo(400, 100);  
ctx.lineTo(370, 200); 
ctx.lineTo(330, 200); 
ctx.closePath();
ctx.strokeStyle = "green";
ctx.stroke();

// Hexágono
let centerX = 100;
let centerY = 350;
let size = 50;
let numberOfSides = 6;
let angleStep = (2 * Math.PI) / numberOfSides;

ctx.beginPath();
for (let i = 0; i <= numberOfSides; i++) {
    let x = centerX + size * Math.cos(i * angleStep);
    let y = centerY + size * Math.sin(i * angleStep);
    if (i === 0) {
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
    }
}
ctx.closePath();
ctx.strokeStyle = "purple";
ctx.stroke();
