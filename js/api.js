import {activateMap} from './map.js';

const FETCH_OFFERS_GET = 'https://24.javascript.pages.academy/keksobooking/data';
const FETCH_OFFERS_GIVEAWAY = 'https://24.javascript.pages.academy/keksobooking';
const statusOk = 200;


const displayFetchOffers = (onSuccess, onError) => fetch(FETCH_OFFERS_GET)
  .then((response) => {
    if (response.ok) {
      activateMap();
      return response.json();
    }

    throw new Error();
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch(() => {
    onError('Нет ответа от сервера, перезагрузите страницу, пжлст');
  });

const createAd = (body, onSuccess, onError) => {
  fetch(
    FETCH_OFFERS_GIVEAWAY,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.status === statusOk) {
      onSuccess();
    } else {
      onError();
    }
  })
    .catch(onError);
};

export {
  displayFetchOffers,
  createAd
};
