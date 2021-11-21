const DEFAULT = 'any';
const priceRange = {
  low: {
    start: 0,
    end: 10000,
  },
  middle: {
    start: 10000,
    end: 50000,
  },
  high: {
    start: 50000,
    end: Infinity,
  },
};
const filterMap = document.querySelector('.map__filters');
const placeType = filterMap.querySelector('#housing-type');
const placePrice = filterMap.querySelector('#housing-price');
const placeRooms = filterMap.querySelector('#housing-rooms');
const placeGuests = filterMap.querySelector('#housing-guests');

const checkFeatures = ({offer}) => {
  const selected = filterMap.querySelectorAll('input[name="features"]:checked');

  if (offer.features) {
    return [...selected].every((item) => offer.features.includes(item.value));
  }

  return offer.features;
};

const checkPlaceType = ({offer}) => (placeType.value === DEFAULT || offer.type === placeType.value);
const checkRooms = ({offer}) => placeRooms.value === DEFAULT || offer.rooms === Number(placeRooms.value);
const checkGuests = ({offer}) => placeGuests.value === DEFAULT || offer.guests === Number(placeGuests.value);
const checkPrice = ({offer}) => placePrice.value === DEFAULT ||  offer.price >= priceRange[placePrice.value].start && offer.price < priceRange[placePrice.value].end;

const onFilterOffers = (offers) => {
  const offersFiltered = [];

  for (let i = 0; i < offers.length; i++) {

    if (checkPlaceType(offers[i])
      && checkRooms(offers[i])
      && checkGuests(offers[i])
      && checkPrice(offers[i])
      && checkFeatures(offers[i])) {
      offersFiltered.push(offers[i]);
    }

    if (offersFiltered.length === 10) {
      break;
    }
  }

  return offersFiltered;
};

const setFilterEditing = (callback) => {
  filterMap.addEventListener('change', callback);
};

export {onFilterOffers, setFilterEditing};
