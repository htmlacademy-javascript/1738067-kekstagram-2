const MAX_HASHTAGS = 5;
const hashtagQuantity = (hashtag) => {

  const splittedHashtags = hashtag.split(' ');

  const hashtags = [];

  splittedHashtags.forEach((element) => {
    if (element !== '' && element !== ' ') {
      hashtags.push(element);
    }
  });

  return hashtags.length <= MAX_HASHTAGS;

};

export {hashtagQuantity};
