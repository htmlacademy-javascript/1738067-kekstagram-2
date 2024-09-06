function isHashtagRepeat(hashtag) {

  const arrayHashtags = hashtag.toUpperCase().split(' ');
  const duplicates = arrayHashtags.filter((elem, index, array) => array.indexOf(elem) !== index);
  return duplicates.length === 0;
}
export {isHashtagRepeat};
