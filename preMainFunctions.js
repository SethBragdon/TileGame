function nextLevel(reset = false){
    if(!reset){
        if((currentLevel + 1) < levels.length){
            currentLevel = parseNumberForward(currentLevel, levels.length);
        }
    }
    player.xTile = levels[currentLevel].xStart;
    player.yTile = levels[currentLevel].yStart;

    grid = levels[currentLevel].grid;
    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[y].length; x++){
            grid[y][x].reset();
        }
    }

    moveOptions = randomArrayFrom(moveBank, 3);
    moveIndex = 0;
    moveChoiceTextSprites = [
        new TextSprite(moveOptions[moveIndex].name, '32px', 500, 100, 'yellow'), 
        new TextSprite(moveOptions[1].name, '32px', 100, 100),
        new TextSprite(moveOptions[2].name, '32px', 900, 100)];
    for(let i = 0; i < moveChoiceTextSprites.length; i++){
        textSprites.push(moveChoiceTextSprites[i]);
    }
    nextMoveFunction = moveOptions[moveIndex].move;
    
    gridOffsetX = (canvas.width/2) - (grid[0].length * 25);
}

function updateRound(){
    // Check for level completion
    if(grid[player.yTile][player.xTile].type == 'launchpad'){
        nextLevel();
    }
}