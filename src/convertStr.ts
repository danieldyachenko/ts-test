export function convertStr(str: string): string {
  // Разбиваем строку на массив символов
  const charArr: string[] = str.split('');

  let convertedStr = '';
  let countCurrentChar = 1;

  charArr.forEach((char, index, arr) => {
    const prevChar = arr[index - 1];

    if (char === prevChar) {
      countCurrentChar++;
    } else if (prevChar) {
      convertedStr += prevChar + countCurrentChar;
      countCurrentChar = 1

      if (arr.length - 1 === index) {
        convertedStr += char + countCurrentChar;
      }
    }
  })

  return convertedStr
}
