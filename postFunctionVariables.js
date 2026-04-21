// MOVES
let moveOptions = [new MoveOption(oneForeward, 'Single Step'), new MoveOption(twoForewardTele, 'Double Teleport')];
let moveIndex = 0;

// TEXT
let greeting = new TextSprite(moveOptions[moveIndex].name, '32px', 500, 100);