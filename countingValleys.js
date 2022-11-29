function countingValleys(steps, path) {
  let currentAltitude = 0,
      valleyCount = 0;

  for (let i = 0; i < path.length; i++) {
    let currentValley = currentAltitude < 0
    if (path[i] === 'U') {
      currentAltitude++;
    }
    if (path[i] === 'D') {
      currentAltitude--;
    }
    if (currentAltitude === 0 && currentValley) {
      valleyCount++
    }
  }

  return valleyCount;
}

