let figure = document.getElementById("container")

let drawing = figure.getContext('2d')

drawing.beginPath()

drawing.strokeStyle = "black"
//Inicio rombo principal
drawing.moveTo(0,100)
drawing.lineTo(400,0)
drawing.lineTo(800,100)
drawing.lineTo(400,200)
drawing.lineTo(0,100)
//Inicio de rombo en el centro
drawing.moveTo(100,100)
drawing.lineTo(400,20)
drawing.lineTo(700,100)
drawing.lineTo(400,180)
drawing.lineTo(100,100)
//Inicio de la parte inferior izquierda
drawing.moveTo(0,100)
drawing.lineTo(0,400)
drawing.lineTo(400,500)
drawing.lineTo(800,400)
drawing.lineTo(800,100)
//Inicio linea de la mitad
drawing.moveTo(400,500)
drawing.lineTo(400,200)
drawing.moveTo(400,180)
drawing.lineTo(400,20)

drawing.stroke()

drawing.closePath()