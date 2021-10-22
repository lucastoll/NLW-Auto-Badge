    var looper;
    var graus=0;

    function rotate(){
      document.querySelector("#rocketseat").style.transform = `rotate(${graus}deg)`
      graus++;
      looper = setTimeout(rotate, 20);
    }

    setTimeout(rotate, 60);


/* let rotation = 0;
function rotateImg() {
  rotation += 90; // add 90 degrees, you can change this as you want
  if (rotation === 360) { 
    // 360 means rotate back to 0
    rotation = 0;
  }
  document.querySelector("#rocketseat").style.transform = `rotate(${rotation}deg)`;
} */