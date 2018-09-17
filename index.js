// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  //returns the number of blocks given a value
    return Math.abs(distance - 42)
}
function distanceFromHqInFeet(distance) {
  const newDistance = distanceFromHqInBlocks(distance)
  return newDistance * 264
}
function distanceTravelledInFeet(start, end) {
  return Math.abs((end - start )* 264)
}
function calculatesFarePrice(start, end) {
  const newDistance = distanceTravelledInFeet(start, end) //variable has the above argu feet traveled
  console.log(newDistance)
  if (newDistance < 400) {
    return 0 //looking for price not string
  } else if (newDistance >= 400 && newDistance <= 2000) {
    console.log(newDistance * 0.02)
    const newFeet = newDistance - 400
    return (newFeet * 0.02)
  } else if (newDistance > 2000 && newDistance < 2500){
    return 25
  }else if (newDistance > 2500) {
    return 'cannot travel that far'
  }
  // if (newDistance > 400 && newDistance <= 2000) {
  //   return (newDistance * 0.02)


}
