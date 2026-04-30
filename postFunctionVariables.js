grid = [
    [new Tile(0, 0), new Tile(1, 0), new Tile(2, 0), new Tile(3, 0), new Tile(4, 0), new Tile(5, 0), new Tile(6, 0), new Tile(7, 0), new Tile(8, 0, 'brown', false)],
    [new Tile(0, 1), new Tile(1, 1), new Tile(2, 1), new Tile(3, 1), new Tile(4, 1), new Tile(5, 1), new Tile(6, 1, 'brown', false), new Tile(7, 1, 'green'), new Tile(8, 1)],
    [new Tile(0, 2), new Tile(1, 2), new Tile(2, 2, 'brown', false), new Tile(3, 2), new Tile(4, 2), new Tile(5, 2, 'brown', false), new Tile(6, 2), new Tile(7, 2), new Tile(8, 2)],
    [new Tile(0, 3), new Tile(1, 3), new Tile(2, 3, 'brown', false), new Tile(3, 3), new Tile(4, 3), new Tile(5, 3), new Tile(6, 3, 'brown', false), new Tile(7, 3, 'brown', false), new Tile(8, 3, 'brown', false)],
    [new Tile(0, 4), new Tile(1, 4), new Tile(2, 4, 'brown', false), new Tile(3, 4), new Tile(4, 4), new Tile(5, 4), new Tile(6, 4), new Tile(7, 4), new Tile(8, 4)],
    [new Tile(0, 5), new Tile(1, 5), new Tile(2, 5), new Tile(3, 5), new Tile(4, 5), new Tile(5, 5), new Tile(6, 5), new Tile(7, 5), new Tile(8, 5)]];


// MOVES
let moveBank = [new MoveOption(oneForeward, 'Single Step'),
    new MoveOption(twoForewardTele, 'Double Teleport'),
    new MoveOption(tripleForeward, 'Triple Run')];
let moveOptions = randomArrayFrom(moveBank);
let moveIndex = 0;

// TEXT
let moveChoiceTextSprites = [
new TextSprite(moveOptions[moveIndex].name, '32px', 500, 100, 'yellow'), 
new TextSprite(moveOptions[1].name, '32px', 100, 100),
new TextSprite(moveOptions[2].name, '32px', 900, 100)];
let textSprites = [];

for(let i = 0; i < moveChoiceTextSprites.length; i++){
    textSprites.push(moveChoiceTextSprites[i]);
}