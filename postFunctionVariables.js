// LEVELS
// Level grids
let level1_1Grid = [
    [GrassTile(0, 0), GrassTile(1, 0), GrassTile(2, 0), GrassTile(3, 0), GrassTile(4, 0), RockTile(5, 0), RockTile(6, 0), GrassTile(7, 0), GrassTile(8, 0), GrassTile(9, 0)],
    [GrassTile(0, 1), GrassTile(1, 1), GrassTile(2, 1), GrassTile(3, 1), GrassTile(4, 1), RockTile(5, 1), LaunchPad(6, 1), GrassTile(7, 1), RockTile(8, 1), GrassTile(9, 1)],
    [GrassTile(0, 2), RockTile(1, 2), GrassTile(2, 2), GrassTile(3, 2), GrassTile(4, 2), GrassTile(5, 2), RockTile(6, 2), RockTile(7, 2), GrassTile(8, 2), GrassTile(9, 2)],
    [GrassTile(0, 3), GrassTile(1, 3), RockTile(2, 3), GrassTile(3, 3), GrassTile(4, 3), GrassTile(5, 3), GrassTile(6, 3), GrassTile(7, 3), GrassTile(8, 3), GrassTile(9, 3)],
    [GrassTile(0, 4), GrassTile(1, 4), RockTile(2, 4), GrassTile(3, 4), GrassTile(4, 4), GrassTile(5, 4), GrassTile(6, 4), GrassTile(7, 4), GrassTile(8, 4), GrassTile(9, 4)],
    [GrassTile(0, 5), GrassTile(1, 5), RockTile(2, 5), RockTile(3, 5), GrassTile(4, 5), GrassTile(5, 5), GrassTile(6, 5), GrassTile(7, 5), GrassTile(8, 5), GrassTile(9, 5)]];


let level1_2Grid = [
    [GrassTile(0, 0), GrassTile(1, 0), RockTile(2, 0), RockTile(3, 0), GrassTile(4, 0), LaunchPad(5, 0)],
    [GrassTile(0, 1), GrassTile(1, 1), RockTile(2, 1), GrassTile(3, 1), RockTile(4, 1), GrassTile(5, 1)],
    [GrassTile(0, 2), GrassTile(1, 2), GrassTile(2, 2), RockTile(3, 2), GrassTile(4, 2), GrassTile(5, 2)],
    [GrassTile(0, 3), GrassTile(1, 3), GrassTile(2, 3), GrassTile(3, 3), GrassTile(4, 3), GrassTile(5, 3)]];

let level1_3Grid = [
    [GrassTile(0, 0), GrassTile(1, 0), GrassTile(2, 0), LavaTile(3, 0), GrassTile(4, 0), GrassTile(5, 0), GrassTile(6, 0), GrassTile(7, 0), RockTile(8, 0)],
    [GrassTile(0, 1), GrassTile(1, 1), GrassTile(2, 1), GrassTile(3, 1), GrassTile(4, 1), GrassTile(5, 1), RockTile(6, 1), LaunchPad(7, 1), GrassTile(8, 1)],
    [GrassTile(0, 2), GrassTile(1, 2), RockTile(2, 2), GrassTile(3, 2), GrassTile(4, 2), RockTile(5, 2), GrassTile(6, 2), GrassTile(7, 2), GrassTile(8, 2)],
    [GrassTile(0, 3), GrassTile(1, 3), RockTile(2, 3), GrassTile(3, 3), GrassTile(4, 3), RockTile(5, 3), RockTile(6, 3), RockTile(7, 3), RockTile(8, 3)],
    [GrassTile(0, 4), GrassTile(1, 4), RockTile(2, 4), GrassTile(3, 4), GrassTile(4, 4), GrassTile(5, 4), GrassTile(6, 4), GrassTile(7, 4), GrassTile(8, 4)],
    [GrassTile(0, 5), GrassTile(1, 5), GrassTile(2, 5), GrassTile(3, 5), GrassTile(4, 5), GrassTile(5, 5), GrassTile(6, 5), GrassTile(7, 5), GrassTile(8, 5)]];

