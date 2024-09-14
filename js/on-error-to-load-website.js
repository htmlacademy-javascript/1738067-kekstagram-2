const DATA_ERROR = document.querySelector('#data-error').content.querySelector('.success');
const BODY = document.querySelector('body');

function loadWebSiteErrorMessage() {
  BODY.append(DATA_ERROR);
}

export {loadWebSiteErrorMessage};

