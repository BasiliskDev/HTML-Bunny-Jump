var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 800;


var x = 0;
var y = 100;
var walk_tick = 0;
var idle_tick = 0;
var curr_img = 0;
var walking = false;
var dir = 1;

function keydown_event(event){
    if (event.keyCode == 39 || event.keyCode == 68){ // right arrow or d
        walking = true;
        dir = 1;
    }
    if (event.keyCode == 37 || event.keyCode == 65){ // left arrow or a
        walking = true;
        dir = -1;
    }
}

function keyup_event(event){
    if (event.keyCode == 39 || event.keyCode == 68){ // right arrow or d
        walking = false;
    }
    if (event.keyCode == 37 || event.keyCode == 65){ // left arrow or a
        walking = false;
    }
}


window.addEventListener("keydown", keydown_event);
window.addEventListener("keyup", keyup_event);

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    if (walking){
        if (dir == -1){
            ctx.drawImage(walk_arr[1][curr_img], x, y, 60, 100)
        }
        else{
            ctx.drawImage(walk_arr[0][curr_img], x, y, 60, 100)
        }
        x += 2 * dir;
        if (walk_tick%15 == 0){
            curr_img += 1;
            if (curr_img == walk_arr.length){
                curr_img = 0;
            }
        }
        if (x >= canvas.width - 60){
            x = 0;
        }
        walk_tick += 1;
    }
    else{
        
        ctx.drawImage(idle_arr[curr_img], x, y, 60, 100)
        if (idle_tick%30 == 0){
            curr_img += 1;
            if (curr_img == idle_arr.length){
                curr_img = 0;
            }
        }
        idle_tick += 1;
    }
}

animate();