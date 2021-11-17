const FETCH_OFFERS_GET = 'https://24.javascript.pages.academy/keksobooking/data';
const FETCH_OFFERS_GIVEAWAY = 'https://24.javascript.pages.academy/keksobooking';

// LOADER

const displayFetchOffers = (onSuccess, onError) => fetch(FETCH_OFFERS_GET)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
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
    if (response.status === 200) {
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
