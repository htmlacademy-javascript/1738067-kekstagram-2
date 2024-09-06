import {getRandomID, getRandomInt} from '../util';

const MIN = 1;
const MAX = 25;
const NAMES = ['АЛЕКСЕЙ', 'НАТАЛЬЯ', 'ГЕОРГИЙ', 'ЕВГЕНИЙ', 'МХИТАР', 'МАРИЯ', 'ГЕННАДИЙ', 'ЕВГЕНИЙ', 'МИХАИЛ', 'ЕВГЕНИЙ', 'ПАВЕЛ', 'АНДРЕЙ', 'СЕРГЕЙ', 'ИГОРЬ', 'БАТРАЗ', 'АНДРЕЙ', 'ИВАН', 'ТАХИР', 'ЗАРИФ', 'ТОТРАЗ', 'ВИКТОР', 'АЛЕКСАНДР', 'АЛЕКСАНДР', 'МИХАИЛ', 'ИВАН', 'ТАМЕРЛАН', 'ЛЮДМИЛА', 'АЛИЯ', 'ЕВГЕНИЯ', 'ГАЛИЯ', 'ЕЛЕНА', 'КАМЯР', 'МАРИЯ', 'ХАЛИСА', 'СТЕПАНИДА', 'ВАЛЕНТИНА', 'ЗОЯ', 'НАТАЛЬЯ', 'ЭЛЛА', 'НАТАЛЬЯ'];

// Также сгенерарировал описание, но ограничил его в размере слов — 25, чтобы не захламлять сильно логи, если на самом сайте будет лучше отображаться, сделаю по длинне всего текста
const getRandomDescription = () => {


  const text = `Солнце светит ярко и тепло
 Дети играют на улице весело
 Книга лежит на столе открытая
 Птицы поют песни весной и летом
 Цветы растут в саду и радуют глаз
 Дождь идет тихо и успокаивает
 Рыба плавает в реке быстро и свободно
 Луна светит ночью и освещает путь
 Улыбка друга согревает сердце всегда
 Музыка звучит громко и наполняет душу`;

  const textSplit = text.split(/[ ]/);
  const maximumWords = getRandomInt(1, 25); // готовим максимум слов
  const description = [];

  // вытягиваем слово (индекс из массива textSplit)
  while (description.length !== maximumWords) {

    const randomIndex = getRandomInt(0, textSplit.length - 1);

    description.push(textSplit[randomIndex]); // кладём слово в массив description

  }

  return description.join(' ');
};

const getRandomName = () => {
  const previousValues = [];

  return function () {

    if (previousValues.length >= (MAX - MIN + 1)) {
      return null;
    }
    let currentValue = getRandomInt(MIN, MAX);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(MIN, MAX);
    }
    previousValues.push(currentValue);
    return NAMES[currentValue];
  };
};

const generateRandomText = () => {

  const text = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';
  const commentsSplit = text.split(' '); // превращаем строку в массив

  let comment = [];
  const commentLengthValue = getRandomInt(1, commentsSplit.length);

  // циклируем пока в comments не будет нужного количества слов комментария из commentLengthValue | то есть цикл генерации самого комментария
  for (let i = 0; i < commentLengthValue; i++) {
    const getRandomWord = getRandomInt(0, commentsSplit.length - 1);
    comment.push(commentsSplit[getRandomWord]);

  }

  comment = comment.join(' ');

  return comment;

};

const generateID = getRandomID(MIN, MAX); // генерируем айди для фото
const generateIDForComments = getRandomID(MIN, MAX); // генерируем айди для комментариев
const generateUrlID = getRandomID(MIN, MAX); // генерируем рандомное не повторяющееся фото
const generateRandomName = getRandomName(); // генерируем рандомное имя

// генерируем рандомное сообщение одного пользователя
const createComment = () => ({
  comment: {
    id: generateIDForComments(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: generateRandomText(),
    name: generateRandomName(),
  }
});
// Генерируем от 0 до 30 рандомных комментариев к фото
const getRandomComments = () => {

  const minComments = 0;
  const maxComments = 30;

  return function () {
    const allOfComments = [];
    const commentsValue = getRandomInt(minComments, maxComments - 1);

    for (let i = 0; i < commentsValue; i++) {
      allOfComments.push(createComment());
    }
    return allOfComments;

  };
};

const generateRandomComments = getRandomComments(); // вызываем генерацию комментариев

const createObject = () => ({
  id: generateID(),
  url: `photos/${generateUrlID()}.jpg`,
  description: getRandomDescription(),
  likes: getRandomInt(15, 200),
  comments: generateRandomComments(),
});

const objects = Array.from({ length: 25 }, createObject); // генерируем массив, где 25 элементов, состоящих из объекта createObject
export {objects};
