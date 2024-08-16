import {getRandomID, getRandomInt} from './util.js';
/* eslint-disable no-shadow */
const min = 1;
const max = 25;
const names = ['АЛЕКСЕЙ', 'НАТАЛЬЯ', 'ГЕОРГИЙ', 'ЕВГЕНИЙ', 'МХИТАР', 'МАРИЯ', 'ГЕННАДИЙ', 'ЕВГЕНИЙ', 'МИХАИЛ', 'ЕВГЕНИЙ', 'ПАВЕЛ', 'АНДРЕЙ', 'СЕРГЕЙ', 'ИГОРЬ', 'БАТРАЗ', 'АНДРЕЙ', 'ИВАН', 'ТАХИР', 'ЗАРИФ', 'ТОТРАЗ', 'ВИКТОР', 'АЛЕКСАНДР', 'АЛЕКСАНДР', 'МИХАИЛ', 'ИВАН', 'ТАМЕРЛАН', 'ЛЮДМИЛА', 'АЛИЯ', 'ЕВГЕНИЯ', 'ГАЛИЯ', 'ЕЛЕНА', 'КАМЯР', 'МАРИЯ', 'ХАЛИСА', 'СТЕПАНИДА', 'ВАЛЕНТИНА', 'ЗОЯ', 'НАТАЛЬЯ', 'ЭЛЛА', 'НАТАЛЬЯ'];

// Генерацию я решил сделать через полное рандомизирование, получилось бессвязно, но забавно. Если требуется сделать именно готовые строки (как в задании и указано), то могу переделать
const getRandomComments = () => {
  const allOfComments = {};

  const minComments = 0;
  const maxComments = 30;

  const commentsValue = getRandomInt(minComments, maxComments - 1);

  return function () {

    const text = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';
    const commentsSplit = text.split(' '); // превращаем строку в массив


    // циклируем пока в allOfComments не будет нужное количество комментов из рандомизации commentsValue | то есть общий цикл на заполнение комментариями фото
    for (let i = 0; i < commentsValue; i++) {
      let comment = [];
      const commentLengthValue = getRandomInt(1, commentsSplit.length);

      // циклируем пока в comments не будет нужного количества слов комментария из commentLengthValue | то есть цикл генерации самого комментария
      for (let j = 0; j < commentLengthValue; j++) {
        const getRandomWord = getRandomInt(0, commentsSplit.length - 1);
        comment.push(commentsSplit[getRandomWord]);

      }

      comment = comment.join(' ');
      allOfComments[i] = comment;

    }

    return allOfComments;

  };
};

// Также сгенерарировал описание, но ограничил его в размере слов — 25, чтобы не захламлять сильно логи, если на самом сайте будет лучше отображаться, сделаю по длинне всего текста
const getRandomDescription = () => {


  const text = 'Этот кот думает, что он король, но на самом деле он просто пушистый лентяй. Когда ты пытаешься сделать серьёзное фото, но кто-то всегда оказывается в кадре. Секрет идеального снимка — это случайная улыбка и немного безумия. Каждый раз, когда я фотографирую, у меня возникает ощущение, что я ловлю момент, а не людей. Моя бабушка всегда говорит: "Не позируй, просто будь собой!" — и я её слушаю. Если бы этот момент был тортом, он был бы с вишенкой и многообещающей начинкой.';

  const textSplit = text.split(' ');
  const maximumWords = getRandomInt(1, 25); // готовим максимум слов
  const description = [];

  // вытягиваем слово (индекс из массива textSplit)
  while (description.length !== maximumWords) {

    const randomIndex = getRandomInt(0, textSplit.length - 1);

    description.push(textSplit[randomIndex]); // кладём слово в массив description

  }


  // затем я "сделал" форматирование текста, чтобы каждое описание выглядело немного адекватнее. Почему нет такого в комментариях? Диванным экспертам безразлична грамматика B)
  // а ещё я попросил сделать это нейросетку, потому что уже совсем долго мучаюсь над этим заданием, и простое форматирование я бы делал ещё дольше, просто хотел немного преукрасить, чтобы было читабельнее

  let formattedText = description.join(' ').toLowerCase();

  // Проверяем, есть ли в тексте точки
  formattedText = formattedText.split('.').map((sentence) => {
    // Убираем пробелы в начале и конце предложения
    sentence = sentence.trim();

    // Если предложение не пустое, делаем первую букву заглавной
    if (sentence.length > 0) {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    return sentence; // Возвращаем пустое предложение без изменений
  }).join('. '); // Объединяем предложения обратно в строку

  // Убираем лишние пробелы после точек
  formattedText = formattedText.replace(/\s+\./g, '.');

  // В конце текста добавляем точку, если она отсутствует
  if (!formattedText.endsWith('.')) {
    formattedText += '.';
  }

  return formattedText;
};

const getRandomName = () => {
  const previousValues = [];

  return function () {

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    let currentValue = getRandomInt(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return names[currentValue];
  };
};

const createObject = () => {

  const generateID = getRandomID(min, max); // генерируем айди для фото
  const generateIDForComments = getRandomID(min, max); // генерируем айди для комментариев
  const generateUrlID = getRandomID(min, max); // генерируем рандомное не повторяющееся фото
  const generateRandomName = getRandomName(); // генерируем рандомное имя
  const generateRandomComments = getRandomComments(); // генерируем рандомный коммент

  return {
    id: generateID(),
    url: `photos/${generateUrlID()}.jpg`,
    description: getRandomDescription(),
    likes: getRandomInt(15, 200),
    comments: {
      id: generateIDForComments(),
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: generateRandomComments(),
      name: generateRandomName(),
    }
  };
};

const objects = Array.from({ length: 25 }, createObject);

export {objects};
