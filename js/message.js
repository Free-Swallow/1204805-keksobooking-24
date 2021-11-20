import {disengageMap} from './map.js';

const errorTemplate = document.querySelector('#error').content;
const errorMessage = errorTemplate.querySelector('div');
const successTemplate = document.querySelector('#success').content;
const successMessage = successTemplate.querySelector('div');
const body = document.querySelector('body');
const ALERT_SHOW_TIME = 3000;
const KeysClose = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

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

  disengageMap();

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const getSubscriptionResult = (popup) => {
  const cloneMessage = popup.cloneNode(true);

  body.appendChild(cloneMessage);

  function closeWindow() {
    cloneMessage.remove();
    document.removeEventListener('click', onClosePopup);
    document.removeEventListener('keydown', onCloseKeyPopup);
  }

  function onCloseKeyPopup(evt) {
    if (evt.key === KeysClose.ESCAPE || evt.key === KeysClose.ESC) {
      evt.preventDefault();
      closeWindow();
    }
  }

  function onClosePopup() {
    closeWindow();
  }


  document.addEventListener('keydown', onCloseKeyPopup);
  document.addEventListener('click', onClosePopup);
};

const getSuccessMessage = () => getSubscriptionResult(successMessage);
const getErrorMessage = () => getSubscriptionResult(errorMessage);

export {showAlert, getSuccessMessage, getErrorMessage};
