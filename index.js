// Code your solution in this file!

function distanceFromHqInBlocks(value) {
    return Math.abs(42 - value);
}

function distanceFromHqInFeet(value) {
    let distanceInBlocks = distanceFromHqInBlocks(value);
    return distanceInBlocks * 264;
}

function distanceTravelledInFeet(block1, block2) {
    let blocks = Math.abs(block1 - block2);
    return blocks * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let cost = 0;
    if(distance <= 400){
        return cost;
    }
    else if(distance > 400 && distance <= 2000) {
        distance = distance - 400;
        cost = distance * 0.02;
        return cost;
    } else if(distance > 2000 && distance <= 2500) {
        cost = 25;
        return cost;
    } else if(distance > 2500) {
        return 'cannot travel that far';
    }
}