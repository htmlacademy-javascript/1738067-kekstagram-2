function hashtagErrorPattern(hashtag) {

  const patternHastag = /^#[a-zа-яё0-9]{1,19}$/i;
  const splittedHashtags = hashtag.trim().split(' ');

  let flag = true;

  for (const value of splittedHashtags) {
    flag = patternHastag.test(value);
  }

  return flag;

}
export {hashtagErrorPattern};