let level1_4Grid = [
    [GrassTile(0, 0), GrassTile(1, 0), LavaTile(2, 0), GrassTile(3, 0), GrassTile(4, 0), LavaTile(5, 0), LaunchPad(6, 0), GrassTile(7, 0), GrassTile(8, 0)],
    [GrassTile(0, 1), GrassTile(1, 1), GrassTile(2, 1), LavaTile(3, 1), LavaTile(4, 1), GrassTile(5, 1), RockTile(6, 1), GrassTile(7, 1), GrassTile(8, 1)],
    [GrassTile(0, 2), GrassTile(1, 2), GrassTile(2, 2), LavaTile(3, 2), GrassTile(4, 2), GrassTile(5, 2), RockTile(6, 2), RockTile(7, 2), GrassTile(8, 2)],
    [GrassTile(0, 3), GrassTile(1, 3), GrassTile(2, 3), GrassTile(3, 3), LavaTile(4, 3), LavaTile(5, 3), GrassTile(6, 3), GrassTile(7, 3), GrassTile(8, 3)],
    [RockTile(0, 4), GrassTile(1, 4), GrassTile(2, 4), GrassTile(3, 4), GrassTile(4, 4), GrassTile(5, 4), GrassTile(6, 4), GrassTile(7, 4), LavaTile(8, 4)]];

let level1_5Grid = [
    [GrassTile(0, 0), GrassTile(1, 0), GrassTile(2, 0), LaunchPad(3, 0), GrassTile(4, 0), GrassTile(5, 0)],
    [GrassTile(0, 1), GrassTile(1, 1), LavaTile(2, 1), RockTile(3, 1), GrassTile(4, 1), GrassTile(5, 1)],
    [LavaTile(0, 2), GrassTile(1, 2), GrassTile(2, 2), LavaTile(3, 2), GrassTile(4, 2), GrassTile(5, 2)],
    [RockTile(0, 3), RockTile(1, 3), GrassTile(2, 3), GrassTile(3, 3), LavaTile(4, 3), LavaTile(5, 3)],
    [GrassTile(0, 4), RockTile(1, 4), GrassTile(2, 4), LavaTile(3, 4), GrassTile(4, 4), LavaTile(5, 4)],
    [GrassTile(0, 5), LavaTile(1, 5), GrassTile(2, 5), GrassTile(3, 5), RockTile(4, 5), GrassTile(5, 5)],
    [GrassTile(0, 6), LavaTile(1, 6), LavaTile(2, 6), LavaTile(3, 6), GrassTile(4, 6), GrassTile(5, 6)],
    [GrassTile(0, 7), GrassTile(1, 7), GrassTile(2, 7), GrassTile(3, 7), GrassTile(4, 7), RockTile(5, 7)]];

    // Level array
let levels = [new Level(level1_1Grid, 0, 3), new Level(level1_2Grid, 0, 0), new Level(level1_3Grid, 0, 4), new Level(level1_4Grid, 0, 0), new Level(level1_5Grid, 1, 7)];
let currentLevel = 0;

grid = levels[currentLevel].grid;

// MOVES
let moveBank = [new MoveOption(oneForeward, 'Single Step'),
    new MoveOption(twoForewardTele, 'Double Teleport'),
    new MoveOption(tripleForeward, 'Triple Run'),
    new MoveOption(oneDiagonal, 'Diagonal Step'),
    new MoveOption(safeDoubleForeward, 'Safe Double Step'),
    new MoveOption(twoForewardTeleOneStep, 'Telecharge')];
let moveOptions = randomArrayFrom(moveBank, 3);
let moveIndex = 0;

let textSprites = [];

// SPRITES
// player
let player = new MapboundSprite(0, 4, 50, 50, 0, 0, 'yellow', 'Images\\RobotUp.svg');

// timer
let timer = new Sprite(500, 200, 500, 25, 0, 0, 'green');
let timeStart = performance.now();
let timeLeft = 20000 - (performance.now() - timeStart);

let sprites = [player, timer];

// Load start
/*player.xTile = levels[currentLevel].xStart;
player.yTile = levels[currentLevel].yStart;*/