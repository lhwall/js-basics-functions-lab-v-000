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
  let price;

  switch (distance) {
    case distance <= 400:
      price = 0;
      break;
    case distance <= 2000:
      price = distance * .02;
      break;
    case distance <= 2500:
     price = 25;
    break;
    case distance > 2500:
    price = "cannot travel that far";
    break;
  }
  return price
  }
