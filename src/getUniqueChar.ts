export function getUniqueChar(str: string): string {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    // Производим поиск подстрок с повторяющемся символами
    const match = str.match(new RegExp(`${str[i]}+`, 'g'));

    // Если повторений нет, то добавляем символ к строке
    if (match && match.length === 1) {
      result += match[0]
    }
  }

  return result
}
