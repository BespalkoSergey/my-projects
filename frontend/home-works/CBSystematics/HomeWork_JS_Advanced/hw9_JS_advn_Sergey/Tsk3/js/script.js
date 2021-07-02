function createDiagramm(canvas, data, height, color) {
  if (typeof canvas == "string") canvas = document.querySelector(canvas);
  let width = 0;
  data.forEach((element) => {
    width += element;
  });
  canvas.width = width;
  canvas.height = height;
  let context = canvas.getContext("2d");

  var max = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < data.length; i++) {
    if (max < data[i]) max = data[i];
  }

  context.beginPath();
  context.moveTo(0, max);
  let temp = 0;
  for (let i = 0; i < data.length; i++) {
    temp += data[i];
    context.lineTo(temp, max - data[i]);
  }

  context.lineWidth = 8;
  context.strokeStyle = color;
  context.lineJoin = "round";
  context.stroke();

  
  context.lineWidth = 2; 
  context.beginPath(); 
  context.moveTo(0,0); 
  context.lineTo(0,max); 
  context.lineTo(width,max); 
  context.stroke();

  context.lineWidth = 2; 
  context.beginPath(); 
  context.moveTo(0,0); 
  context.lineTo(5,20); 
  context.stroke();

  context.lineWidth = 2; 
  context.beginPath(); 
  context.moveTo(width,max); 
  context.lineTo(width - 20,max - 5); 
  context.stroke();
 

}


window.addEventListener("load", function () {
  createDiagramm("canvas", [30, 6, 88, 91, 2, 45, 100, 150, 250], 400, "red");
});
