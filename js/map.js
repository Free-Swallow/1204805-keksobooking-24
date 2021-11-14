// const mapWrapper = document.querySelector('#map-canvas');
// const LAT_CENTER_MAP = 35.66000;
// const LNG_CENTER_MAP = 139.75000;
// const SCALE = 13;

const disabledMap = () => {
  const mapFilter = document.querySelector('.map__filters');
  // const featuresMap = document.querySelector('.map__features');

  mapFilter.classList.add('ad-form--disabled');
  // featuresMap.setAttribute('disabled', 'disabled');
};

// disabledMap();

const activedMap = () => {
  const mapFilter = document.querySelector('.map__filters');

  mapFilter.classList.remove('ad-form--disabled');
};

// const map = L.map(mapWrapper)
//   .on('load', activedMap)
//   .setView({
//     lat: LAT_CENTER_MAP,
//     lng: LNG_CENTER_MAP,
//   }, SCALE);

// L.tileLayer(
//   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//   {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   },
// ).addTo(map);

// const marker = L.marker({
//   lat: 35.66660,
//   lng: 139.75000,
// },);

// marker.aadTo(map);

export {disabledMap, activedMap};
