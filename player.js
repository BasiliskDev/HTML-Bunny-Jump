

class Player{
    constructor(width, height, x, y){
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.img = idle_arr[0];
        
        this.idle_tick = 0;
        this.walk_tick = 0;
        this.img_idx = 0;
        this.buffer_tick = 0;
        this.vel = 0;
        this.friction = 0.02;
        this.dir = -1;

        this.apply_friction = false;


    }
    animate_player(){
        var walking = true;
        if (this.vel != 0){
            walking = true;
        }
        else{
            walking = false;
        }
        if (walking){
            this.idle_tick = 0;
            
            if (this.vel < 0){
                this.img = walk_arr[1][this.img_idx]
            }
            else{
                this.img = walk_arr[0][this.img_idx]
            }
            if (this.walk_tick%15 == 0){
                this.img_idx += 1;
                if (this.img_idx == walk_arr.length){
                    this.img_idx = 0;
                }
            }
            this.walk_tick += 1;
        }
        else{
            this.walk_tick = 0;
            this.img = idle_arr[this.img_idx]

            if (this.idle_tick%30 == 0){
                this.img_idx += 1;
                if (this.img_idx == idle_arr.length){
                    this.img_idx = 0;
                }
            }
            this.idle_tick += 1;
        }

    }
    update(){
        this.animate_player();
        if (this.apply_friction){
            this.vel = this.vel - (this.vel*this.friction);    
        }
        
        if (Math.abs(this.vel) < 0.2){
            this.vel = 0;
        }
        this.x += this.vel; 
    }
}



