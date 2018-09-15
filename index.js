// Code your solution in this file!
function distanceFromHqInBlocks(st) {
  let block = 42 - st;
  return Math.abs(block)
}

function distanceFromHqInFeet(st) {
  return distanceFromHqInBlocks(st) * 264;
}

function distanceTravelledInFeet(st, end) {
  return Math.abs(st - end) * 264;
}

function calculatesFarePrice(st, end) {
  let feet = distanceTravelledInFeet(st, end);
  let price;
  if (feet < 400) {
    price = 0;
  } else if (feet > 2500) {
    price = "cannot travel that far";
  } else if (feet > 400 && feet < 2000) {
    price = .02 * (feet-400);
  } else if (feet > 2000 && feet < 2500) {
    price = 25;
  }
  return price
}
