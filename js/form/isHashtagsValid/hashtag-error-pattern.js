const hashtagErrorPattern = (hashtag) => {

  const patternHastag = /^#[a-zа-яё0-9]{1,19}$/i;
  const splittedHashtags = hashtag.split(' ');

  let flag = true;

  const validHashtags = [];

  splittedHashtags.forEach((element) => {
    if (element !== '' && element !== ' ') {
      validHashtags.push(element);
    }
  });

  validHashtags.forEach((element) => {
    if (!patternHastag.test(element)) {
      flag = false; // Если хотя бы один элемент не соответствует шаблону
    }
  });

  if (hashtag === '') {
    flag = true;
  }

  return flag;

};

export {hashtagErrorPattern};
