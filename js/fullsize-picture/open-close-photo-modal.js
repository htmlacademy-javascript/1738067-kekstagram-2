import { getData } from '../get-data';
import { isEscapeKey } from '../util';

const DEFAULT_STEP = 5;
const [WIDTH, HEIGHT] = [35, 35];

// общие переменные
const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');

// переменные модульного окна
const bigPicture = document.querySelector('.big-picture'); // общее модальное окно (окно + затенение фона)
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const imageBlock = bigPicture.querySelector('.big-picture__img'); // блок с фотографией
const imageModal = imageBlock.querySelector('img'); // фото

const socialCommentsLoader = bigPicture.querySelector('.comments-loader'); // "Загрузить ещё"
const commentsCount = bigPicture.querySelector('.social__comment-shown-count'); // сколько комментариев отображено
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count'); // сколько всего комментариев у фотографии
const commentsSection = document.querySelector('.social__comments'); // секция с комментариями

const likesCount = bigPicture.querySelector('.likes-count'); // количество лайков
const description = bigPicture.querySelector('.social__caption'); // описание под фото

let commentsData = [];
let countComments = 0;
let objects;

function onSuccess(data) {
  objects = data;
  commentsData = data;
}

const fetchData = getData(onSuccess);
fetchData();

function closePhoto() {

  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  countComments = 0;

  removeListenersForCloseModal();

}

function closeByClick(evt) {
  if (!(evt.target.closest('.big-picture__preview'))) {
    closePhoto();
  }
}

function closeByEsc(evt) {
  if (isEscapeKey(evt)) {
    closePhoto();
  }
}

function addListenersForCloseModal() {

  // закрытие модульного окна по клику на крестик
  closeButton.addEventListener('click', closePhoto);

  // для удобства закрытие на нажатие "мимо" открытого модульного окна
  bigPicture.addEventListener('click', closeByClick);

  // закрытие модульного окна по нажатию ESC
  document.addEventListener('keydown', closeByEsc);

}

function removeListenersForCloseModal() {

  closeButton.removeEventListener('click', closePhoto);
  bigPicture.removeEventListener('click', closeByClick);
  document.removeEventListener('keydown', closeByEsc);
  socialCommentsLoader.removeEventListener('click', createCommentList);

}

function createLiElement(avatar, name, message) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');

  img.classList.add('social_picture');
  img.src = avatar;
  img.alt = name;
  img.width = WIDTH;
  img.height = HEIGHT;

  p.textContent = message;
  p.classList.add('social__text');

  li.classList.add('social__comment');
  li.appendChild(img);
  li.appendChild(p);

  return commentsSection.appendChild(li);
}

const createCommentsFragment = (arrays) => {
  const commentsFragment = document.createDocumentFragment();

  arrays.forEach((element) => {
    const indexAvatar = element.avatar;
    const indexName = element.name;
    const indexMessage = element.message;

    createLiElement(indexAvatar, indexName, indexMessage);

  });

  return commentsFragment;
};

function createCommentList() {
  const countOfStep = countComments + DEFAULT_STEP;
  const areAllCommentsShown = countOfStep >= commentsData.length;
  const fiveComments = commentsData.slice(countComments, countOfStep);
  const commentsFragment = createCommentsFragment(fiveComments);

  countComments = areAllCommentsShown ? commentsData.length : countOfStep;
  commentsCount.textContent = countComments;
  commentsSection.append(commentsFragment);

  if (areAllCommentsShown) {
    socialCommentsLoader.classList.add('hidden');
  }

  socialCommentsLoader.addEventListener('click', createCommentList);

}

function openPhoto(evt) {
  const target = evt.target;
  if (target.matches('[class="picture__img"]')) {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');

    addListenersForCloseModal();

    // находим каждый элемент, НА который надо менять
    const parentBlock = target.closest('a');
    const targetImage = parentBlock.querySelector('.picture__img').src;
    const targetLikes = parentBlock.querySelector('.picture__likes').textContent;
    commentsSection.innerHTML = '';

    commentsCount.textContent = DEFAULT_STEP; // ставим дефолтное значение в 5, при открытии картинки

    // берём айдишник родительского блока, чтобы манипулировать с блоком
    const idParentBlock = parentBlock.id;
    const commentsArray = objects[idParentBlock].comments;
    commentsData = commentsArray;

    description.textContent = objects[idParentBlock].description;
    imageModal.src = targetImage;
    likesCount.textContent = targetLikes;
    commentsTotalCount.textContent = objects[idParentBlock].comments.length;

    // если в массиве комментариев меньше 5, то закрываем "Загрузить ещё" и количество отображённых комментариев == максимальное количество комментирев в массиве
    if (commentsArray.length <= DEFAULT_STEP) {
      socialCommentsLoader.classList.add('hidden');
      commentsCount.textContent = parentBlock.querySelector('.picture__comments').textContent;
    } else {
      socialCommentsLoader.classList.remove('hidden');
    }

    createCommentList(commentsArray);
  }

}

pictures.addEventListener('click', openPhoto);

export {openPhoto, closePhoto};
