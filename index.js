// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return street > 42 ? street - 42 : 42 - street;
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(beginning, end) {
  return end > beginning ? (end - beginning) * 264 : (beginning - end) * 264;
}

function calculatesFarePrice(beginning, end) {
  const distance = distanceTravelledInFeet(beginning, end);
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
