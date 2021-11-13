import {renderOffer} from './popup.js';

const map = document.querySelector('#map-canvas');

const disabledMap = () => {
  const mapFilter = document.querySelector('.map__filters');
  // const featuresMap = document.querySelector('.map__features');

  mapFilter.classList.add('ad-form--disabled');
  // featuresMap.setAttribute('disabled', 'disabled');
};

const activeMap = () => {
  const mapFilter = document.querySelector('.map__filters');

  mapFilter.classList.remove('ad-form--disabled');
};

map.appendChild(renderOffer);

export {disabledMap, activeMap};
