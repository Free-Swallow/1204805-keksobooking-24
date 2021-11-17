import './ad-card.js';
import './form.js';
import {addOffersToMap} from './map.js';
import {displayFetchOffers} from './api.js';
import {offerFiltration, setFilterEditing} from './filter-map.js';
import {showAlert} from './message.js';

const MAX_ADS_AMOUNT = 10;
const TIME_DEBOUNCE = 500;

displayFetchOffers((data) => {
  addOffersToMap(data.slice(0, MAX_ADS_AMOUNT));
  setFilterEditing(_.debounce(
    () =>
      addOffersToMap(offerFiltration(data).slice(0, MAX_ADS_AMOUNT  )),
    TIME_DEBOUNCE,
  ));
}, showAlert);
