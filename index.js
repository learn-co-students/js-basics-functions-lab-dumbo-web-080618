// Code your solution in this file!

function distanceFromHqInBlocks(n){
  return Math.abs(n - 42)

}

function distanceFromHqInFeet(n){
  return distanceFromHqInBlocks(n) * 264
}

function distanceTravelledInFeet(a, n){
  return Math.abs(n - a) * 264
}

function calculatesFarePrice(start, destination){
  var dis = distanceTravelledInFeet(start, destination)
  if (dis <= 400) {
    return 0;
  } else if (dis > 400 && dis <= 2000) {
    return .02 * (dis - 400);
  } else if (dis > 2000 && dis < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
