function isHashtagRepeat(hashtag) {

  const arrayHashtags = hashtag.toUpperCase().split(' ');

  const checkArray = [];

  arrayHashtags.forEach((element) => {
    if (element !== '' && element !== ' ') {
      checkArray.push(element);
    }
  });
  const duplicates = checkArray.filter((elem, index, array) => array.indexOf(elem) !== index);

  return duplicates.length === 0;
}
export {isHashtagRepeat};
