function deletePhotos() {
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  const effectItemPicture = document.querySelectorAll('.effects__preview');
  const defalutPicture = uploadOverlay.querySelector('.img-upload__preview').children[0];

  defalutPicture.style.backgroundImage = 'url(\'img/upload-default-image.jpg\')';
  for (let i = 0; i <= effectItemPicture.length - 1; i++) { // применяем картинку к каждому превью шаблона
    effectItemPicture[i].style.backgroundImage = 'url(\'img/upload-default-image.jpg\')';
  }

}

export {deletePhotos};
