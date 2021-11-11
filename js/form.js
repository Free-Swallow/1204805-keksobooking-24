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

/*
  Создать валидацию для полей:
    1. Title (Done!)
      a. Обязательное поле.
      b. Минимальная длина — 30 символов.
      c. Максимальная длина - 100 символов.
    2. Price (Done!)
      a. Обязательное поле.
      b. Числовое поле.
      c. Максимальное значение 1 000 000.

    3. Room (Done!)
      синхранизировано с Guests,
      при выборе комнаты вводяться ограничения
      на допустимые варианты выбора количества гостей.

      4. Timein
        Синхронизовать с полем timeout, при
        выборе timein, timeout автоматически равняться доTimein;
*/

// Валидатор поля title

const MIN_LETTERS = 30;
const MAX_LETTERS = 100;

title.addEventListener('input', () => {
  const titleLength = title.value.length;

  if (titleLength < MIN_LETTERS) {
    title.setCustomValidity(`Осталось ещё ${MIN_LETTERS - titleLength} символ(ов):)`);
  } else if (titleLength > MAX_LETTERS) {
    title.setCustomValidity(`Упс, перебор, удалите ${titleLength - MAX_LETTERS} символ(ов)`);
  } else {
    title.setCustomValidity('');
  }

  title.reportValidity();
});

// Валидатор для минимальной цены для разных помещений

const minPricePlace = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const onMinPrice = () => {
  // Завести константу Минимального значения
  // Получить значение из type
  // Найти подходящще значение из объекта
  // Присвоить значени из объекта в константу
  // Изменить плейсхолдер на мин.знач
  // изменить атрибут min у price на мин.значение

  const minPrice = minPricePlace[type.value];
  price.placeholder = minPrice;
  price.min = minPrice;
};

type.addEventListener('input', onMinPrice);

// Завести константу текущего значения
// Получить значение выбраной комнаты
// Сверить со списком
// Элементу которого нет в списке, добовляем атрибут disabled, hidden

const roomsForGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const onLimitedGuests = () => {
  const selectedRooms = roomNumbers.value;

  capacityItem.forEach((item) => {
    const availableOptions = roomsForGuests[selectedRooms];
    const checkRoom = (availableOptions.indexOf(item.value) === -1);
    item.disabled = checkRoom;
    item.hidden = checkRoom;
    item.selected = !(availableOptions.indexOf(item.value) === -1);
  });
};

roomNumbers.addEventListener('input', onLimitedGuests);
// Объявить константу, значение которой timein.value
// Подставить константу в timeout

timeIn.addEventListener('input', () => {
  const currentTimein = timeIn.value;
  timeOut.value = currentTimein;
});

timeOut.addEventListener('input', () => {
  const currentTimeout = timeOut.value;
  timeIn.value = currentTimeout;
});
