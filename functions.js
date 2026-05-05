function getSign(number){
    if(number == 0){
        return 0;
    }
    return number/Math.abs(number);
}

function rectangularCollision(sprite1, sprite2){
    return sprite1.xPos < sprite2.xPos + sprite2.width &&
    sprite1.xPos + sprite1.width > sprite2.xPos &&
    sprite1.yPos < sprite2.yPos + sprite2.height &&
    sprite1.yPos + sprite1.height > sprite2.yPos;
}

// ARRAY METHODS
function copyArray(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

function parseNumberForward(number, limit){
    number++;
    if(number >= limit){
        number = 0;
    }
    return number;
}
function parseNumberBackward(number, limit){
    number--;
    if(number < 0){
        number = limit - 1;
    }
    return number;

}

function remove(array, object){
    for(let i = 0; i < array.length; i++){
        if(array[i] == object){
            array.splice(i, 1);
        }
    }
}

function randomArrayFrom(array, limit){
    let outputArray = [];
    for(let i = 0; i < limit; i++){
        outputArray.push(array[Math.floor(Math.random() * array.length)]);
    }
    return outputArray;
}

// MOVE PROCESSING METHODS
function markNextMoves(){
    for(i = 0; i < nextMoves.length; i++){
        if(nextMoves[i][0] != null && nextMoves[i][1] != null && grid[nextMoves[i][1]][nextMoves[i][0]]){
            grid[nextMoves[i][1]][nextMoves[i][0]].color = 'white';
        }
    }
}

function runNextMove(){
    if(nextMoves[0][0] != null && nextMoves[0][1] != null && grid[nextMoves[0][1]][nextMoves[0][0]]){
        player.xTile = nextMoves[0][0];
        player.yTile = nextMoves[0][1];
        grid[nextMoves[0][1]][nextMoves[0][0]].reset();
        nextMoves.splice(0, 1);
    }
}

function wipeNextMoves(){
    for(i = 0; i < nextMoves.length; i++){
        if(nextMoves[i][0] != null && nextMoves[i][1] != null){
            grid[nextMoves[i][1]][nextMoves[i][0]].reset();
        }
    }
    nextMoves = [];
}

function clearMarks(){
    for(i = 0; i < nextMoves.length; i++){
        if(nextMoves[i][0] != null && nextMoves[i][1] != null){
            grid[nextMoves[i][1]][nextMoves[i][0]].reset();
        }
    }
}


// MOVEMENT OPTIONS
function oneForeward(xMultiplier, yMultiplier){
    if(grid[player.yTile + (1 * yMultiplier)][player.xTile + (1 * xMultiplier)] != null
    && grid[player.yTile + (1 * yMultiplier)][player.xTile + (1 * xMultiplier)].traversable){
        wipeNextMoves();
        return [[player.xTile + (1 * xMultiplier), player.yTile + (1 * yMultiplier)]];
    }
    return nextMoves;
}

function oneDiagonal(xMultiplier, yMultiplier){
    if(Math.abs(xMultiplier) > 0 &&
    grid[player.yTile + (-1 * xMultiplier)][player.xTile + (1 * xMultiplier)] != null
    && grid[player.yTile + (-1 * xMultiplier)][player.xTile + (1 * xMultiplier)].traversable){
        wipeNextMoves();
        return [[player.xTile + (1 * xMultiplier), player.yTile + (-1 * xMultiplier)]];
    } else if(Math.abs(yMultiplier) > 0 &&
    grid[player.yTile + (1 * yMultiplier)][player.xTile + (1 * yMultiplier)] != null
    && grid[player.yTile + (1 * yMultiplier)][player.xTile + (1 * yMultiplier)].traversable){
        wipeNextMoves();
        return [[player.xTile + (1 * yMultiplier), player.yTile + (1 * yMultiplier)]];
    }
    return nextMoves;
}

function twoForewardTele(xMultiplier, yMultiplier){
    if(grid[player.yTile + (2 * yMultiplier)][player.xTile + (2 * xMultiplier)] != null
    && grid[player.yTile + (2 * yMultiplier)][player.xTile + (2 * xMultiplier)].traversable){
        wipeNextMoves();
        return [[player.xTile + (2 * xMultiplier), player.yTile + (2 * yMultiplier)]];
    }
    return nextMoves;
}

function tripleForeward(xMultiplier, yMultiplier){
    let moveSet = [];
    for(let i = 1; i <= 3; i++){
        if(grid[player.yTile + (i * yMultiplier)] != null && grid[player.yTile + (i * yMultiplier)][player.xTile + (i * xMultiplier)] != null
        && grid[player.yTile + (i * yMultiplier)][player.xTile + (i * xMultiplier)].traversable){
            moveSet.push([player.xTile + (i * xMultiplier), player.yTile + (i * yMultiplier)]);
        } else {
            break;
        }
    }
    if(moveSet != []){
        wipeNextMoves();
        return moveSet;
    }
    alert('miss');
    return nextMoves;
}

// TILE FUNCTIONS
function GrassTile(xTile, yTile){
    if((xTile + yTile) % 2 == 0){
        return new Tile(xTile, yTile, 'rgb(6, 117, 69)', true, 'grass', 'nuetral', grass1TileImageOptions[Math.floor(Math.random()*grass1TileImageOptions.length)]);
    }
    return new Tile(xTile, yTile, 'rgb(9, 146, 87)', true, 'grass', 'nuetral', grass2TileImageOptions[Math.floor(Math.random()*grass2TileImageOptions.length)]);
}

function RockTile(xTile, yTile){
    if((xTile + yTile) % 2 == 0){
        return new Tile(xTile, yTile, 'rgb(149, 97, 59)', false, 'rock', 'nuetral', 'Images\\Tiles\\Rock Tile2.svg');
    }
    return new Tile(xTile, yTile, 'rgb(192, 123, 62)', false, 'rock', 'nuetral', 'Images\\Tiles\\Rock Tile.svg');
}

function LavaTile(xTile, yTile){
    if((xTile + yTile) % 2 == 0){
        return new Tile(xTile, yTile, 'rgb(205, 12, 12)', true, 'lava');
    }
    return new Tile(xTile, yTile, 'rgb(230, 20, 20)', true, 'lava');
}

function LaunchPad(xTile, yTile){
    return new Tile(xTile, yTile, 'rgb(52, 224, 243)', true, 'launchpad');
}