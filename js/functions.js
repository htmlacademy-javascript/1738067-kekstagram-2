function CheckForLenght (word, maxLength) {
  if (word.length <= maxLength) {
    return true;
  } else {
    return false;
  }

}

CheckForLenght('двадцать', 20); // Ожидаю true, потому-что максимальная длина 20, строка - "двадцать"
CheckForLenght('двадцать', 8); // Ожидаю true, потому-что максимальная длина 8, строка - "двадцать"
CheckForLenght('двадцать', 5); // Ожидаю false, потому-что максимальная длина 5, строка - "двадцать"


// ---------------------- Разделение ----------------------


function isPalindrome(word) {

  let index1 = 0; // индекс для первого массива
  let index2 = word.length - 1; // индекс для второго массива
  let array1 = [];
  let array2 = [];

  while (index1 !== word.length) { // первый массив определяет "эталон" - первое слово, на которое ориентируемся
    array1 = array1 + word[index1];
    ++index1;
  }

  while (index2 !== -1) { // второй массив - обратное "проговаривание"
    array2 = array2 + word[index2];
    --index2;
  }

  return array1.replaceAll(' ','').toLowerCase() === array2.replaceAll(' ','').toLowerCase(); // возвращаем массивы параллельно сделав их lowercase и убрав пробелы

}

isPalindrome('топот'); // Ожидаю true, потому-что топот - палиндром
isPalindrome('ДовОд'); // Ожидаю true, потому-что ДовОд - палиндром
isPalindrome('Кекс'); // Ожидаю false, потому-что Кекс - не палиндром
isPalindrome('Лёша на полке клопа нашёл '); // Ожидаю true, потому-что Лёша на полке клопа нашёл - палиндром


// ---------------------- Разделение ----------------------


function getNumbers(string) { // вытащить все цифры от 0 до 9 из строки/числа

  let array = []; // ящик с буквами

  if (!isNaN(string)) { // если не число = далем числом
    string = string.toString();
  }

  for (let index = 0; index !== string.length; ++index) { // прокручиваем посимвольно от 0 до максимальной длины вводимой строки/числа

    switch (string[index]) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        array += string[index];
        break;
    }
  }

  return parseInt(array, 10); // возвращаем обрезанный ящик с буквами

}

getNumbers('2023 год'); // 2023
getNumbers('ECMAScript 2022'); // 2022
getNumbers('1 кефир, 0.5 батона'); // 105
getNumbers('агент 007'); // 7
getNumbers('а я томат'); // NaN
getNumbers(2023); // 2023
getNumbers(-1); // 1
getNumbers(1.5); // 15
