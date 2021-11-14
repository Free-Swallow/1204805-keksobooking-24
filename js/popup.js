import {createOffer} from './generating-offers.js';

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const photoPattern = cardTemplate.querySelector('.popup__photo');

const placeСonvert = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const sortingFeatures = (features) => {
  const featuresFragment = document.createDocumentFragment();

  for (const feature of features) {
    const liFeature = document.createElement('li');
    liFeature.classList.add('popup__feature', `popup__feature--${feature}`);
    featuresFragment.appendChild(liFeature);
  }
  return featuresFragment;
};

const generationPhotos = (offer) => {
  const photosFragment = document.createDocumentFragment();

  offer.forEach((currentUrl) => {
    const photoElement = photoPattern.cloneNode(true);
    photoElement.src = currentUrl;
    photosFragment.appendChild(photoElement);
  });

  return photosFragment;
};

const createCard = (offer) => {
  const cardClone = cardTemplate.cloneNode(true);

  const titleCard = cardClone.querySelector('.popup__title');
  titleCard.textContent = offer.title;


  const addressCard = cardClone.querySelector('.popup__text--address');
  addressCard.textContent = offer.address;

  const priceCard = cardClone.querySelector('.popup__text--price');
  priceCard.textContent = `${offer.price} ₽/ночь`;

  const typeCard = cardClone.querySelector('.popup__type');
  typeCard.textContent = placeСonvert[offer.type];

  const capacityCard = cardClone.querySelector('.popup__text--capacity');
  capacityCard.textContent = `${offer.rooms} комнаты для ${offer.guests}`;

  const timeCard = cardClone.querySelector('.popup__text--time');
  timeCard.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const featuresCard = cardClone.querySelector('.popup__features');
  if (offer.features) {
    featuresCard.appendChild(sortingFeatures(offer.features));
  } else {
    featuresCard.remove();
  }

  const cardDescription = cardClone.querySelector('.popup__description');
  if (offer.description) {
    cardDescription.textContent = offer.description;
  } else {
    cardDescription.remove();
  }

  const photoWrapper = cardClone.querySelector('.popup__photos');
  photoWrapper.innerHTML = '';
  if (offer.photos) {
    photoWrapper.appendChild(generationPhotos(offer.photos, photoWrapper));
  } else {
    photoWrapper.remove();
  }

  const avatarCard = cardClone.querySelector('.popup__avatar');
  if (offer.avatar) {
    avatarCard.src = offer.avatar;
  } else {
    avatarCard.remove();
  }

  return cardClone;
};

const renderOffer = createCard(createOffer());

export {renderOffer};
