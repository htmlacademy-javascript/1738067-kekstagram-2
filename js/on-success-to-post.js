import { isEscapeKey } from './util';

const dataSuccess = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');
const closeButton = dataSuccess.querySelector('.success__button');

function createSuccessMessage() {
  body.append(dataSuccess);


  function onEscapeKeydown(evt) {
    if (isEscapeKey(evt)) {
      dataSuccess.remove();
      document.removeEventListener('keydown', onEscapeKeydown);

    }
  }

  function onCloseButtonClick() {
    dataSuccess.remove();
    closeButton.removeEventListener('click', onCloseButtonClick);

  }

  function onModalClick(evt) {
    if (!evt.target.closest('.success__inner')) {
      dataSuccess.remove();
      document.removeEventListener('click', onModalClick);
    }
  }

  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onEscapeKeydown);


}

export {createSuccessMessage};
