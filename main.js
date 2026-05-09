// DEFAULT NEXT MOVE FUNCTION
nextMoveFunction = moveOptions[moveIndex].move;

nextLevel(true);

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

    if(runningNextMoves && nextMoves != []){
        runNextMove();
        if(grid[player.yTile][player.xTile].type == 'lava'){
            nextLevel(true);
        } else if(nextMoves.length <= 0){
            updateRound();
        }
    }

    // Update sprites
    for(let i = 0; i < sprites.length; i++){
        sprites[i].update();
    }

    // Update timer
    if(timeLeft > 0){
        timeLeft = 20000 - (performance.now() - timeStart);
        timer.width = Math.floor(timeLeft* .02);
        if(timeLeft < 5000){
            timer.color = 'red';
        } else {
            timer.color = 'green';
        }
    } else {
        nextLevel(true);
        runNextMoves = false;
        nextMoves = [];
    }

    // Update text
    for(let i = 0; i < moveChoiceTextSprites.length; i++){
        moveChoiceTextSprites[i].draw();
    }

    window.requestAnimationFrame(mainLoop);
}

mainLoop();

// CONTROLS
// Keydown
window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'ArrowRight':
            wipeNextMoves();
            nextMoves = nextMoveFunction(1, 0);
            markNextMoves();
            player.image.src = 'Images\\RobotRight.svg';
            break;
        case 'ArrowLeft':
            wipeNextMoves();
            nextMoves = nextMoveFunction(-1, 0);
            player.image.src = 'Images\\RobotLeft.svg';
            markNextMoves();
            break;
        case 'ArrowUp':
            wipeNextMoves();
            nextMoves = nextMoveFunction(0, -1);
            player.image.src = 'Images\\RobotUp.svg';
            markNextMoves();
            break;
        case 'ArrowDown':
            wipeNextMoves();
            nextMoves = nextMoveFunction(0, 1);
            player.image.src = 'Images\\RobotDown.svg';
            markNextMoves();
            break;
        case 'Enter':
            if(nextMoves.length > 0){
                clearMarks();
                runningNextMoves = true;
                timeStart = performance.now();

                // Get rid of the current move
                moveChoiceTextSprites.splice(moveIndex, 1);
                textSprites = moveChoiceTextSprites;
                moveOptions.splice(moveIndex, 1);

                // If moves are empty restore move options
                if(moveOptions.length <= 0){
                    moveOptions = randomArrayFrom(moveBank, 3);
                    moveChoiceTextSprites = [
                    new TextSprite(moveOptions[moveIndex].name, '32px',700, 100, 'yellow'), 
                    new TextSprite(moveOptions[1].name, '32px', 300, 100),
                    new TextSprite(moveOptions[2].name, '32px', 1100, 100)];
                }

                moveIndex = 0;
                moveChoiceTextSprites[moveIndex].color = 'yellow';
            }
            nextMoveFunction = moveOptions[moveIndex].move;
            break;
        case 'd':
            wipeNextMoves();
            moveChoiceTextSprites[moveIndex].color = 'white';
            moveIndex = parseNumberBackward(moveIndex, moveOptions.length);
            nextMoveFunction = moveOptions[moveIndex].move;
            moveChoiceTextSprites[moveIndex].color = 'yellow';
            break;
        case 'a':
            wipeNextMoves();
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