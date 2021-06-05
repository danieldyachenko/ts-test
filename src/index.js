function convertStr(str) {
    // Разбиваем строку на массив символов
    var charArr = str.split('');
    // Инициализируем объект для подсчета символов
    var charObj = {};
    // Считаем символы, записывая каждый символ как свойство, увеличивая его значение
    charArr.forEach(function (char) {
        if (char in charObj) {
            charObj[char]++;
        }
        else {
            charObj[char] = 1;
        }
    });
    // Инициализируем строку для преобразования в новый формат
    var convertedStr = '';
    // Преобразовываем объект с символами в строку
    for (var prop in charObj) {
        convertedStr += prop + charObj[prop];
    }
    return convertedStr;
}
console.log(convertStr('aaabbdcccccf'));
function getUniqueChar(str) {
    // Разбиваем строку на массив символов
    var charArr = str.split('');
    // Инициализируем объект для подсчета символов
    var charObj = {};
    // Считаем символы, записывая каждый символ как свойство, увеличивая его значение
    charArr.forEach(function (char) {
        if (char in charObj) {
            charObj[char]++;
        }
        else {
            charObj[char] = 1;
        }
    });
    // Инициализируем строку для преобразования в новый формат
    var uniqueStr = '';
    for (var prop in charObj) {
        if (charObj[prop] === 1) {
            uniqueStr += prop;
        }
    }
    return uniqueStr;
}
console.log(getUniqueChar('asdaaaaasf'));
