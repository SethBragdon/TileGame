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

function copyArray(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

function remove(array, object){
    for(let i = 0; i < array.length; i++){
        if(array[i] == object){
            array.splice(i, 1);
        }
    }
}

function markNextMoves(){
    for(i = 0; i < nextMoves.length; i++){
        if(nextMoves[i][0] != null && nextMoves[i][1] != null && grid[nextMoves[i][1]][nextMoves[i][0]]){
            grid[nextMoves[i][1]][nextMoves[i][0]].color = 'white';
        }
    }
}

function runNextMoves(){
    for(i = 0; i < nextMoves.length; i++){
        if(nextMoves[i][0] != null && nextMoves[i][1] != null && grid[nextMoves[i][1]][nextMoves[i][0]]){
            player.xTile = nextMoves[i][0];
            player.yTile = nextMoves[i][1];
            grid[nextMoves[i][1]][nextMoves[i][0]].color = 'black';
        }
        nextMoves = [];
    }
}

function wipeNextMoves(){
    for(i = 0; i < nextMoves.length; i++){
        if(nextMoves[i][0] != null && nextMoves[i][1] != null && grid[nextMoves[i][1]][nextMoves[i][0]]){
            grid[nextMoves[i][1]][nextMoves[i][0]].color = 'black';
        }
        nextMoves = [];
    }
}

function oneForeward(xMultiplier, yMultiplier){
    if(grid[player.yTile + (1 * yMultiplier)][player.xTile + (1 * xMultiplier)] != null){
        wipeNextMoves();
        return [[player.xTile + (1 * xMultiplier), player.yTile + (1 * yMultiplier)]];
    }
    return nextMoves;
}