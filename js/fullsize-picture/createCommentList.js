import { objects } from '../objects-miniatures/data';

function createCommentList (objectId) {
  const commentsSection = document.querySelector('.social__comments');

  while (commentsSection.firstChild) {
    commentsSection.removeChild(commentsSection.firstChild);
  }

  objects[objectId].comments.forEach((element) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');

    img.classList.add('social_picture');
    img.src = element.comment.avatar;
    img.alt = element.comment.name;
    img.width = 35;
    img.height = 35;

    p.textContent = element.comment.message;
    p.classList.add('social__text');

    li.classList.add('social__comment');
    li.appendChild(img);
    li.appendChild(p);

    commentsSection.appendChild(li);
  });

  return 123;

}

export {createCommentList};
