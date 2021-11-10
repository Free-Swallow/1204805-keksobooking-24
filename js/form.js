const disabledPage = () => {
  const form = document.querySelector('.ad-form');
  const formItem = form.querySelectorAll('fieldset');
  const mapFilter = document.querySelector('.map__filters');
  const mapItem = mapFilter.querySelectorAll('select');
  const featuresMap = document.querySelector('.map__features');

  mapItem.forEach((cur) => {
    cur.setAttribute('disabled', 'disabled');
  });

  formItem.forEach((cur) => {
    cur.setAttribute('disabled', 'disabled');
  });

  featuresMap.setAttribute('disabled', 'disabled');
  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('ad-form--disabled');
};

const activePage = () => {
  const form = document.querySelector('.ad-form');
  const formItem = form.querySelectorAll('fieldset');
  const mapFilter = document.querySelector('.map__filters');
  const mapItem = mapFilter.querySelectorAll('select');
  const featuresMap = document.querySelector('.map__features');

  mapItem.forEach((cur) => {
    cur.removeAttribute('disabled', 'disabled');
  });

  formItem.forEach((cur) => {
    cur.removeAttribute('disabled', 'disabled');
  });

  featuresMap.removeAttribute('disabled', 'disabled');
  form.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('ad-form--disabled');
};


disabledPage();

activePage();
