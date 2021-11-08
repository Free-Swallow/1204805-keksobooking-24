import {createFlyers} from './generating-offers.js';

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createdDataFlyers = createFlyers();
const offerListFregment = document.createDocumentFragment();
const mapCanvas = document.querySelector('#map-canvas');



const getPlace = (place) => {
  switch (place) {
    case 'palace':
      return 'Дворец';
    case 'flat':
      return 'Квартира';
    case 'house':
      return 'Дом';
    case 'bungalow':
      return 'Бунгало' ;
    case 'hotel':
      return 'Отель';
  }
};

createdDataFlyers.forEach((offer) => {
  const cardClone = cardTemplate.cloneNode(true);
  const featursCardList = cardClone.querySelector('.popup__features');
  const photoWrapper = cardClone.querySelector('.popup__photos');
  const photo = photoWrapper.querySelector('.popup__photo');
  const photoFragment = document.createDocumentFragment();

  Object.keys(offer).forEach((k) => offer[k] == null && delete cardClone[k]);

  cardClone.querySelector('.popup__title').textContent = offer.title;
  cardClone.querySelector('.popup__text--address').textContent = offer.address;
  cardClone.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardClone.querySelector('.popup__type').textContent = getPlace(offer.type);
  cardClone.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests}`;
  cardClone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardClone.querySelector('.popup__features').innerHTML = '';
  cardClone.querySelector('.popup__features').textContent = offer.features;
  cardClone.querySelector('.popup__description').textContent = offer.description;
  cardClone.querySelector('.popup__photos').innerHTML = '';

  for (let i = 0; i < offer.photos.length; i++) {
    const photoElement = photo.cloneNode(true);
    photoElement.src = offer.photos[i];
    photoFragment.appendChild(photoElement);
  }

  cardClone.querySelector('.popup__avatar').src = offer.avatar;
  photoWrapper.append(photoFragment);
  offerListFregment.appendChild(cardClone);

  mapCanvas.append(offerListFregment)
});
