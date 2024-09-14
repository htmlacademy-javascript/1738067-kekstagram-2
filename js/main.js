import {displayPictures} from './objects-miniatures/display-miniatures.js';
import {openForm} from './form/open-close-form.js';
import './fullsize-picture/close-picture-modal';
import './fullsize-picture/open-picture-modal';
import './form/validate-form.js';
import { formSubmit } from './form/validate-form.js';
import { getData } from './get-data.js';
import { loadWebSiteErrorMessage } from './on-error-to-load-website.js';
import { addHiddenToForm } from './form/open-close-form.js';
import { postErrorMessage } from './on-error-to-post.js';


const getArray = getData(displayPictures, loadWebSiteErrorMessage);
getArray();
openForm();
formSubmit(addHiddenToForm, postErrorMessage);
