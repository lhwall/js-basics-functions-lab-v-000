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
    case distance <= 2000:
      return .02 * distance
    case distance <= 2500:
    return 25
    case distance > 2500:
    return "cannot travel that far"
  }
  }

