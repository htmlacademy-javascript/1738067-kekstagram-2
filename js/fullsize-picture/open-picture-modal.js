import { createCommentList } from './comments/createCommentList';
import { objects } from '../objects-miniatures/data';


// общие переменные
const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');

// переменные модульного окна
const bigPicture = document.querySelector('.big-picture');
const imageBlock = bigPicture.querySelector('.big-picture__img');
const socialCommentsLoader = bigPicture.querySelector('.comments-loader');
const commentsCount = bigPicture.querySelector('.social__comment-shown-count');
const imageModal = imageBlock.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');
const description = bigPicture.querySelector('.social__caption');


// открытие модульного окна по нажатию на миниатюру
function openPictureModal () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
}

// вызов функции openPictureModal при клике на миниатюру
pictures.addEventListener('click', (evt) => {

  if (evt.target.matches('[class="picture__img"]')) {
    evt.preventDefault();
    // находим каждый элемент, НА который надо менять
    const parentBlock = evt.target.closest('a');
    const targetImage = parentBlock.querySelector('.picture__img').src;
    const targetLikes = parentBlock.querySelector('.picture__likes').textContent;
    // берём айдишник родительского блока, чтобы манипулировать с блоком
    const idParentBlock = parentBlock.id;
    const commentsArray = objects[idParentBlock].comments;

    description.textContent = objects[idParentBlock].description;
    imageModal.src = targetImage;
    likesCount.textContent = targetLikes;
    commentsTotalCount.textContent = objects[idParentBlock].comments.length;

    if (commentsArray.length <= 5) {
      socialCommentsLoader.classList.add('hidden');
      commentsCount.textContent = parentBlock.querySelector('.picture__comments').textContent;
    } else {
      socialCommentsLoader.classList.remove('hidden');
    }

    const copyOfCommentsArray = Array.from(commentsArray);

    createCommentList(copyOfCommentsArray);

    openPictureModal();
  }
});

export {openPictureModal};
