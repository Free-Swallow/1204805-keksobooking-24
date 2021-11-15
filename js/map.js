import {createFlyers} from './generating-offers.js';
import {createCard} from './popup.js';

const mapWrapper = document.querySelector('#map-canvas');
const LAT_CENTER_MAP = 35.65000;
const LNG_CENTER_MAP = 139.75000;
const DEFAULT_SCALE = 13;

const disabledMap = () => {
  const mapFilter = document.querySelector('.map__filters');
  // const featuresMap = document.querySelector('.map__features');

  mapFilter.classList.add('ad-form--disabled');
  // featuresMap.setAttribute('disabled', 'disabled');
};

disabledMap();

const activateMap = () => {
  const mapFilter = document.querySelector('.map__filters');

  mapFilter.classList.remove('ad-form--disabled');
};

const map = L.map(mapWrapper)
  .on('load', activateMap)
  .setView({
    lat: LAT_CENTER_MAP,
    lng: LNG_CENTER_MAP,
  }, DEFAULT_SCALE);

const markerGroup = L.layerGroup().addTo(map);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPin = L.icon(
  {
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [52, 26],
  },
);

const offerPin = L.icon(
  {
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [40, 20],
  },
);

const marker = L.marker(
  {
    lat: LAT_CENTER_MAP,
    lng: LNG_CENTER_MAP,
  },
  {
    draggable: true,
    icon: mainPin,
  },
);

marker.addTo(map);

// const onResetMainPin = () => {
//   marker.setLatLng({
//       lat: LAT_CENTER_MAP,
//       lng: LNG_CENTER_MAP,
//   });

// const onResetMap = () => {
//  map.setLatLng({
//    lat: LAT_CENTER_MAP,
//    lng: LNG_CENTER_MAP,
//  }, SCALE);
// };

const addOffersTomap = (offers) => {
  offers.forEach((offer) => {
    const {location} = offer;

    const testMarker = L.marker({
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: offerPin,
    });
    testMarker
      .addTo(markerGroup)
      .bindPopup(() => createCard(offer),
      );
  });
};

addOffersTomap(createFlyers());

export {disabledMap, activateMap, addOffersTomap, marker, LAT_CENTER_MAP, LNG_CENTER_MAP};
