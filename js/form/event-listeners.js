import { isEscapeKey } from '../util';
function stopPropagation() {
  const form = document.querySelector('.img-upload__form');
  const description = form.querySelector('.text__description');
  const hashtag = form.querySelector('.text__hashtags');

  function onFocusAddEventListener() {
    function isEscapeKeydown(evt) {
      if (isEscapeKey(evt)) {
        evt.stopPropagation();
        description.blur();
        hashtag.blur();

        description.removeEventListener('keydown', isEscapeKeydown);
        hashtag.removeEventListener('keydown', isEscapeKeydown);
      }
    }

    description.addEventListener('keydown', isEscapeKeydown);
    hashtag.addEventListener('keydown', isEscapeKeydown);
  }

  description.addEventListener('focus', onFocusAddEventListener);
  hashtag.addEventListener('focus', onFocusAddEventListener);

}

export {stopPropagation};
