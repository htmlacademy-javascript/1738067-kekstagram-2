function fillPhotos (evt) {
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  const effectItemPicture = document.querySelectorAll('.effects__preview');

  const fileReader = new FileReader();
  fileReader.onload = function () { // добавляем картинку в модальное окно
    const defalutPicture = uploadOverlay.querySelector('.img-upload__preview').children[0];
    defalutPicture.src = fileReader.result;
    for (let i = 0; i <= effectItemPicture.length - 1; i++) { // применяем выбранную картинку к каждому превью шаблона
      effectItemPicture[i].style.backgroundImage = `url(${fileReader.result})`;
    }
  };
  fileReader.readAsDataURL(evt.target.files[0]);

}

export {fillPhotos};
