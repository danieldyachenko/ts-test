export const sumStr = (str1: string, str2: string) => {
  const newStr = str1 + str2;
  const last4Char = newStr
    .slice(newStr.length - 4, newStr.length)
    .toUpperCase();
  const firstChar = newStr.slice(0, newStr.length - 4);
  return firstChar + last4Char;
};

export const sumStr2 = (str1: string, str2: string) => {
  const newStr = str1 + str2;
  const charArr = newStr.split('').map((char, index, arr) => {
    if (index > arr.length - 5) {
      return char.toUpperCase();
    }
    return char;
  });

  return charArr.join('');
};
