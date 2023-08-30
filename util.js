
var canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d");


function loadImage(path){
    img = new Image();
    img.src = path;
    img.onload = function(){
        ctx.drawImage(walk1, x, y, 60, 100);
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    return img;
}



