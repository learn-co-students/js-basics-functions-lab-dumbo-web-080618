// Code your solution in this file!
function distanceFromHqInBlocks(block){
  let end = 42;
  return Math.abs(end - block);
}

function distanceFromHqInFeet(beg){
  let end = 42;
  let blockInFeet = 264;
  return Math.abs(end - beg) * 264;
}

function distanceTravelledInFeet(beg, end){
  let block = 264;
  return Math.abs(end - beg) * block;
}

function calculatesFarePrice(start, destination){
  if(distanceTravelledInFeet(start, destination) < 400){
    return 0;
  }else if (distanceTravelledInFeet(start, destination) >= 2500){
    return 'cannot travel that far';
  }else if (distanceTravelledInFeet(start, destination) >= 2000){
      return 25;
  }else if (distanceTravelledInFeet(start, destination) >= 400){
    return ((distanceTravelledInFeet(start, destination) - 400) * 0.2)/ 10 ;
  }
};
