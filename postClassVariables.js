// GRID
let grid = [
    [new Tile(0, 0), new Tile(1, 0), new Tile(2, 0), new Tile(3, 0), new Tile(4, 0)],
    [new Tile(0, 1), new Tile(1, 1), new Tile(2, 1), new Tile(3, 1), new Tile(4, 1)],
    [new Tile(0, 2), new Tile(1, 2), new Tile(2, 2), new Tile(3, 2), new Tile(4, 2)],
    [new Tile(0, 3), new Tile(1, 3), new Tile(2, 3), new Tile(3, 3), new Tile(4, 3)],
    [new Tile(0, 4), new Tile(1, 4), new Tile(2, 4), new Tile(3, 4), new Tile(4, 4)]];

// SPRITES
//player
let player = new MapboundSprite(1, 3, 50, 50, 0, 0, 'yellow');
let sprites = [player];
