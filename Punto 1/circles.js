let figure = document.getElementById("border")

let drawing = figure.getContext('2d')

function drawCircle (positionX, positionY, color )
{
    drawing.beginPath()

    drawing.strokeStyle = color
    drawing.arc(positionX,positionY,150,0,2*Math.PI)

    drawing.stroke()
    drawing.closePath()
}


drawCircle(150,150,"green")
drawCircle(350,150,"blue")
drawCircle(250,350,"red")
