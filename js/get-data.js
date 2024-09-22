import { loadWebSiteErrorMessage } from './on-error-to-load-website.js';

const options = {
  method: 'GET',
  credential: 'same-origin',
};

const getData = (onSuccess) => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data', options)
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
    loadWebSiteErrorMessage();
  });


export {getData};
