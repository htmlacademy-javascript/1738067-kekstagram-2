import { isEscapeKey } from '../util';
const stopPropagation = () => {
  const form = document.querySelector('.img-upload__form');
  const description = form.querySelector('.text__description');
  const hashtag = form.querySelector('.text__hashtags');

  const onHashtagClick = () => {
    const onEscapeKeydown = (evt) => {
      if (isEscapeKey(evt)) {
        evt.stopPropagation();
        description.blur();
        hashtag.blur();

        description.removeEventListener('keydown', onEscapeKeydown);
        hashtag.removeEventListener('keydown', onEscapeKeydown);
      }
    };

    description.addEventListener('keydown', onEscapeKeydown);
    hashtag.addEventListener('keydown', onEscapeKeydown);
  };

  description.addEventListener('focus', onHashtagClick);
  hashtag.addEventListener('focus', onHashtagClick);

};

export {stopPropagation};
