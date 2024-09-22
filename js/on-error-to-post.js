import { isEscapeKey } from './util';

const postError = document.querySelector('#error').content.querySelector('.error');
const closeButton = postError.querySelector('.error__button');
const body = document.querySelector('body');

function postErrorMessage() {
  body.append(postError);


  function closeByEsc(evt) {
    if (isEscapeKey(evt)) {
      postError.remove();
      document.removeEventListener('keydown', closeByEsc);

    }
  }

  function closeByButton() {
    postError.remove();
    closeButton.removeEventListener('click', closeByButton);

  }

  function closeByClick(evt) {
    if (!evt.target.closest('.error__inner')) {
      postError.remove();
      document.removeEventListener('click', closeByClick);
    }
  }

  closeButton.addEventListener('click', closeByButton);
  document.addEventListener('click', closeByClick);
  document.addEventListener('keydown', closeByEsc);
}

export {postErrorMessage};
