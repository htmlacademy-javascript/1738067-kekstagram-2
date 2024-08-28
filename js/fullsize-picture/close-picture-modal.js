import {isEscapeKey} from '../util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closePictureButton = bigPicture.querySelector('.big-picture__cancel');

function closePictureModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('click', document.addEventListener);
  closePictureButton.removeEventListener('click', closePictureButton.addEventListener);
  bigPicture.removeEventListener('click', bigPicture.addEventListener);
}

// закрытие модульного окна по клику на крестик
closePictureButton.addEventListener('click', () => {
  closePictureModal();
});

// для удобства закрытие на нажатие "мимо" открытого модульного окна
bigPicture.addEventListener('click', (evt) => {
  if (!(evt.target.closest('.big-picture__preview'))) {
    closePictureModal();
  }
});

// закрытие модульного окна по нажатию ESC
document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closePictureModal();
  }
});

export {closePictureModal};
