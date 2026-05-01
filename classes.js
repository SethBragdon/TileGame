// Set up canvas
const canvas = document.getElementById('main');
canvas.width = window.innerWidth -20;
canvas.height = window.innerHeight -21;
const c = canvas.getContext('2d');
c.fillStyle = 'black';
c.fillRect(0, 0, canvas.width, canvas.height);

// Set game variables
let deltaTime = 0;
let lastTimeStamp = performance.now()/1000;

let gridOffsetX = 200;
let gridOffsetY = 200;

let nextMoves = [];
let nextMoveFunction;
let runningNextMoves = false;
let wipedNextMoves = false;

// SPRITE CLASS
class Sprite {
    constructor(xPos, yPos, width, height, xSpeed = 0, ySpeed = 0, color = 'red', image = null){
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.color = color;
        this.orgColor = color;
        this.image = image;

        if(this.image != null){
            this.image = document.createElement('img');
            this.image.width = this.width;
            this.image.height = this.height;
            this.image.src = image;
        }
    }

    draw(){
        c.fillStyle = this.color;
        if(this.image == null){
            c.fillRect(this.xPos, this.yPos, this.width, this.height);
        } else {
            c.drawImage(this.image, this.xPos, this.yPos, this.width, this.height);
        }
    }

    update(){
        this.xPos += this.xSpeed * deltaTime;
        this.yPos += this.ySpeed * deltaTime;
        this.draw();
    }
}

// MAPBOUND SPRITE CLASS
class MapboundSprite extends Sprite {
    constructor(xTile, yTile, width, height, xSpeed = 0, ySpeed = 0, color = 'red', image = null){
        super(xTile * 50 + gridOffsetX, yTile * 50 + gridOffsetY, width, height, xSpeed, ySpeed, color, image);
        this.xTile = xTile;
        this.yTile = yTile;
    }

    update(){
        this.draw();
        this.xPos = this.xTile * 50 + gridOffsetX;
        this.yPos = this.yTile * 50 + gridOffsetY;
    }
}

// TILE CLASS
class Tile {
    constructor(xTile = null, yTile = null, color = 'black', traversable = true, type = 'grass', state = 'nuetral'){
        this.xTile = xTile;
        this.yTile = yTile;
        this.color = color;
        this.orgColor = color;
        this.traversable = traversable;
        this.type = type;
        this.state = state;
    }

    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.xTile * 50 + gridOffsetX, this.yTile * 50 + gridOffsetY, 50, 50);
    }

    reset(){
        this.color = this.orgColor;
    }
}

// TEXT CLASS
class TextSprite
{
    constructor(text, size, posX, posY, color = 'white')
    {
        this.text = text;
        this.size = size;
        this.posX = posX;
        this.posY = posY;
        this.color = color;

        // Used for reseting position
        this.originX = posX;
        this.originY = posY;
    }
    
    draw()
    {
        c.fillStyle = this.color;
        c.font = this.size + ' Arial';
        c.fillText(this.text, this.posX, this.posY);
    }

    resetText()
    {
        this.posX = this.originX;
        this.posY = this.originY;
    }
}

// MOVE OPTION CLASS
class MoveOption{
    constructor(move, name){
        this.move = move;
        this.name = name;
    }
}

// LEVEL CLASS
class Level{
    constructor(grid, xStart, yStart){
        this.grid = grid;
        this.xStart = xStart;
        this.yStart = yStart;
    }
}