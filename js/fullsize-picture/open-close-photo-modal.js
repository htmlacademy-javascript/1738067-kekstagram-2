import { getData } from '../get-data';
import { isEscapeKey } from '../util';

const DEFAULT_STEP = 5;
const WIDTH = 35;
const HEIGHT = 35;

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

const onSuccess = (data) => {
  objects = data;
  commentsData = data;
};

getData(onSuccess);

const onCloseButtonClick = () => {

  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  countComments = 0;

  removeListenersForCloseModal();

};

const onModalClick = (evt) => {
  if (!(evt.target.closest('.big-picture__preview'))) {
    onCloseButtonClick();
  }
};

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    onCloseButtonClick();
  }
};

const addListenersForCloseModal = () => {

  // закрытие модульного окна по клику на крестик
  closeButton.addEventListener('click', onCloseButtonClick);

  // для удобства закрытие на нажатие "мимо" открытого модульного окна
  bigPicture.addEventListener('click', onModalClick);

  // закрытие модульного окна по нажатию ESC
  document.addEventListener('keydown', onEscapeKeydown);

};

const createLiElement = (avatar, name, message) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');

  img.classList.add('social__picture');
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
};

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

const onLoaderClick = () => {
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

  socialCommentsLoader.addEventListener('click', onLoaderClick);

};

// эту функцию не получается сделать переменной с стрелочной функцией, потому что где бы я ни объявил её, у меня нарушается область видимости
function removeListenersForCloseModal() {

  closeButton.removeEventListener('click', onCloseButtonClick);
  bigPicture.removeEventListener('click', onModalClick);
  document.removeEventListener('keydown', onEscapeKeydown);
  socialCommentsLoader.removeEventListener('click', onLoaderClick);

}

const onPhotoClick = (evt) => {
  const target = evt.target;
  if (target.matches('[class="picture__img"]')) {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');

    addListenersForCloseModal();

    // находим каждый элемент, НА который надо менять
    const parentBlock = target.closest('a');
    const targetImage = parentBlock.querySelector('.picture__img').attributes[1].textContent;
    const targetLikes = parentBlock.querySelector('.picture__likes').textContent;
    commentsSection.innerHTML = '';

    commentsCount.textContent = DEFAULT_STEP; // ставим дефолтное значение в 5, при открытии картинки

    // берём айдишник родительского блока, чтобы манипулировать с блоком
    const idParentBlock = parentBlock.id;
    const commentsArray = objects[idParentBlock].comments;
    commentsData = commentsArray;

    description.textContent = objects[idParentBlock].description;
    imageModal.alt = objects[idParentBlock].description;
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

    onLoaderClick(commentsArray);
  }

};

pictures.addEventListener('click', onPhotoClick);

export {onPhotoClick, onCloseButtonClick};
