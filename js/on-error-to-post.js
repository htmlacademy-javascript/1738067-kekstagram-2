import { isEscapeKey } from './util';

const postError = document.querySelector('#error').content.querySelector('.error');
const closeButton = postError.querySelector('.error__button');
const body = document.querySelector('body');

const postErrorMessage = () => {
  body.append(postError);


  const onEscapeKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      postError.remove();
      document.removeEventListener('keydown', onEscapeKeydown);

    }
  };

  const onCloseButtonClick = () => {
    postError.remove();
    closeButton.removeEventListener('click', onCloseButtonClick);

  };

  const onModalClick = (evt) => {
    if (!evt.target.closest('.error__inner')) {
      postError.remove();
      document.removeEventListener('click', onModalClick);
    }
  };

  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onEscapeKeydown);
};

export {postErrorMessage};
