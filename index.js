// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let block = 42 - someValue;
  return Math.abs(block);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end) {
  let feet = distanceTravelledInFeet(start, end);
  let price;
  if (feet < 400) {
    price = 0;
  } else if (feet > 2500) {
      return "cannot travel that far";
  } else if (feet > 400 && feet < 2000) {
    price = .02 * (feet-400);
  } else if (feet > 2000 && feet < 2500) {
    price = 25;
  }
  return price;
}
