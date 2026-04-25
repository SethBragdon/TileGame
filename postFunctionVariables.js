// MOVES
let moveBank = [new MoveOption(oneForeward, 'Single Step'),
    new MoveOption(twoForewardTele, 'Double Teleport'),
    new MoveOption(tripleForeward, 'Triple Run')];
let moveOptions = [new MoveOption(oneForeward, 'Single Step'),
    new MoveOption(twoForewardTele, 'Double Teleport'),
    new MoveOption(tripleForeward, 'Triple Run')];
let moveIndex = 0;

// TEXT
let leftMove = new TextSprite(moveOptions[1].name, '32px', 100, 100);
let choice = new TextSprite(moveOptions[moveIndex].name, '32px', 500, 100, 'yellow');
let rightMove = new TextSprite(moveOptions[2].name, '32px', 900, 100);

let moveChoiceTextSprites = [choice, leftMove, rightMove];
let textSprites = [leftMove, choice, rightMove];