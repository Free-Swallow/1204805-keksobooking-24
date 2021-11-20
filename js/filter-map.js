const filterMap = document.querySelector('.map__filters');
const placeType = filterMap.querySelector('#housing-type');
const placePrice = filterMap.querySelector('#housing-price');
const placeRooms = filterMap.querySelector('#housing-rooms');
const placeGuests = filterMap.querySelector('#housing-guests');
const DEFAULT = 'any';
const PriceRange = {
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

const checkFeatures = ({offer}) => {
  const selected = filterMap.querySelectorAll('input[name="features"]:checked');

  if (offer.features) {
    return [...selected].every((item) => offer.features.includes(item.value));
  }

  return offer.features;
};

const checkPlaceType = ({offer}) => placeType.value === DEFAULT || offer.type === placeType.value;
const checkRooms = ({offer}) => placeRooms.value === DEFAULT || offer.rooms === Number(placeRooms.value);
const checkGuests = ({offer}) => placeGuests.value === DEFAULT || offer.guests === Number(placeGuests.value);
const checkPrice = ({offer}) => placePrice.value === DEFAULT ||  offer.price >= PriceRange[placePrice.value].START && offer.price < PriceRange[placePrice.value].END;

const filterOffers = (offers) => offers.filter((offer) => checkPlaceType(offer) && checkRooms(offer) && checkGuests(offer) && checkPrice(offer) && checkFeatures(offer));

const setFilterEditing = (callback) => {
  filterMap.addEventListener('change', callback);
};

export {filterOffers, setFilterEditing};
