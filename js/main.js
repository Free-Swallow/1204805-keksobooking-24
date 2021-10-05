const checkValues = (min, max) => {
  if (min < 0 || max < 0 || max < min) {
    return false;
  }
  return true;
};

const getRandomNumber = (min, max) => {
  const calculationRanNum = checkValues(min, max) ? Math.round(Math.random() * (max - min + 1)) + min : null;
  return calculationRanNum;
};

const getRandomFractionalNumber = (min, max, point) => {
  const calculationFracNum = checkValues(min, max) ? (Math.random() * (max - min + 1) + min).toFixed(point) : null;
  return calculationFracNum;
};

getRandomNumber(9, 25);
getRandomFractionalNumber(9, 25, 2);
