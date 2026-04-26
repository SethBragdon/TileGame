// MOVES
let moveBank = [new MoveOption(oneForeward, 'Single Step'),
    new MoveOption(twoForewardTele, 'Double Teleport'),
    new MoveOption(tripleForeward, 'Triple Run')];
let moveOptions = randomArrayFrom(moveBank);
let moveIndex = 0;

alert(randomArrayFrom(moveBank).length);

// TEXT
let moveChoiceTextSprites = [
new TextSprite(moveOptions[moveIndex].name, '32px', 500, 100, 'yellow'), 
new TextSprite(moveOptions[1].name, '32px', 100, 100),
new TextSprite(moveOptions[2].name, '32px', 900, 100)];
let textSprites = [];

for(let i = 0; i < moveChoiceTextSprites.length; i++){
    textSprites.push(moveChoiceTextSprites[i]);
}