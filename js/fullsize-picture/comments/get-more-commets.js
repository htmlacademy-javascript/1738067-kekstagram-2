function getMoreComments(objectId) {
  const commentsSection = document.querySelector('.social__comments');
  const bigPicture = document.querySelector('.big-picture');
  const commentsCount = bigPicture.querySelector('.social__comment-shown-count');
  const socialCommentsLoader = bigPicture.querySelector('.comments-loader');
  const counter = bigPicture.querySelector('.social__comments').children;

  const arrayLength = objectId.length - 1;

  for (let i = 0; i < 5; i++) {
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
    if (arrayLength < 5 && i === arrayLength) {
      break;
    }
    if (arrayLength <= 5) {
      socialCommentsLoader.classList.add('hidden');
    }

  }

  commentsCount.textContent = counter.length;

  objectId.splice(0, 5);

  return 1;

}

export {getMoreComments};
