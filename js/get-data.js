const options = {
  method: 'GET',
  credential: 'same-origin',
};

const getData = (onSuccess, onError) => () => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data', options)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });


export {getData};
