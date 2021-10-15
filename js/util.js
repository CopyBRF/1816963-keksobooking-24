function getRandomInt(min, max) {
  if (min >= max) {
    throw new Error('min cannot be greater than or equal to max');
  }

  if (min < 0 || max < 0) {
    throw new Error('min and max cannot be less then 0');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getRandomInt};

function getRandomFloat(min, max, dec) {
  if (min >= max) {
    throw new Error('min cannot be greater than or equal to max');
  }

  if (min < 0 || max < 0) {
    throw new Error('min and max cannot be less then 0');
  }
  const multiplier = Math.pow(10, dec);

  return ((Math.random() * (max - min) * multiplier + multiplier * min) / multiplier).toFixed(dec);
}

export{getRandomFloat};
