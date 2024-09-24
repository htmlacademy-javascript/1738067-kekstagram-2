const isHashtagRepeat = (hashtag) => {

  const arrayHashtags = hashtag.toUpperCase().split(' ');

  const validHashtags = [];

  arrayHashtags.forEach((element) => {
    if (element !== '' && element !== ' ') {
      validHashtags.push(element);
    }
  });
  const duplicates = validHashtags.filter((elem, index, array) => array.indexOf(elem) !== index);

  return duplicates.length === 0;
};

export {isHashtagRepeat};
