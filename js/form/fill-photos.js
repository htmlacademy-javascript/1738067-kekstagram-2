import { deletePhotos } from './delete-photos';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const defalutPicture = uploadOverlay.querySelector('.img-upload__preview').querySelector('img');
const effectItemPicture = document.querySelectorAll('.effects__preview');

const fillPhotos = () => {

  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const loadedPicture = URL.createObjectURL(file);
    defalutPicture.src = loadedPicture;
    for (let i = 0; i <= effectItemPicture.length - 1; i++) { // применяем выбранную картинку к каждому превью шаблона
      effectItemPicture[i].style.backgroundImage = `url(${loadedPicture})`;
    }
  } else {
    deletePhotos();
  }

};

export {fillPhotos};
