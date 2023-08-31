var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 800;

var player = new Player(60, 100, 100, 200);

function keydown_event(event){
    if (event.keyCode == 39 || event.keyCode == 68){ // right arrow or d
        player.apply_friction = false;
        player.vel = 2;
    }
    if (event.keyCode == 37 || event.keyCode == 65){ // left arrow or a
        player.apply_friction = false;
        player.vel = -2;
    }
}

function keyup_event(event){
    if (event.keyCode == 39 || event.keyCode == 68){ // right arrow or d
        player.apply_friction = true;
    }
    if (event.keyCode == 37 || event.keyCode == 65){ // left arrow or a
        player.apply_friction = true;
    }
}


window.addEventListener("keydown", keydown_event);
window.addEventListener("keyup", keyup_event);

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    player.update();
    ctx.drawImage(player.img, player.x, player.y, player.width, player.height);
    ctx.drawImage(ground_large, 100, 100, 200, 50); //originally 400 by 100
    requestAnimationFrame(animate);
}

animate();