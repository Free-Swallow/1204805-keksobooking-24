// lesson 2

const checkValues = (min, max) => {
  if (max < min) {
    return false;
  }
  return true;
};

const getRandomNumber = (min, max) => {
  const calculationRanNum = checkValues(min, max) ? Math.round(Math.random() * Math.abs((max - min))) + Math.abs(min) : null;
  return calculationRanNum;
};

const getRandomFractionalNumber = (min, max, point) => {
  const calculationFracNum = checkValues(min, max) ? (Math.random() * Math.abs((max - min)) + Math.abs(min)).toFixed(point) : null;
  return calculationFracNum;
};

// lesson 4

const titlesList = [
  'Уютная квартира',
  'Помещение в Токио',
  'Аренда жилья'
];
const avatarNumbers = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10'
];
const typesPlace = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const checkTimes = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES_PALACE = [
  ' wifi',
  ' dishwasher',
  ' parking',
  ' washer',
  ' elevator',
  ' conditioner'
];
const descriptionsList = [
  'Сдаю помещение для жилья на длительный срок от собственника',
  'Сдается квартира в новом доме на длительный срок рядом с метро',
  'Сдаю квартиру на длительный срок, полностью меблированную и оснащенную бытовой техникой'
];
const PHOTOS_URL = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
// const randomAvatarNum =  avatarNumbers[getRandomNumber(0, avatarNumbers.length - 1)];

function getArray(arrayValue) {
  const maxLength = arrayValue.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = arrayValue[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

// const author = {
//   avatar: `img/avatars/user${randomAvatarNum}.png`,
// };

const location = {
  lat: getRandomFractionalNumber(35.65000, 35.70000, 5),
  lng: getRandomFractionalNumber(139.70000, 139.80000, 5),
};

const offer = {
  title: titlesList[getRandomNumber(0, titlesList.length - 1)],
  address: [getRandomFractionalNumber(35.65000, 35.70000, 5), getRandomFractionalNumber(139.70000, 139.80000, 5)],
  price: getRandomNumber(10000, 125000),
  type: typesPlace[getRandomNumber(0, typesPlace.length - 1)],
  rooms: getRandomNumber(1, 4),
  guests: getRandomNumber(1, 6),
  checkin: checkTimes[getRandomNumber(0, checkTimes.length - 1)],
  checkout: checkTimes[getRandomNumber(0, checkTimes.length - 1)],
  features: getArray(FEATURES_PALACE),
  description: descriptionsList[getRandomNumber(0, descriptionsList.length - 1)],
  photos: getArray(PHOTOS_URL),
};

// author.avatar;
offer.photos;

// console.log('Аватар: ' + author.avatar);
// console.log('Заголовок: ' + offer.title);
// console.log('Координаты: ' + offer.address);
// console.log('Цена: ' + offer.price);
// console.log('Тип: ' + offer.type);
// console.log('Комнаты: ' + offer.rooms);
// console.log('Кол-во гостей: ' + offer.guests);
// console.log('Время заселения: ' + offer.checkin);
// console.log('Время выселения: ' + offer.checkout);
// console.log('Дополнительно: ' + offer.features);
// console.log('Описание: ' + offer.description);
// console.log('Фото: ' + offer.photos);

const getOffer = () => (
  {
    title: titlesList[getRandomNumber(0, titlesList.length - 1)],
    address: [getRandomFractionalNumber(35.65000, 35.70000, 5), getRandomFractionalNumber(139.70000, 139.80000, 5)],
    price: getRandomNumber(10000, 125000),
    type: typesPlace[getRandomNumber(0, typesPlace.length - 1)],
    rooms: getRandomNumber(1, 4),
    guests: getRandomNumber(1, 6),
    checkin: checkTimes[getRandomNumber(0, checkTimes.length - 1)],
    checkout: checkTimes[getRandomNumber(0, checkTimes.length - 1)],
    features: getArray(FEATURES_PALACE),
    description: descriptionsList[getRandomNumber(0, descriptionsList.length - 1)],
    photos: getArray(PHOTOS_URL),
    avatar: 'img/avatars/user' + avatarNumbers[getRandomNumber(0, avatarNumbers.length - 1)] +'.png',
  }
);

const createFlyers = Array.from({length: 10}, getOffer);

createFlyers;

