function hashtagQuantity(hashtag) {

  const maxHashtags = 6;
  const splittedHashtags = hashtag.split(' ');

  return splittedHashtags.length < maxHashtags;

}
export {hashtagQuantity};
