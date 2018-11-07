// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - 42)
}

function blocksToFeet(blocks){
  return blocks * 264
}

function distanceFromHqInFeet(pickup){
  return blocksToFeet(distanceFromHqInBlocks(pickup))
}

function distanceTravelledInFeet(start, end){
  return blocksToFeet(Math.abs(start - end))
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  
  switch (distance) {
    case distance <= 400:
    return 0
      break;
    case distance <= 2000:
      return distance * .02;
      break;
    case distance <= 2500:
     return 25;
    break;
    case distance > 2500:
    return "cannot travel that far";
    break;
  }
  
  }
