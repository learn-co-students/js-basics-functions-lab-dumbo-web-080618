// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(a, b) {
  return Math.abs((a - b) * 264);
}

function calculatesFarePrice(start, destination) {
 let distance = distanceTravelledInFeet(start, destination)
 if (distance <= 400) {
   return 0;
 }
 else if (distance > 400 && distance <=2000) {
   return (distance - 400) * 0.02;
 }
 else if (distance > 2000 && distance < 2500) {
   return 25;
 }
 else {
   return 'cannot travel that far';
 }
}
