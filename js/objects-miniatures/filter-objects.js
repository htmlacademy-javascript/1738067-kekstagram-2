import { randomID } from '../util';
import { displayPictures } from './display-miniatures';
import { getData } from '../get-data';

const MIN_INTEGER = 0;
const MAX_INTEGER = 24;
const QUANTITY_RANDOM_PHOTOS = 10;

const pictures = document.querySelector('.pictures'); // блок, куда мы выгружаем контент
let objects = [];

// Получаем данные с сервера
getData((data) => {
  objects = data; // присваиваем полученные данные в objects
  defaultFilter(); // или вызываем другую нужную функцию
});

// очистка всех фотографий
function clear() {
  const miniature = pictures.querySelectorAll('a');
  miniature.forEach((element) => {
    pictures.removeChild(element);
  });
}

// по умолчанию
function defaultFilter() {
  clear(); // Очистка предыдущих фото
  displayPictures(objects); // Отображение новых фото после дебаунс

}

// рандомные фото
const generateRandomID = randomID(MIN_INTEGER, MAX_INTEGER, QUANTITY_RANDOM_PHOTOS);
function createRandomPhotos() {
  const arrayOfNums = generateRandomID();
  const randomPhotos = [];
  for (let i = 0; i < arrayOfNums.length; i++) {
    randomPhotos.push(objects[arrayOfNums[i]]);
  }
  clear();
  displayPictures(randomPhotos);

}

// обсуждаемые фото
function mostDiscussedPhotos() {
  const copyObjects = objects.map((element) => element);
  const sortedObjects = copyObjects.sort((a,b) => b.comments.length - a.comments.length);
  clear();
  displayPictures(sortedObjects);
}

export {defaultFilter, createRandomPhotos, mostDiscussedPhotos};
