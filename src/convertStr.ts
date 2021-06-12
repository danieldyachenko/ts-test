export function convertStr(str: string): string {
  // Разбиваем строку на массив символов
  const charArr: string[] = str.split('');

  return charArr.reduce((accumulator, currentValue, index, array) => {
    // Обрезаем строку, начиная с указанного индекса
    const substrFromIndex = str.slice(index);

    // Производим поиск первой подстроки с повторяющемся символами
    const match = substrFromIndex.match(new RegExp(`${currentValue}+`));

    /* Если текущий символ не равен предыдущему, то конвертируем совпадение в
    новый формат. Например 'aaa' станет 'a3' */
    if (match && currentValue !== array[index - 1]) {
      accumulator += match[0][0] + match[0].length;
    }

    return accumulator;
  }, '');
}
