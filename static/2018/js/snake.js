var scl = 20;
var walls = true;
var collisions = true;
var framerate = 10;
function setup() {
    canvas = createCanvas(1200, 500);
    canvas.parent('sketch');
    frameRate(framerate);
    snake = new Snake();
    food = new Food();
    snake.reset();
    food.NewLocation(snake.body)



}
function draw() {

    background(50);
    snake.update();
    snake.display();
    food.Display();
    if (snake.ate(food)) {
        snake.length+=snake.increasesize;
        document.getElementById('score').innerHTML = "score: " + snake.length;
        food.NewLocation(snake.body);
    }
    if (snake.isdead()) {
        snake.reset();
    }

}

function Snake() {
    this.dir = function(x, y) {
        this.xdir = x;
        this.ydir = y;
    }
    this.reset = function() {
        this.x = scl; //the head
        this.y = scl; //the head
        this.xdir = 0;
        this.ydir = 0;
        this.length = 1;
        this.body = [[this.x,this.y]];
        this.increasesize = 10;
        this.hasreset = true;
        food.NewLocation(this.body);
    }
    this.ate = function(food) {
        var distance = dist(this.x, this.y, food.x, food.y);
        if (distance < 1) {
            return true;
        }
        return false;
    }
    this.handlewalls = function() {
        if (!walls) {
            if (this.x > width-scl) { this.x = 0; }
            else if (this.x < 0) { this.x = width-scl; }
            if (this.y > height-scl) { this.y = 0; }
            else if (this.y < 0) { this.y = height-scl; }
        }
    }
    this.update = function() {
        if (this.length <= this.body.length) {
            this.body.pop(); //remove tail

        }
        this.x = this.x + this.xdir * scl; //change x
        this.y = this.y + this.ydir * scl; //change y
        this.handlewalls();

        this.body.splice(0, 0,[this.x,this.y]);
    }
    this.display = function() {
        fill(255);
        for (var i = 0; i < this.body.length; i++) {
            rect(this.body[i][0],this.body[i][1],scl,scl);

        }

    }

    this.isdead = function() {
        if (((this.x > width-scl || this.x < 0) || (this.y > height-scl || this.y < 0)) && walls) {
            return true

        }
        for (var i = 1; i < this.body.length; i++) {
            if ((dist(this.x, this.y, this.body[i][0], this.body[i][1]) < 1) && collisions) {
                return true
            }
        }

        return false
    }

}

function keyPressed() {
    //if they press a key, and the snake is not heading opposite direction or the snake is only 1 long
    if (snake.hasreset==true) {
        snake.hasreset=false;
        document.getElementById('score').innerHTML = "score: 1";
    }
    if ((keyCode == UP_ARROW || keyCode == 87) && ( snake.ydir != 1 || snake.length == 1)) {
        snake.dir(0,-1);
    } else if ((keyCode == DOWN_ARROW || keyCode == 83) && (snake.ydir != -1 || snake.length == 1)) {
        snake.dir(0,1);
    } else if ((keyCode == LEFT_ARROW || keyCode == 65) && (snake.xdir != 1 || snake.length == 1)) {
        snake.dir(-1, 0);
    } else if ((keyCode == RIGHT_ARROW || keyCode == 68) && (snake.xdir != -1 || snake.length == 1)) {
        snake.dir(1, 0);
    }
}
function Food() {
        this.x = 0;
        this.y = 0;
        this.NewLocation = function(snake) {
            while (true) {
                var value1 = floor(random(width/scl)) * scl;
                var value2 = floor(random(height/scl)) * scl;
                if (snake.body.indexOf([value1,value2]) < 0) {
                    break;
                }
            }
            this.x = value1;
            this.y = value2;
        }
        this.Display = function() {
            fill(255,0,100);
            rect(this.x, this.y, scl,scl);
        }
}
