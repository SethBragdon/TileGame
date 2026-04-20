function getSign(number){
    if(number == 0){
        return 0;
    }
    return number/Math.abs(number);
}

function rectangularCollision(sprite1, sprite2){
    return sprite1.xPos < sprite2.xPos + sprite2.width &&
    sprite1.xPos + sprite1.width > sprite2.xPos &&
    sprite1.yPos < sprite2.yPos + sprite2.height &&
    sprite1.yPos + sprite1.height > sprite2.yPos;
}

function copyArray(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

function remove(array, object){
    for(let i = 0; i < array.length; i++){
        if(array[i] == object){
            array.splice(i, 1);
        }
    }
}
