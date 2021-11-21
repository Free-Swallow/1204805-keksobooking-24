const placeConvert = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const photoTemplate = document.querySelector('#photo-template').content;
const photoPattern = photoTemplate.querySelector('.popup__photo');

const getFeatures = (features) => {
  const featuresFragment = document.createDocumentFragment();

  features.forEach((feature) => {
    const liFeature = document.createElement('li');
    liFeature.classList.add('popup__feature', `popup__feature--${feature}`);
    featuresFragment.appendChild(liFeature);
  });

  return featuresFragment;
};

const getPhotos = (offers) => {
  const photosFragment = document.createDocumentFragment();

  offers.forEach((currentUrl) => {
    const photoElement = photoPattern.cloneNode(true);
    photoElement.src = currentUrl;
    photosFragment.appendChild(photoElement);
  });

  return photosFragment;
};

const createCard = ({ author, offer }) => {
  const cardClone = cardTemplate.cloneNode(true);

  const titleCard = cardClone.querySelector('.popup__title');
  titleCard.textContent = offer.title;

  const addressCard = cardClone.querySelector('.popup__text--address');
  addressCard.textContent = offer.address;

  const priceCard = cardClone.querySelector('.popup__text--price');
  priceCard.textContent = `${offer.price} ₽/ночь`;

  const typeCard = cardClone.querySelector('.popup__type');
  typeCard.textContent = placeConvert[offer.type];

  const capacityCard = cardClone.querySelector('.popup__text--capacity');
  capacityCard.textContent = `${offer.rooms} комнаты для ${offer.guests}`;

  const timeCard = cardClone.querySelector('.popup__text--time');
  timeCard.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const featuresCard = cardClone.querySelector('.popup__features');
  if (offer.features) {
    featuresCard.appendChild(getFeatures(offer.features));
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
    photoWrapper.appendChild(getPhotos(offer.photos, photoWrapper));
  } else {
    photoWrapper.remove();
  }

  const avatarCard = cardClone.querySelector('.popup__avatar');
  if (author.avatarCard) {
    avatarCard.src = author.avatarCard;
  } else {
    avatarCard.remove();
  }

  return cardClone;
};

export {createCard};
