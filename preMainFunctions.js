function nextLevel(reset = false){
    if(!reset){
        if((currentLevel + 1) < levels.length){
            currentLevel = parseNumberForward(currentLevel, levels.length);
        }
    }

    // Reset player
    player.xTile = levels[currentLevel].xStart;
    player.yTile = levels[currentLevel].yStart;
    player.image.src = 'Images\\RobotRight.svg';

    grid = levels[currentLevel].grid;
    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[y].length; x++){
            grid[y][x].reset();
        }
    }

    moveOptions = randomArrayFrom(moveBank, 3);
    moveIndex = 0;
    moveChoiceTextSprites = [
        new TextSprite(moveOptions[moveIndex].name, '32px', 700, 100, 'yellow'), 
        new TextSprite(moveOptions[1].name, '32px', 300, 100),
        new TextSprite(moveOptions[2].name, '32px', 1100, 100)];
    for(let i = 0; i < moveChoiceTextSprites.length; i++){
        textSprites.push(moveChoiceTextSprites[i]);
    }
    nextMoveFunction = moveOptions[moveIndex].move;
    
    // Adjusting position by accounting for grid dimensions
    // Has to be rounded to prevent weird graphics stuff
    gridOffsetX = Math.floor((canvas.width/2) - (grid[0].length * 25) - 10);
    gridOffsetY = Math.floor((canvas.height/2) - (grid.length * 25) - 10);
    
    timeStart = performance.now();
    timeLeft = timeLeft = 20000 - (performance.now() - timeStart);
    timer.width = timer.width = Math.floor(timeLeft* .02);
    timer.xPos = Math.floor((canvas.width/2) - 10 - (timer.width/2));
    timer.yPos = gridOffsetY + (grid.length * 50) + 50;
}

function updateRound(){
    // Check for level completion
    if(grid[player.yTile][player.xTile].type == 'launchpad'){
        nextLevel();
    }
}