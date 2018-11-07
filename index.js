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
  let distance = distanceTravelledInFeet(start, destination)

  switch (distance) {
    case distance <= 400:
      let price = 0;
      break;
    case distance <= 2000:
      let price = distance;
      break;
    case distance <= 2500:
    let price = 25;
    break;
    case distance > 2500:
    let price = "cannot travel that far";
    break;
  }
  return price
  }
