export function getUniqueChar(str: string): string {
  let result = '';

  for (const char of str) {
    // Производим поиск подстрок с повторяющемся символами
    const match = str.match(new RegExp(`${char}+`, 'g'));

    // Если повторений нет, то добавляем символ к строке
    if (match && match.length === 1) {
      result += match[0];
    }
  }

  return result
}
