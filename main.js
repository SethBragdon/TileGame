// DEFAULT NEXT MOVE FUNCTION
nextMoveFunction = oneForeward;

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
    greeting.draw();

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
            runNextMoves();
            break;
        case 'a':
            moveIndex = parseNumberBackward(moveIndex, moveOptions.length);
            greeting.text = moveOptions[moveIndex].name;
            nextMoveFunction = moveOptions[moveIndex].move;
            break;
        case 'd':
            moveIndex = parseNumberForward(moveIndex, moveOptions.length);
            greeting.text = moveOptions[moveIndex].name;
            nextMoveFunction = moveOptions[moveIndex].move;
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