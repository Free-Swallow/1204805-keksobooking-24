const checkValues = (min, max) => !(max < min || max < 0 || max < min) || false;

const getRandomNumber = (min, max) =>
  (checkValues(min, max)) ? Math.round(Math.random() * Math.abs((max - min))) + Math.abs(min) : null;

const getRandomFractionalNumber = (min, max, point) =>
  (checkValues(min, max)) ? (Math.random() * Math.abs((max - min)) + Math.abs(min)).toFixed(point) : null;

const getRandomNumberValues = (arr) => {
  const maxLength = arr.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = arr[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
};

export {getRandomNumber, getRandomFractionalNumber, getRandomNumberValues};
