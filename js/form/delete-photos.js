const uploadOverlay = document.querySelector('.img-upload__overlay');
const effectItemPicture = document.querySelectorAll('.effects__preview');
const defalutPicture = uploadOverlay.querySelector('.img-upload__preview').querySelector('img');
const scaleValue = document.querySelector('.scale__control--value');
const originalChecked = document.querySelector('input[type="radio"][value="none"]');
const hashtagValue = document.querySelector('.text__hashtags');
const descriptionValue = document.querySelector('.text__description');
const sliderParent = document.querySelector('.img-upload__effect-level');
const fileChooser = document.querySelector('#upload-file');

function deletePhotos() {
  const pristineError = document.querySelectorAll('.pristine-error');
  if (pristineError) {
    pristineError.forEach((element) => {
      element.remove();
    });
  }

  defalutPicture.src = '';
  originalChecked.checked = true;
  scaleValue.value = '100%';
  descriptionValue.value = '';
  hashtagValue.value = '';
  sliderParent.classList.add('hidden');
  fileChooser.value = '';
  for (let i = 0; i <= effectItemPicture.length - 1; i++) { // применяем картинку к каждому превью шаблона
    effectItemPicture[i].style.backgroundImage = '';
  }

}

export {deletePhotos};
