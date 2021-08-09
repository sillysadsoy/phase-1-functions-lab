function distanceFromHqInBlocks(pickupBlock) {
   return pickupBlock > 42 ? (pickupBlock-42) : (42-pickupBlock);
}

function distanceFromHqInFeet(pickupBlock) {
    return (distanceFromHqInBlocks(pickupBlock)) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    if(num1 > num2) {
        return (num1-num2)*264;
    } else {
        return (num2-num1)*264;
    }
}

function calculatesFarePrice(num1, num2) {
    if(distanceTravelledInFeet(num1, num2) <= 400) {
        return 0;
    } else if((distanceTravelledInFeet(num1, num2)) <= 2000) {
        let dist = distanceTravelledInFeet(num1, num2);
        return (dist-400)*(.02);
    } else if(distanceTravelledInFeet(num1, num2) <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }

}
