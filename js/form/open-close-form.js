import {isEscapeKey} from '../util';
import {fillPhotos} from './fill-photos';
import {deletePhotos} from './delete-photos';

function openForm() {
  const body = document.querySelector('body');
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  const uploadControl = document.querySelector('.img-upload__input');
  const uploadCloseButton = uploadOverlay.querySelector('.img-upload__cancel');

  function removeHiddenToForm (evt) {
    fillPhotos(evt); // заполняем все шаблоны-превью и основную картинку, выбранной

    // затем показываем окно формы
    body.classList.add('modal-open');
    uploadOverlay.classList.remove('hidden');
    uploadCloseButton.addEventListener('click', addHiddenToForm);
    document.addEventListener('keydown', addHiddenToFormByEsc);

  }
  function addHiddenToForm () {
    uploadOverlay.classList.add('hidden');
    deletePhotos(); // возвращаем все фото обратно на заглушки
    body.classList.remove('modal-open');
    uploadCloseButton.removeEventListener('click', addHiddenToForm);
  }
  function addHiddenToFormByEsc (evt) {
    if (isEscapeKey(evt)) {
      uploadOverlay.classList.add('hidden');
      uploadCloseButton.removeEventListener('keydown', addHiddenToFormByEsc);
    }
  }

  uploadControl.addEventListener('change', removeHiddenToForm);

}

export {openForm};
