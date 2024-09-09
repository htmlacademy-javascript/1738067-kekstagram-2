import {displayPictures} from './objects-miniatures/display-miniatures.js';
import {openForm} from './form/open-close-form.js';
import './fullsize-picture/close-picture-modal';
import './fullsize-picture/open-picture-modal';
import './form/validate-form.js';
import { isFormValid } from './form/validate-form.js';

displayPictures();
openForm();
isFormValid();
