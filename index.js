// Code your solution in this file!
function distanceFromHqInBlocks(x){
  return Math.abs(42-x);
}

function distanceFromHqInFeet(x){
  return distanceFromHqInBlocks(x)*264;
}

function distanceTravelledInFeet(x, y){
  return Math.abs(x-y)*264;
}

function calculatesFarePrice(start, destination){
  let distanceTravelled = distanceTravelledInFeet(start, destination);
  if (distanceTravelled <= 400 ){
    return 0;
  }
  else if (distanceTravelled > 400 && distanceTravelled <= 2000){
    return (2 * (distanceTravelled-400))/100;
  }
  else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
    return 25
  }
  else {
    return "cannot travel that far";
  }

}
