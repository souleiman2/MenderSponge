boxes = [new Box(0, 0, 0, 200)]

function setup(){
  createCanvas(500, 500, WEBGL);

}

function draw(){
  background(0);
  rotateY(frameCount * 0.02, [0,0,0]);
  rotateX(frameCount * 0.02, [0,0,0]);
  
  pointLight(250, 250, 250, 1, 1, 0);
  ambientMaterial(250);
  for (i = 0; i<boxes.length; i++){
    push();
    translate(boxes[i].pos.x, boxes[i].pos.y, boxes[i].pos.z);
    box(boxes[i].size);
    pop();
  }
  
}


function mousePressed(){
  temp = [];
  for (nombre = 0; nombre < boxes.length; nombre++){
    for (i = -1; i<=1; i++){
      for (j = -1; j<=1; j++){
        for (k = -1; k<=1; k++){
          if (Math.abs(i)+Math.abs(j)+Math.abs(k) > 1){
            dimension = boxes[nombre].size/3;
            temp.push(new Box(boxes[nombre].pos.x + dimension*i , boxes[nombre].pos.y + dimension*j , boxes[nombre].pos.z + dimension*k, dimension));
          }
        }
      }
    }
  }
  
  boxes = temp;
}

function Box(x, y, z, size){
  this.pos = new p5.Vector(x,y,z);
  this.size = size;
}
