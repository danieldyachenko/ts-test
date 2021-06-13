export const sumSquareNumbers = (arr: Array<number | string>) => {
  return arr.reduce((accumulator, currentValue) => {
    if (+currentValue % 2 === 0) {
      const square = Math.sqrt(+currentValue);
      accumulator = +accumulator + square
    }

    return accumulator
  }, 0)
}
