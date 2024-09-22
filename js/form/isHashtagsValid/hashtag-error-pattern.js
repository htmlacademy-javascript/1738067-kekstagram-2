function hashtagErrorPattern(hashtag) {

  const patternHastag = /^#[a-zа-яё0-9]{1,19}$/i;
  const splittedHashtags = hashtag.split(' ');

  let flag = true;

  const checkArray = [];

  splittedHashtags.forEach((element) => {
    if (element !== '' && element !== ' ') {
      checkArray.push(element);
    }
  });

  checkArray.forEach((element) => {
    if (!patternHastag.test(element)) {
      flag = false; // Если хотя бы один элемент не соответствует шаблону
    }
  });

  if (hashtag === '') {
    flag = true;
  }

  return flag;

}
export {hashtagErrorPattern};
