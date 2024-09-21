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

  closeButton.addEventListener('click', closeByButton);
  document.addEventListener('keydown', closeByEsc);
}

export {postErrorMessage};
