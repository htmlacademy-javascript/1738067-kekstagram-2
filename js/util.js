// Генерируем рандомное целое число
function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерируем рандомный ID
function getRandomID(min, max) {
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
    return currentValue;
  };

}

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomID, getRandomInt, isEscapeKey};

