// Code your solution in this file!
// distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(street){
  return Math.abs(street - 42)
}

function distanceBetweenInBlocks(origin_street, destination_street){
  return Math.abs(origin_street - destination_street)
}

// distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location. You can use your distanceFromHqInBlocks function to help return the correct value here. Try something like this:
function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(origin, destination){
  return distanceBetweenInBlocks(origin,destination) * 264
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  switch (true) {
    case (distance < 400):
        return 0 * distance
      break;
    case (distance >= 401 && distance <= 2000):
        return 0.02 * (distance - 400)
      break;
    
    case (distance > 2000 && distance <= 2500):
        return 25
      break;
    default:
        return 'cannot travel that far'
      break;
  }
}