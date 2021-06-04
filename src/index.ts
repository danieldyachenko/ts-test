interface CharObj {
  [key: string]: number;
}

function convertStr(str: string): string {
  // Разбиваем строку на массив символов
  const charArr: string[] = str.split('');

  // Инициализируем объект для подсчета символов
  const charObj: CharObj = {};

  // Считаем символы, записывая каждый символ как свойство, увеличивая его значение
  charArr.forEach(char => {
    if (char in charObj) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  });

  // Инициализируем строку для преобразования в новый формат
  let convertedStr = '';

  // Преобразовываем объект с символами в строку
  for (const prop in charObj) {
    convertedStr += prop + charObj[prop];
  }

  return convertedStr;
}

console.log(convertStr('aaabbdcccccf'));

function getUniqueChar(str: string): string {
  // Разбиваем строку на массив символов
  const charArr: string[] = str.split('');

  // Инициализируем объект для подсчета символов
  const charObj: CharObj = {};

  // Считаем символы, записывая каждый символ как свойство, увеличивая его значение
  charArr.forEach(char => {
    if (char in charObj) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  });

  // Инициализируем строку для преобразования в новый формат
  let uniqueStr = '';

  for (const prop in charObj) {
    if (charObj[prop] === 1) {
      uniqueStr += prop;
    }
  }

  return uniqueStr
}

console.log(getUniqueChar('asdaaaaasf'));


