import { isEscapeKey } from './util';

const dataSuccess = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');
const closeButton = dataSuccess.querySelector('.success__button');

function createSuccessMessage() {
  body.append(dataSuccess);


  function closeByEsc(evt) {
    if (isEscapeKey(evt)) {
      dataSuccess.remove();
      document.removeEventListener('keydown', closeByEsc);

    }
  }

  function closeByButton() {
    dataSuccess.remove();
    closeButton.removeEventListener('click', closeByButton);

  }

  function closeByClick(evt) {
    if (!evt.target.closest('.success__inner')) {
      dataSuccess.remove();
      document.removeEventListener('click', closeByClick);
    }
  }

  closeButton.addEventListener('click', closeByButton);
  document.addEventListener('click', closeByClick);
  document.addEventListener('keydown', closeByEsc);


}

export {createSuccessMessage};
