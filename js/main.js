import './ad-card.js';
import {START_ADS_AMOUNT, END_ADS_AMOUNT} from './form.js';
import {addOffersToMap, map} from './map.js';
import {displayFetchOffers} from './api.js';
import {onFilterOffers, setFilterEditing} from './filter-map.js';
import {showAlert} from './message.js';

const TIME_DEBOUNCE = 500;

map.on('load', displayFetchOffers((data) => {
  addOffersToMap(data.slice(START_ADS_AMOUNT, END_ADS_AMOUNT));
  setFilterEditing(_.debounce(
    () =>
      addOffersToMap(onFilterOffers(data).slice(START_ADS_AMOUNT, END_ADS_AMOUNT)),
    TIME_DEBOUNCE,
  ));
}, showAlert));
