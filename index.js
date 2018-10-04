function distanceFromHqInBlocks(distance) {
  return distance > 42 ? distance - 42 : 42 - distance;
}

function distanceFromHqInFeet(distance){
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
  return distanceFromHqInBlocks(distance)*264
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  //Calculates the number of feet a passenger travels given a starting block and an
  //ending block - it only calculates distance North and South (uptown/downtown).
  //It uses the knowledge that a block is 264 feet long.
  return endingBlock > startingBlock ? (endingBlock - startingBlock) * 264 : (startingBlock - endingBlock) * 264;
}

function calculatesFarePrice(startingBlock, endingBlock) {
  let distance = distanceTravelledInFeet(startingBlock, endingBlock);


  if (distance <= 400) {
    return 0;
  } else if (distance > 2500) {
    return "cannot travel that far";
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return ((distance - 400) * .02);
  }

}
