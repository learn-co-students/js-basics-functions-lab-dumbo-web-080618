function distanceFromHqInBlocks(loc) {
  return Math.abs(loc - 42)
}

function distanceFromHqInFeet(loc) {
  return (distanceFromHqInBlocks(loc) * 264)
}

function distanceTravelledInFeet(loc1, loc2) {
  return Math.abs(loc1 - loc2) * 264
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance < 265) {
    return 0
  }
  else if (distance < 2000) {
    return (distance - 400) * 0.02
  }
  else if (distance < 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }

}


// it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//   // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//   expect(calculatesFarePrice(34, 32)).to.equal(2.56);
// });
//
// it('charges 25 dollars for a distance over 2000 feet', function() {
//   expect(calculatesFarePrice(50, 58)).to.equal(25);
// });
//
// it('does not allow rides over 2500 feet', function() {
//   expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
