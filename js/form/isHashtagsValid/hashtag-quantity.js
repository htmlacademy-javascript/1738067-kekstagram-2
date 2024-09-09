const MAX_HASHTAGS = 5;
function hashtagQuantity(hashtag) {

  const splittedHashtags = hashtag.split(' ');

  return splittedHashtags.length <= MAX_HASHTAGS;

}
export {hashtagQuantity};
