// Генерируем рандомное целое число
function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерируем рандомный ID
function randomID(min, max, count) {
  // Проверяем, чтобы диапазон был достаточным для заданного количества уникальных чисел
  if (count + 1 > (max - min + 1)) {
    throw new Error('Диапазон слишком мал для заданного количества уникальных чисел.');
  }

  return function() {
    // Создаем новый массив с уникальными числами при каждом вызове
    const numbers = [];
    while (numbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    // Возвращаем массив уникальных чисел
    return numbers;
  };
}

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

// проверка на жмание ESC
const isEscapeKey = (evt) => evt.key === 'Escape';


export {randomID, getRandomInt, isEscapeKey, debounce};

