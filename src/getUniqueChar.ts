import { CharObj } from './types';

export function getUniqueChar(str: string): string {
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

  // Преобразовываем объект символов в строку с уникальными символами
  for (const prop in charObj) {
    if (charObj[prop] === 1) {
      uniqueStr += prop;
    }
  }

  return uniqueStr
}
