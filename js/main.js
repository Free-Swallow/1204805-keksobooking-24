// lesson 2

const checkValues = (min, max) => {
  if (min < 0 || max < 0 || max < min) {
    return false;
  }
  return true;
};

const getRandomNumber = (min, max) => {
  const calculationRanNum = checkValues(min, max) ? Math.round(Math.random() * (max - min)) + min : null;
  return calculationRanNum;
};

const getRandomFractionalNumber = (min, max, point) => {
  const calculationFracNum = checkValues(min, max) ? (Math.random() * (max - min) + min).toFixed(point) : null;
  return calculationFracNum;
};

getRandomNumber(9, 25);
getRandomFractionalNumber(9, 25, 2);

// lesson 4

const AVATAR_NUMBER = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const getAvatarNum =  AVATAR_NUMBER[getRandomNumber(0, AVATAR_NUMBER.length - 1)];

const TYPE_PLACE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const getTypePlace = TYPE_PLACE[getRandomNumber(0, TYPE_PLACE.length - 1)];

const CHECK_TIME = ['12:00', '13:00', '14:00'];
const getCheckTime = CHECK_TIME[getRandomNumber(0, CHECK_TIME.length - 1)];


const FEATURES_PALACE = [' wifi', ' dishwasher', ' parking', ' washer', ' elevator', ' conditioner'];

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

const DESCRIPTION_LIST = ['Сдаю светлую и уютную однокомнатную квартиру на длительный срок от собственника', 'Сдается квартира в новом доме на длительный срок рядом с метро', 'Сдаю квартиру на длительный срок, полностью меблированную и оснащенную бытовой техникой'];
const getDescription = DESCRIPTION_LIST[getRandomNumber(0, DESCRIPTION_LIST.length - 1)];

const PHOTO_URL = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const author = {
  avatar: `img/avatars/user${getAvatarNum}.png`,
};

const location = {
  lat: getRandomFractionalNumber(35.65000, 35.70000, 5),
  lng: getRandomFractionalNumber(139.70000, 139.80000, 5),
};


const offer = {
  title: 'Уютная квартира',
  address: [location.lat, location.lng],
  price: getRandomNumber(10000, 125000),
  type: getTypePlace,
  rooms: getRandomNumber(1, 4),
  guests: getRandomNumber(1, 6),
  checkin: getCheckTime,
  checkout: getCheckTime,
  features: getArray(FEATURES_PALACE),
  description: getDescription,
  photos: getArray(PHOTO_URL),
};

author.avatar;
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
