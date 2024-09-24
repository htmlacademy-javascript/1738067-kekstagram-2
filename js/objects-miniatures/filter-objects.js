import { randomID } from '../util';
import { displayPictures } from './display-miniatures';
import { getData } from '../get-data';

const MIN_INTEGER = 0;
const MAX_INTEGER = 24;
const QUANTITY_RANDOM_PHOTOS = 10;

const pictures = document.querySelector('.pictures'); // блок, куда мы выгружаем контент
let objects = [];

// очистка всех фотографий
const clear = () => {
  const miniatures = pictures.querySelectorAll('a');
  miniatures.forEach((element) => {
    pictures.removeChild(element);
  });
};

// по умолчанию
const defaultFilter = () => {
  clear(); // Очистка предыдущих фото
  displayPictures(objects); // Отображение новых фото после дебаунс

};

// Получаем данные с сервера
getData((data) => {
  objects = data;
  defaultFilter();
});

// рандомные фото
const generateRandomID = randomID(MIN_INTEGER, MAX_INTEGER, QUANTITY_RANDOM_PHOTOS);
const createRandomPhotos = () => {
  const arrayOfNums = generateRandomID();
  const randomPhotos = [];
  for (let i = 0; i < arrayOfNums.length; i++) {
    randomPhotos.push(objects[arrayOfNums[i]]);
  }
  clear();
  displayPictures(randomPhotos);

};

// обсуждаемые фото
const mostDiscussedPhotos = () => {
  const copyObjects = objects.map((element) => element);
  const sortedObjects = copyObjects.sort((a,b) => b.comments.length - a.comments.length);
  clear();
  displayPictures(sortedObjects);
};

export {defaultFilter, createRandomPhotos, mostDiscussedPhotos};
