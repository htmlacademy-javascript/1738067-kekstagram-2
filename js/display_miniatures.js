import {objects} from './data.js';

const displayPictures = function () {

  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const pictures = document.querySelector('.pictures');

  objects.forEach((object) => {
    const clonedTemplate = pictureTemplate.cloneNode(true);

    const pictureLikes = clonedTemplate.querySelector('.picture__likes');
    const pictureComments = clonedTemplate.querySelector('.picture__comments');
    const pictureImage = clonedTemplate.querySelector('.picture__img');
    const commentsCount = object.comments.length;

    pictureImage.src = object.url;
    pictureImage.alt = object.description;
    pictureComments.textContent = commentsCount;
    pictureLikes.textContent = object.likes;

    pictures.appendChild(clonedTemplate);

  });

};


export {displayPictures};
