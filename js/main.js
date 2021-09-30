const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || max < min) {
    return null;
  }
  return Math.round(Math.random() * (max - min + 1)) + min;
};

const getRandomFractionalNumber = (min, max, point) => {
  if (min < 0 || max < 0 || max < min) {
    return null;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(point);
};

getRandomNumber(1, 9);

getRandomFractionalNumber(0, 9, 5);
