function nextLevel(){
    if((currentLevel + 1) < levels.length){
        currentLevel = parseNumberForward(currentLevel, levels.length);
    }
    grid = levels[currentLevel].grid;
    player.xTile = levels[currentLevel].xStart;
    player.yTile = levels[currentLevel].yStart;

    moveOptions = randomArrayFrom(moveBank, 3);
    moveIndex = 0;
    moveChoiceTextSprites = [
        new TextSprite(moveOptions[moveIndex].name, '32px', 500, 100, 'yellow'), 
        new TextSprite(moveOptions[1].name, '32px', 100, 100),
        new TextSprite(moveOptions[2].name, '32px', 900, 100)];
    for(let i = 0; i < moveChoiceTextSprites.length; i++){
        textSprites.push(moveChoiceTextSprites[i]);
    }
}

function updateRound(){
    // Check for level completion
    if(grid[player.yTile][player.xTile].type == 'launchpad'){
        nextLevel();
    }
}