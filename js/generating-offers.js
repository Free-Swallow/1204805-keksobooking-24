import {getRandomNumber, getRandomFractionalNumber, getRandomNumberValues} from './utils.js';

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
  ' wifi',
  ' dishwasher',
  ' parking',
  ' washer',
  ' elevator',
  ' conditioner',
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

const MIN_ROOM = 1;
const MAX_ROOM = 4;
const MIN_GUESTS = 1;
const MAX_GUESTS = 6;

const getOffer = () => (
  {
    title: titles[getRandomNumber(0, titles.length - 1)],
    address: [getRandomFractionalNumber(35.65000, 35.70000, 5), getRandomFractionalNumber(139.70000, 139.80000, 5)],
    price: getRandomNumber(10000, 125000),
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

const createFlyers = () => Array.from({length: 10}, getOffer);

createFlyers;

export {createFlyers};
