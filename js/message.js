import {disabledMap} from './map.js';

const body = document.querySelector('body');
const keysClose = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};
const ALERT_SHOW_TIME = 3000;

// MESSAGE ERROR

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  disabledMap();

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// ERROR MESSAGE

const errorTemplate = document.querySelector('#error').content;
const errorMessage = errorTemplate.querySelector('div');

const getErrorMessage = () => {
  const cloneErrMessage = errorMessage.cloneNode(true);

  body.appendChild(cloneErrMessage);

  const closeErrPopup = () => {
    cloneErrMessage.remove();
    document.addEventListener('click', closeErrPopup);
  };

  const keyCloseErrorPopup = (evt) => {
    if (evt.key === keysClose.ESCAPE || evt.key === keysClose.ESC) {
      cloneErrMessage.remove();
      evt.preventDefault();
    }
  };

  document.addEventListener('keydown', keyCloseErrorPopup);
  document.addEventListener('click', closeErrPopup);

};

// SUCCESS MESSAGE

const successTemplate = document.querySelector('#success').content;
const successMessage = successTemplate.querySelector('div');

const getSuccessMessage = () => {
  const cloneSuccessMessage = successMessage.cloneNode(true);

  body.appendChild(cloneSuccessMessage);

  const closeSuccessPopup = () => {
    cloneSuccessMessage.remove();
    document.addEventListener('click', closeSuccessPopup);
  };

  const keyCloseSuccessPopup = (evt) => {

    if (evt.key === keysClose.ESCAPE || evt.key === keysClose.ESC) {
      cloneSuccessMessage.remove();
      evt.preventDefault();
    }
  };

  document.addEventListener('keydown', keyCloseSuccessPopup);
  document.addEventListener('click', closeSuccessPopup);

};

export {showAlert, getSuccessMessage, getErrorMessage};
