// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - 42)
}

function blocksToFeet(blocks){
  return blocks * 264
}

function distanceFromHqInFeet(pickup){
  blocksToFeet(distanceFromHqInBlocks(pickup))
}
