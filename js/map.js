import {createCard} from './ad-card.js';
import {setAddress} from './form.js';

const mapWrapper = document.querySelector('#map-canvas');
const defaultCoords = {
  lat: 35.65000,
  lng: 139.75000,
};

const DEFAULT_SCALE = 13;

// MAP STATUS

const disabledMap = () => {
  const mapFilter = document.querySelector('.map__filters');
  mapFilter.classList.add('ad-form--disabled');
};

disabledMap();

const activateMap = () => {
  const mapFilter = document.querySelector('.map__filters');
  mapFilter.classList.remove('ad-form--disabled');
};

// ADD MAP

const map = L.map(mapWrapper)
  .on('load', activateMap)
  .setView(defaultCoords, DEFAULT_SCALE);

const markerGroup = L.layerGroup().addTo(map);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon(
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

// ADD MARKER

const mainPin = L.marker(
  defaultCoords,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPin.addTo(map);

const setDefaultCoords = () => {
  mainPin.setLatLng(defaultCoords);
};

// MAP RESET

const resetAllMap = () => {
  mainPin.setLatLng(defaultCoords);
  map.setView(defaultCoords, DEFAULT_SCALE);
  map.closePopup();
};

// CREATE PINS

const addOffersToMap = (offers) => {
  resetAllMap();
  markerGroup.clearLayers();
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

const closePopup = ()=> {
  map.closePopup();
};

const onMarkerMove = (evt) => {
  const latLng = evt.target.getLatLng();

  setAddress(latLng);
};

mainPin.addEventListener('moveend', onMarkerMove);

export {
  disabledMap,
  activateMap,
  addOffersToMap,
  mapWrapper,
  closePopup,
  map,
  defaultCoords,
  setDefaultCoords,
  resetAllMap
};
