import {showAlert, getSuccessMessage, getErrorMessage} from './message.js';
import {createAd, displayFetchOffers} from './api.js';
import {
  closePopup,
  setDefaultCoords,
  defaultCoords,
  resetAllMap,
  addOffersToMap
} from './map.js';

const adForm = document.querySelector('.ad-form');
const title = document.querySelector('#title');
const address = document.querySelector('#address');
const price = document.querySelector('#price');
const roomNumbers = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityItem = capacity.querySelectorAll('option');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const type = adForm.querySelector('#type');
const buttonReset = adForm.querySelector('.ad-form__reset');
const mapFilters = document.querySelector('.map__filters');

const MIN_LETTERS = 30;
const MAX_LETTERS = 100;
const BASE_PRICE = 1000;
const ROUNDING_COORDINATE = 5;

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

// TITLE CHANGE

const onTitleChange = () => {
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

title.addEventListener('input', onTitleChange);

// PRICE CHANGE

const onMinPriceChange = () => {
  const minPrice = minPricePlace[type.value];
  price.placeholder = minPrice;
  price.min = minPrice;
};

type.addEventListener('input', onMinPriceChange);

// ROOM AND GUESTS

const onGuestsChange = () => {
  const selectedRooms = roomNumbers.value;

  capacityItem.forEach((item) => {
    const availableOptions = roomsForGuests[selectedRooms];

    item.hidden = (availableOptions.indexOf(item.value) === -1);
    item.selected = !(availableOptions.indexOf(item.value) === -1);
  });
};

roomNumbers.addEventListener('input', onGuestsChange);

// TIME CHANGE

const onTimeinChange = () => {
  timeOut.value = timeIn.value;
};

const onTimeoutChange = () => {
  timeIn.value = timeOut.value;
};

timeIn.addEventListener('input', onTimeinChange);
timeOut.addEventListener('input', onTimeoutChange);

// FORM STATUS

const disabledForm = () => {
  const form = document.querySelector('.ad-form');

  form.classList.add('ad-form--disabled');
};

const activateForm = () => {
  const form = document.querySelector('.ad-form');

  form.classList.remove('ad-form--disabled');
};

// ADDRESS

address.value = `${defaultCoords.lat.toFixed(ROUNDING_COORDINATE)} ${defaultCoords.lng.toFixed(ROUNDING_COORDINATE)}`;

const setAddress = ({lat, lng}) => {
  address.value = `${lat.toFixed(ROUNDING_COORDINATE)} ${lng.toFixed(ROUNDING_COORDINATE)}`;
};

// RESET BUTTON

const resetForm = () => {
  adForm.reset();
  price.placeholder = BASE_PRICE;

  setAddress(defaultCoords);
  closePopup();
  resetAllMap();
  mapFilters.reset();
  displayFetchOffers((data) => {
    addOffersToMap(data.slice(0, 10));
  }, showAlert);
};

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
  setDefaultCoords();
  setAddress(defaultCoords);
});

// FORM LISTENER

const onCreateSuccess = () => {
  getSuccessMessage();
  resetForm();
};

const onCreateError = () => {
  getErrorMessage();
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  createAd(formData, onCreateSuccess, onCreateError);
});

export {
  disabledForm,
  activateForm,
  setAddress
};
