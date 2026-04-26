// DEFAULT NEXT MOVE FUNCTION
nextMoveFunction = moveOptions[moveIndex].move;

// MAIN LOOP
function mainLoop(){
    // Calculate delta time
    deltaTime = performance.now()/1000 - lastTimeStamp;
    lastTimeStamp = performance.now()/1000;

    // Draw the background
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = '#1c1124';
    c.fillRect(0, 0, canvas.width, canvas.height);

    //Update tiles
    markNextMoves();

    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[y].length; x++){
            if(grid[y][x] != null){
                grid[y][x].draw();
            }
        }
    }

    // Update player
    player.update();

    // Update text
    for(let i = 0; i < textSprites.length; i++){
        textSprites[i].draw();
    }

    window.requestAnimationFrame(mainLoop);
}

mainLoop();

// CONTROLS
// Keydown
window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'ArrowRight':
            nextMoves = nextMoveFunction(1, 0);
            markNextMoves();
            break;
        case 'ArrowLeft':
            nextMoves = nextMoveFunction(-1, 0);
            markNextMoves();
            break;
        case 'ArrowUp':
            nextMoves = nextMoveFunction(0, -1);
            markNextMoves();
            break;
        case 'ArrowDown':
            nextMoves = nextMoveFunction(0, 1);
            markNextMoves();
            break;
        case 'Enter':
            if(nextMoves.length > 0){
                runNextMoves();

                // Get rid of the current move
                moveChoiceTextSprites.splice(moveIndex, 1);
                textSprites = moveChoiceTextSprites;
                moveOptions.splice(moveIndex, 1);

                // If moves are empty restore move options
                if(moveOptions.length <= 0){
                    alert('got here');
                    moveOptions = randomArrayFrom(moveBank);
                    moveChoiceTextSprites = [
                    new TextSprite(moveOptions[moveIndex].name, '32px', 500, 100, 'yellow'), 
                    new TextSprite(moveOptions[1].name, '32px', 100, 100),
                    new TextSprite(moveOptions[2].name, '32px', 900, 100)];
                    for(let i = 0; i < moveChoiceTextSprites.length; i++){
                        textSprites.push(moveChoiceTextSprites[i]);
                    }
                }

                moveIndex = 0;
                moveChoiceTextSprites[moveIndex].color = 'yellow';
            } else {
                runNextMoves();
            }
            nextMoveFunction = moveOptions[moveIndex].move;
            break;
        case 'd':
            moveChoiceTextSprites[moveIndex].color = 'white';
            moveIndex = parseNumberBackward(moveIndex, moveOptions.length);
            nextMoveFunction = moveOptions[moveIndex].move;
            moveChoiceTextSprites[moveIndex].color = 'yellow';
            break;
        case 'a':
            moveChoiceTextSprites[moveIndex].color = 'white';
            moveIndex = parseNumberForward(moveIndex, moveOptions.length);
            nextMoveFunction = moveOptions[moveIndex].move;
            moveChoiceTextSprites[moveIndex].color = 'yellow';
            break;
    }
});

// Keyup
window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'ArrowRight':
            player.xSpeed = 0;
            break;
        case 'ArrowLeft':
            player.xSpeed = 0;
            break;
        case 'ArrowUp':
            player.ySpeed = 0;
            break;
        case 'ArrowDown':
            player.ySpeed = 0;
            break;
    }
});