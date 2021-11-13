const adForm = document.querySelector('.ad-form');
const title = document.querySelector('#title');
// const address = document.querySelector('#address');
// const typeList = document.querySelector('#type');
const price = document.querySelector('#price');
const roomNumbers = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityItem = capacity.querySelectorAll('option');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const type = adForm.querySelector('#type');

const MIN_LETTERS = 30;
const MAX_LETTERS = 100;

const minPricePlace = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const roomsForGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const validityTitle = () => {
  const titleLength = title.value.length;

  if (titleLength < MIN_LETTERS) {
    title.setCustomValidity(`Осталось ещё ${MIN_LETTERS - titleLength} символ(ов):)`);
  } else if (titleLength > MAX_LETTERS) {
    title.setCustomValidity(`Упс, перебор, удалите ${titleLength - MAX_LETTERS} символ(ов)`);
  } else {
    title.setCustomValidity('');
  }

  title.reportValidity();
};

title.addEventListener('input', validityTitle);

const getMinPrice = () => {
  const minPrice = minPricePlace[type.value];
  price.placeholder = minPrice;
  price.min = minPrice;
};

type.addEventListener('input', getMinPrice);

const getLimitedGuests = () => {
  const selectedRooms = roomNumbers.value;

  capacityItem.forEach((item) => {
    const availableOptions = roomsForGuests[selectedRooms];
    const checkRoom = (availableOptions.indexOf(item.value) === -1);
    item.hidden = checkRoom;
    item.selected = !(availableOptions.indexOf(item.value) === -1);
  });
};

roomNumbers.addEventListener('input', getLimitedGuests);

const conversionTimein = () => {
  const currentTimein = timeIn.value;
  timeOut.value = currentTimein;
};

const conversionTimeout = () => {
  const currentTimeout = timeOut.value;
  timeIn.value = currentTimeout;
};

timeIn.addEventListener('input', conversionTimein);

timeOut.addEventListener('input', conversionTimeout);

const disabledForm = () => {
  const form = document.querySelector('.ad-form');

  form.classList.add('ad-form--disabled');
};

const activeForm = () => {
  const form = document.querySelector('.ad-form');

  form.classList.remove('ad-form--disabled');
};

export {disabledForm, activeForm};
