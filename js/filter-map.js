const filterMap = document.querySelector('.map__filters');
const placeType = filterMap.querySelector('#housing-type');
const placePrice = filterMap.querySelector('#housing-price');
const placeRooms = filterMap.querySelector('#housing-rooms');
const placeGuests = filterMap.querySelector('#housing-guests');

const PRICE_RANGE = {
  low: {
    START: 0,
    END: 10000,
  },
  middle: {
    START: 10000,
    END: 50000,
  },
  high: {
    START: 50000,
    END: Infinity,
  },
};

const DEFAULT = 'any';

const offerFilters = ({offer}) => {
  const currentFeatures = filterMap.querySelectorAll('input[name="features"]:checked');

  let typeValue = true;
  let roomsValue = true;
  let guestsValue = true;
  let priceValue = true;
  let featuresValue = true;

  if (currentFeatures.length) {
    currentFeatures.forEach((feature) => {
      if (!offer.features) {
        featuresValue = false;
      } else  if (offer.features.indexOf(feature.value) === -1) {
        featuresValue = false;
      }
    });
  }

  if (placeType.value !== DEFAULT) {
    typeValue = offer.type === placeType.value;
  }

  if (placeRooms.value !== DEFAULT) {
    roomsValue = offer.rooms === Number(placeRooms.value);
  }

  if (placeGuests.value !== DEFAULT) {
    guestsValue = offer.guests === Number(placeGuests.value);
  }

  if (placePrice.value !== DEFAULT) {
    priceValue = offer.price >= PRICE_RANGE[placePrice.value].START && offer.price < PRICE_RANGE[placePrice.value].END;
  }

  return typeValue && roomsValue && guestsValue && featuresValue && priceValue;
};

const offerFiltration = (offer) => offer.filter(offerFilters);

const setFilterEditing = (callback) => {
  filterMap.addEventListener('change', callback);
};

export {offerFiltration, setFilterEditing};
