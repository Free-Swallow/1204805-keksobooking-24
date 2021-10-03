const validationValues = (min, max) => {
     return min < 0 || max < 0 || max < min ? false : true;
}

const getRandomNumber = (min, max) => {
  return validationValues(min,max) ? Math.round(Math.random() * (max - min + 1)) + min : null;
};

const getRandomFractionalNumber = (min, max, point) => {
  return validationValues(min,max) ? Math.round(Math.random() * Math.random() * (max - min + 1) + min).toFixed(point) : null;
  }

getRandomNumber(1, 9);
getRandomFractionalNumber(1, 9, 4);
