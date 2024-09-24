import { stopPropagation } from './event-listeners';
import { hashtagErrorPattern } from './isHashtagsValid/hashtag-error-pattern';
import { hashtagQuantity } from './isHashtagsValid/hashtag-quantity';
import { isHashtagRepeat } from './isHashtagsValid/is-hashtag-repeat';
import { createSuccessMessage } from '../on-success-to-post';

const form = document.querySelector('.img-upload__form');
const hashtag = form.querySelector('.text__hashtags');
const description = form.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const validateDescription = (value) => value.length <= 140;

pristine.addValidator(
  description,
  validateDescription,
  'Описание не может быть более 140 символов'
);


pristine.addValidator(
  hashtag,
  hashtagErrorPattern,
  `
    максимальная длина одного хэштега 20 символов, включая решётку;<br>
    строка после решётки должна состоять из букв и чисел и не может содержать пробелы,
    спецсимволы (#, @, $ и т. п.),
    символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
  `
);

pristine.addValidator(
  hashtag,
  hashtagQuantity,
  'Количество хештегов не может быть более пяти'
);

pristine.addValidator(
  hashtag,
  isHashtagRepeat,
  'Хештеги не могут повторяться'
);

const formSubmit = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    submitButton.setAttribute('disabled', '');
    evt.preventDefault();
    if (pristine.validate()) {

      const formData = new FormData(evt.target);
      const options = {
        method: 'POST',
        body: formData,
      };
      fetch('https://31.javascript.htmlacademy.pro/kekstagram/', options)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error(`${response.status} ${response.statusText}`);
        })
        .then(() => {
          onSuccess();
          createSuccessMessage();
          submitButton.removeAttribute('disabled');
        })
        .catch(() => {
          onError();
          submitButton.removeAttribute('disabled');
        });
    } else {
      submitButton.removeAttribute('disabled');
    }
  });
};

stopPropagation();


export {formSubmit};

