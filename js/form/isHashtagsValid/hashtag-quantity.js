const MAX_HASHTAGS = 5;
function hashtagQuantity(hashtag) {

  const splittedHashtags = hashtag.split(' ');

  const checkArray = [];

  splittedHashtags.forEach((element) => {
    if (element !== '' && element !== ' ') {
      checkArray.push(element);
    }
  });

  return checkArray.length <= MAX_HASHTAGS;

}
export {hashtagQuantity};
