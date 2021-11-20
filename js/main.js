import './ad-card.js';
import './form.js';
import {addOffersToMap, map} from './map.js';
import {displayFetchOffers} from './api.js';
import {filterOffers, setFilterEditing} from './filter-map.js';
import {showAlert} from './message.js';

const START_ADS_AMOUNT = 0;
const END_ADS_AMOUNT = 10;
const TIME_DEBOUNCE = 500;

map.on('load', displayFetchOffers((data) => {
  addOffersToMap(data.slice(START_ADS_AMOUNT, END_ADS_AMOUNT));
  setFilterEditing(_.debounce(
    () =>
      addOffersToMap(filterOffers(data).slice(START_ADS_AMOUNT, END_ADS_AMOUNT)),
    TIME_DEBOUNCE,
  ));
}, showAlert));
