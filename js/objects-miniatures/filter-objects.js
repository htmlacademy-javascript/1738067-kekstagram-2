import { randomID } from '../util';
import { getData } from '../get-data';
import { displayPictures } from './display-miniatures';
import { debounce } from '../util';

const RERENDER_DELAY = 500;
const MIN_INTEGER = 0;
const MAX_INTEGER = 24;
const QUANTITY_RANDOM_PHOTOS = 10;

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const main = document.querySelector('main');
const pictures = document.querySelector('.pictures'); // блок, куда мы выгружаем контент
let objects;

const section = document.createElement('section');
section.classList.add('dublicate');
section.classList.add('pictures');
section.classList.add('container');
main.appendChild(section);

const dublicateSection = main.querySelector('.dublicate');

function onSuccess(data) {
  objects = data;
}
const fetchData = getData(onSuccess);
fetchData();

function defaultFilter() {
  pictures.classList.remove('hidden');
  dublicateSection.innerHTML = '';
}
 
const generateRandomID = randomID(MIN_INTEGER, MAX_INTEGER, QUANTITY_RANDOM_PHOTOS);

function createRandomPhotos() {
  const arrayOfNums = generateRandomID();
  const randomPhotos = [];
  for (let i = 0; i !== arrayOfNums.length - 1; i++) {
    randomPhotos.push(objects[arrayOfNums[i]]);
  }

  dublicateSection.innerHTML = '';
  pictures.classList.add('hidden');

  return displayPictures(randomPhotos, dublicateSection);
}

function mostDiscussedPhotos() {
  const sortedObjects = objects.sort((a,b) => b.comments.length - a.comments.length);
  dublicateSection.innerHTML = '';
  pictures.classList.add('hidden');
  return displayPictures(sortedObjects, dublicateSection);
}

function changeFilter(evt) {

  const target = evt.target;
  switch (target) {
    case filterDefault:
      filterDefault.classList.add('img-filters__button--active');
      filterDiscussed.classList.remove('img-filters__button--active');
      filterRandom.classList.remove('img-filters__button--active');

      debounce(defaultFilter, RERENDER_DELAY)();
      break;
    case filterRandom:
      filterDefault.classList.remove('img-filters__button--active');
      filterDiscussed.classList.remove('img-filters__button--active');
      filterRandom.classList.add('img-filters__button--active');

      debounce(createRandomPhotos, RERENDER_DELAY)();
      break;
    case filterDiscussed:
      filterDefault.classList.remove('img-filters__button--active');
      filterDiscussed.classList.add('img-filters__button--active');
      filterRandom.classList.remove('img-filters__button--active');
      debounce(mostDiscussedPhotos,RERENDER_DELAY)();
      break;

  }

}

function filter() {

  filterDefault.addEventListener('click', changeFilter);
  filterRandom.addEventListener('click', changeFilter);
  filterDiscussed.addEventListener('click', changeFilter);

}

export {filter};
