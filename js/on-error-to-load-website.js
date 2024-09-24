const dataError = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.querySelector('body');

const loadWebSiteErrorMessage = () => {
  body.append(dataError);
};

export {loadWebSiteErrorMessage};

