import { convertStr } from './convertStr';
import { getUniqueChar } from './getUniqueChar';
import getMinNumber from './getMinNumber';
import { convertToStr } from './convertToStr';
import { sumStr, sumStr2 } from './sumStr';
import { sumNumber } from './sumNumber';
import { sumSquareNumbers } from './sumSquareNumbers';
import { displaying100 } from './displaying100';
import { getOnline, getOnline2 } from './getOnline';
import { getPossibleSets } from './getPossibleSets';

console.log(convertStr('aaabbdcccccf'));

// console.log(getUniqueChar('asdaaaaasf'));

/*const arr: number[] = [4, 6, -356, 2, 23, 17, 45];
console.log(getMinNumber(arr));*/

// console.log(convertToStr(255));

// console.log(sumStr('Я не ', 'программист'));

// console.log(sumStr2('Я не ', 'программист'));

// console.log(sumNumber(0.13, 0.22));

// console.log(sumSquareNumbers([1, 2, '3', '5', '4', 5, '5', 7, 8, 8, '10']))

// displaying100();

const users = [
  { name: "Maxim", id: "uuid1", online: true },
  { name: "Andrew", id: "uuid2", online: false },
  { name: "Alex", id: "uuid3", online: true },
  { name: "Peter", id: "uuid4", online: false }
];

console.log(getOnline2(users))

/*const obj = { "1": 1, "2": 2, "3": 3 }
console.log(getPossibleSets(obj))*/
