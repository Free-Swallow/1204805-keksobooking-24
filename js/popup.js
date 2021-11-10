import {getOffer} from './generating-offers.js';

const map = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

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

const sortingFeatures = (offer, cardList) => {
  const list = cardList.querySelectorAll('li');

  list.forEach((currentList) => {
    const complianceCheck = offer.some((currentOffer) => currentList.classList.contains(`popup__feature--${  currentOffer}`),
    );

    if (!complianceCheck) {
      currentList.remove();
    }
  });
  return list;
};

const generationPhotos = (offer, photos) => {
  const photosFragment = document.createDocumentFragment();
  const photoPattern = photos.querySelector('.popup__photo');
  photos.innerHTML = '';

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
  if (offer.title) {
    titleCard.textContent = offer.title;
  } else {
    titleCard.remove();
  }

  const addressCard = cardClone.querySelector('.popup__text--address');
  if (offer.address) {
    addressCard.textContent = offer.address;
  } else {
    addressCard.remove();
  }

  const priceCard = cardClone.querySelector('.popup__text--price');
  if (offer.price) {
    priceCard.textContent = offer.price;
  } else {
    priceCard.remove();
  }

  const typeCard = cardClone.querySelector('.popup__type');
  if (offer.type) {
    typeCard.textContent = getPlace(offer.type);
  } else {
    typeCard.remove();
  }

  const capacityCard = cardClone.querySelector('.popup__text--capacity');
  if (offer.rooms && offer.guests) {
    capacityCard.textContent = `${offer.rooms} комнаты для ${offer.guests}`;
  } else {
    capacityCard.remove();
  }

  const timeCard = cardClone.querySelector('.popup__text--time');
  if (offer.checkin && offer.checkout) {
    timeCard.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    timeCard.remove();
  }

  const featuresCard = cardClone.querySelector('.popup__features');
  if (offer.features) {
    sortingFeatures(offer.features, featuresCard);
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

const sum = createCard(getOffer());
map.appendChild(sum);
