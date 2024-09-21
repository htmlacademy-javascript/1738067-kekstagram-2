function hashtagErrorPattern(hashtag) {

  const patternHastag = /^#[a-zа-яё0-9]{1,19}$/i;
  const splittedHashtags = hashtag.trim().split(' ');

  let flag = true;

  splittedHashtags.forEach((element) => {
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
