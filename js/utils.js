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

const disabledPage = () => {
  const form = document.querySelector('.ad-form');
  const formItem = form.querySelectorAll('fieldset');
  const mapFilter = document.querySelector('.map__filters');
  const mapItem = mapFilter.querySelectorAll('select');
  const featuresMap = document.querySelector('.map__features');

  mapItem.forEach((cur) => {
    cur.setAttribute('disabled', 'disabled');
  });

  formItem.forEach((cur) => {
    cur.setAttribute('disabled', 'disabled');
  });

  featuresMap.setAttribute('disabled', 'disabled');
  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('ad-form--disabled');
};

const activePage = () => {
  const form = document.querySelector('.ad-form');
  const formItem = form.querySelectorAll('fieldset');
  const mapFilter = document.querySelector('.map__filters');
  const mapItem = mapFilter.querySelectorAll('select');
  const featuresMap = document.querySelector('.map__features');

  mapItem.forEach((cur) => {
    cur.removeAttribute('disabled', 'disabled');
  });

  formItem.forEach((cur) => {
    cur.removeAttribute('disabled', 'disabled');
  });

  featuresMap.removeAttribute('disabled', 'disabled');
  form.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('ad-form--disabled');
};


disabledPage();

activePage();


export {getRandomNumber, getRandomFractionalNumber, getRandomNumberValues};
