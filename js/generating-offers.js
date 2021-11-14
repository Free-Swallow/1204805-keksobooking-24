import {getRandomNumber, getRandomFractionalNumber, getRandomNumberValues} from './utils.js';

const MIN_ROOM = 0;
const MAX_ROOM = 3;
const MIN_GUESTS = 0;
const MAX_GUESTS = 3;
const MIN_PRICE = 10000;
const MAX_PRICE = 125000;
const MIN_LATITUBE = 35.65000;
const MAX_LATITUBE = 35.70000;
const MIN_LONGITUBE = 139.70000;
const MAX_LONGITUBE = 139.80000;
const ROUNDING_COORDINATE = 5;
const QUANITY_GENERATION = 1;

const titles = [
  'Уютная квартира',
  'Помещение в Токио',
  'Аренда жилья',
];
const avatarsNum = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
];
const places = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const checkTimes = [
  '12:00',
  '13:00',
  '14:00',
];
const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const descriptions = [
  'Сдаю помещение для жилья на длительный срок от собственника',
  'Сдается квартира в новом доме на длительный срок рядом с метро',
  'Сдаю квартиру на длительный срок, полностью меблированную и оснащенную бытовой техникой',
];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createOffer = () => (
  {
    title: titles[getRandomNumber(0, titles.length - 1)],
    address: [getRandomFractionalNumber(MIN_LATITUBE, MAX_LATITUBE, ROUNDING_COORDINATE), getRandomFractionalNumber(MIN_LONGITUBE, MAX_LONGITUBE, ROUNDING_COORDINATE)],
    price: getRandomNumber(MIN_PRICE, MAX_PRICE),
    type: places[getRandomNumber(0, places.length - 1)],
    rooms: getRandomNumber(MIN_ROOM, MAX_ROOM),
    guests: getRandomNumber(MIN_GUESTS, MAX_GUESTS),
    checkin: checkTimes[getRandomNumber(0, checkTimes.length - 1)],
    checkout: checkTimes[getRandomNumber(0, checkTimes.length - 1)],
    features: getRandomNumberValues(features),
    description: descriptions[getRandomNumber(0, descriptions.length - 1)],
    photos: getRandomNumberValues(photos),
    avatar: `img/avatars/user${avatarsNum[getRandomNumber(0, avatarsNum.length - 1)]}.png`,
  }
);

const createFlyers = () => Array.from({length: QUANITY_GENERATION}, createOffer);

export {createFlyers, createOffer};
