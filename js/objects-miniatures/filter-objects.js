import { randomID } from '../util';
import { displayPictures } from './display-miniatures';

const MIN_INTEGER = 0;
const MAX_INTEGER = 24;
const QUANTITY_RANDOM_PHOTOS = 10;

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const pictures = document.querySelector('.pictures'); // блок, куда мы выгружаем контент


// очистка всех фотографий
function clear() {
  const miniature = pictures.querySelectorAll('a');
  miniature.forEach((element) => {
    pictures.removeChild(element);
  });
}

// по умолчанию
function defaultFilter(callback) {
  filterDefault.addEventListener('click', () => {
    filterDefault.classList.add('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    clear(); // Очистка предыдущих фото
    callback(); // Отображение новых фото после дебаунс
  });
}

// рандомные фото
const generateRandomID = randomID(MIN_INTEGER, MAX_INTEGER, QUANTITY_RANDOM_PHOTOS);
function createRandomPhotos(callback, objects) {
  filterRandom.addEventListener('click', () => {
    filterDefault.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    filterRandom.classList.add('img-filters__button--active');

    const arrayOfNums = generateRandomID();
    const randomPhotos = [];
    for (let i = 0; i < arrayOfNums.length; i++) {
      randomPhotos.push(objects[arrayOfNums[i]]);
    }
    clear();
    callback(randomPhotos);
  });
}

// обсуждаемые фото
function mostDiscussedPhotos(callback, objects) {
  filterDiscussed.addEventListener('click', () => {
    filterDefault.classList.remove('img-filters__button--active');
    filterDiscussed.classList.add('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');

    const copyObjects = objects.map((element) => element);
    const sortedObjects = copyObjects.sort((a,b) => b.comments.length - a.comments.length);
    clear();
    callback(sortedObjects);
    filterDiscussed.removeEventListener('click', mostDiscussedPhotos);
  });
}

export {defaultFilter, createRandomPhotos, mostDiscussedPhotos};
