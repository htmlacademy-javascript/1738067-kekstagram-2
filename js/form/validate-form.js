import { stopPropagation } from './event-listeners';
import { hashtagErrorPattern } from './isHashtagsValid/hashtag-error-pattern';
import { hashtagQuantity } from './isHashtagsValid/hashtag-quantity';
import { isHashtagRepeat } from './isHashtagsValid/is-hashtag-repeat';

function isFormValid() {

  const form = document.querySelector('.img-upload__form');
  const hashtag = form.querySelector('.text__hashtags');
  const description = form.querySelector('.text__description');

  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error',
  });

  pristine.addValidator(
    description,
    validateDescription,
    'Описание не может быть более 140 символов'
  );


  pristine.addValidator(
    hashtag,
    hashtagErrorPattern,
    `максимальная длина одного хэштега 20 символов, включая решётку;<br>
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

  function pristineValidate(evt) {
    evt.preventDefault();
    pristine.validate();
  }

  form.addEventListener('submit', pristineValidate);

  function validateDescription(value) {
    return value.length <= 140;
  }

  stopPropagation();
}

export {isFormValid};
