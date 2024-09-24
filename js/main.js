import './fullsize-picture/open-close-photo-modal.js';
import {openForm} from './form/open-close-form.js';
import './form/validate-form.js';
import { formSubmit } from './form/validate-form.js';
import { onCloseButtonClick } from './form/open-close-form.js';
import { postErrorMessage } from './on-error-to-post.js';
import { defaultFilter, createRandomPhotos, mostDiscussedPhotos } from './objects-miniatures/filter-objects.js';
import { bufferAction } from './util.js';

const RERENDER_DELAY = 500;

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const selectFilter = (filterName) => {

  switch (filterName) {
    default:
      filterDefault.classList.add('img-filters__button--active');
      break;
    case 'random':
      filterRandom.classList.add('img-filters__button--active');
      break;
    case 'discussed':
      filterDiscussed.classList.add('img-filters__button--active');
      break;
  }

};

const loadPhotos = bufferAction((filterName, callback) => {
  selectFilter(filterName);
  callback(); // Вызов функции фильтрации
}, RERENDER_DELAY);

loadPhotos('default', defaultFilter);

// И теперь мы можем использовать loadPhotos в обработчиках событий
const onDefaultClick = () => {

  filterDefault.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');

  loadPhotos('default', defaultFilter);
};

const onRandomClick = () => {
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.add('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
  loadPhotos('random', createRandomPhotos);
};

const onDiscussClick = () => {
  filterDefault.classList.remove('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.add('img-filters__button--active');
  loadPhotos('discussed', mostDiscussedPhotos);
};

filterDefault.addEventListener('click', onDefaultClick);
filterRandom.addEventListener('click', onRandomClick);
filterDiscussed.addEventListener('click', onDiscussClick);

openForm();
formSubmit(onCloseButtonClick, postErrorMessage);
