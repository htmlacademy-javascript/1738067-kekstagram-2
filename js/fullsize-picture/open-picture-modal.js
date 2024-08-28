import { createCommentList } from './createCommentList';
import { objects } from '../objects-miniatures/data';

// общие переменные
const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');

// переменные модульного окна
const bigPicture = document.querySelector('.big-picture');

const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialCommentsLoader = bigPicture.querySelector('.comments-loader');
const imageBlock = bigPicture.querySelector('.big-picture__img');

const imageModal = imageBlock.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');
const description = bigPicture.querySelector('.social__caption');


// открытие модульного окна по нажатию на миниатюру
function openPictureModal () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');
}

// вызов функции openPictureModal при клике на миниатюру
pictures.addEventListener('click', (evt) => {

  if (evt.target.matches('[class="picture__img"]')) {
    evt.preventDefault();
    // находим каждый элемент, НА который надо менять
    const parentBlock = evt.target.closest('a');
    const targetImage = parentBlock.querySelector('.picture__img').src;
    const targetCommentsCount = parentBlock.querySelector('.picture__comments').textContent;
    const targetTotalCommentsCount = parentBlock.querySelector('.picture__comments').textContent;
    const targetLikes = parentBlock.querySelector('.picture__likes').textContent;
    // берём айдишник родительского блока, чтобы манипулировать с блоком
    const idParentBlock = parentBlock.id;

    description.textContent = objects[idParentBlock].description;
    imageModal.src = targetImage;
    likesCount.textContent = targetLikes;
    commentsCount.textContent = targetCommentsCount;
    commentsTotalCount.textContent = targetTotalCommentsCount;


    createCommentList(idParentBlock);
    openPictureModal();
  }
});

export {openPictureModal};
