import {getMoreComments} from './get-more-commets';
function createCommentList (objectId) {
  const commentsSection = document.querySelector('.social__comments');
  const bigPicture = document.querySelector('.big-picture');
  const socialCommentsLoader = bigPicture.querySelector('.comments-loader');


  while (commentsSection.firstChild) {
    commentsSection.removeChild(commentsSection.firstChild);
  }

  const arrayLength = objectId.length - 1;

  for (let i = 0; i < 5; i++) {
    // если ВСЯ длина массива === 0, то прекращаем цикл (комментариев нет)
    if (arrayLength + 1 === 0) {
      break;
    }
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');

    img.classList.add('social_picture');
    img.src = objectId[i].comment.avatar;
    img.alt = objectId[i].comment.name;
    img.width = 35;
    img.height = 35;

    p.textContent = objectId[i].comment.message;
    p.classList.add('social__text');

    li.classList.add('social__comment');
    li.appendChild(img);
    li.appendChild(p);

    commentsSection.appendChild(li);

    // если длина массива < 5 и индекс цикла равен длине массива, то останавливаем цикл (защита от ошибок, если комментариев меньше 5)
    if (arrayLength < 5 && i === arrayLength) {
      break;
    }
  }

  function moreComments() {
    getMoreComments(objectId);
  }

  // добавляем слушатель на кнопку загрузки комментариев
  socialCommentsLoader.addEventListener('click', moreComments);

  objectId.splice(0, 5);

}

// создаём функцию удаления слушателя с кнопки загрузки комментариев
// чтобы затем экспортировть в close-picture-modal и при вызове функции закрытия модального окна
// удалить все слушатели
function removeMoreCommentsListener(socialCommentsLoader, moreComments) {
  socialCommentsLoader.removeEventListener('click', moreComments);
}
export {createCommentList, removeMoreCommentsListener};

