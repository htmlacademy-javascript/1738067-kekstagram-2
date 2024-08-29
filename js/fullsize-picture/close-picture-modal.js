import {isEscapeKey} from '../util.js';
import {removeMoreCommentsListener} from './comments/createCommentList.js';
import {getMoreComments} from './comments/get-more-commets';


const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closePictureButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentsLoader = bigPicture.querySelector('.comments-loader');
const commentsCount = bigPicture.querySelector('.social__comment-shown-count');


function closePictureModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsCount.textContent = 5;

  document.removeEventListener('click', closeByClick);
  bigPicture.removeEventListener('click', closeByEsc);
  removeMoreCommentsListener(socialCommentsLoader, moreComments);
}

// создаём функцию пустышку, чтобы можно было удалить слушатель с кнопки "Загрузить ещё"
function moreComments() {
  getMoreComments();
}

function closeByClick(evt) {
  if (!(evt.target.closest('.big-picture__preview'))) {
    closePictureModal();
  }
}

function closeByEsc(evt) {
  if (isEscapeKey(evt)) {
    closePictureModal();
  }
}

// закрытие модульного окна по клику на крестик
closePictureButton.addEventListener('click', () => {
  closePictureModal();
});

// для удобства закрытие на нажатие "мимо" открытого модульного окна
bigPicture.addEventListener('click', closeByClick);

// закрытие модульного окна по нажатию ESC
document.addEventListener('keydown', closeByEsc);

export {closePictureModal};
