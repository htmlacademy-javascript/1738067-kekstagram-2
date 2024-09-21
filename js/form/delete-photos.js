const uploadOverlay = document.querySelector('.img-upload__overlay');
const effectItemPicture = document.querySelectorAll('.effects__preview');
const defalutPicture = uploadOverlay.querySelector('.img-upload__preview').children[0];
const scaleValue = document.querySelector('.scale__control');
const originalChecked = document.querySelector('input[type="radio"][value="none"]');
const hashtagValue = document.querySelector('.text__hashtags');
const descriptionValue = document.querySelector('.text__description');

function deletePhotos() {

  defalutPicture.src = '';
  originalChecked.checked = true;
  scaleValue.value = '100%';
  descriptionValue.value = '';
  hashtagValue.value = '';
  for (let i = 0; i <= effectItemPicture.length - 1; i++) { // применяем картинку к каждому превью шаблона
    effectItemPicture[i].style.backgroundImage = '';
  }

}

export {deletePhotos};
