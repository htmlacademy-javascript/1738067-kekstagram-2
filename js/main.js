import {displayPictures} from './objects-miniatures/display-miniatures.js';
import './fullsize-picture/open-close-photo-modal.js';
import {openForm} from './form/open-close-form.js';
import './form/validate-form.js';
import { formSubmit } from './form/validate-form.js';
import { getData } from './get-data.js';
import { loadWebSiteErrorMessage } from './on-error-to-load-website.js';
import { addHiddenToForm } from './form/open-close-form.js';
import { postErrorMessage } from './on-error-to-post.js';
import { defaultFilter, createRandomPhotos, mostDiscussedPhotos } from './objects-miniatures/filter-objects.js';
import { debounce } from './util.js';


const RERENDER_DELAY = 500;

getData((data) => {
  displayPictures(data); // Отображение по умолчанию
  defaultFilter(debounce(
    () => displayPictures(data), RERENDER_DELAY), data);
  createRandomPhotos(debounce(
    () => displayPictures(data), RERENDER_DELAY), data);
  mostDiscussedPhotos(debounce(
    () => displayPictures(data), RERENDER_DELAY), data);
},
() => loadWebSiteErrorMessage());

openForm();
formSubmit(addHiddenToForm, postErrorMessage);
