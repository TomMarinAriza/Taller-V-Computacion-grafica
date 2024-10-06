let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// 1. Dibujar un rectángulo relleno
ctx.fillStyle = "lightblue";
ctx.fillRect(10, 10, 100, 50);

// 2. Dibujar texto en el canvas
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("Hola, Canvas!", 150, 40);

// 3. Crear un gradiente lineal
let gradient = ctx.createLinearGradient(10, 100, 110, 200);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "yellow");
ctx.fillStyle = gradient;
ctx.fillRect(10, 100, 100, 100);

// 4. Dibujar una imagen en el canvas
let image = new Image();
image.src = "https://via.placeholder.com/100"; // Imagen de ejemplo
image.onload = function() {
    ctx.drawImage(image, 150, 100); // Dibuja la imagen cuando se carga
};

// 5. Aplicar transformación (escalado y rotación)
ctx.save(); // Guarda el estado del canvas
ctx.translate(100, 350); // Traslada el contexto
ctx.rotate(Math.PI / 4); // Rotar 45 grados
ctx.fillStyle = "green";
ctx.fillRect(0, 0, 50, 50); // Rectángulo rotado
ctx.restore(); // Restaura el estado original del canvas

// 6. Dibujar un arco redondeado usando arcTo
ctx.beginPath();
ctx.moveTo(300, 10);
ctx.lineTo(400, 10);
ctx.arcTo(450, 10, 450, 60, 50); // Arco redondeado
ctx.lineTo(450, 110);
ctx.strokeStyle = "blue";
ctx.stroke();

// 7. Añadir sombra a una figura
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.fillStyle = "pink";
ctx.fillRect(300, 150, 100, 100); // Cuadro con sombra
