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

    window.requestAnimationFrame(mainLoop);
}

mainLoop();

// CONTROLS
// Keydown
window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'ArrowRight':
            if(grid[player.yTile][player.xTile + 1] != null){
                player.xTile++;
            }
            break;
        case 'ArrowLeft':
            if(grid[player.yTile][player.xTile - 1] != null){
                player.xTile--;
            }
            break;
        case 'ArrowUp':
            if(grid[player.yTile - 1][player.xTile] != null){
                player.yTile--;
            }
            break;
        case 'ArrowDown':
            if(grid[player.yTile + 1][player.xTile] != null){
                player.yTile++;
            }
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