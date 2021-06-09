const getMinNumber = (function () {
  let min: null | number = null;
  let currentIndex = 0;

  return function recursiveFunc(arr: number[]): number[] | number {
    if (min === null) min = arr[currentIndex];

    if (currentIndex === arr.length) return min;

    if (
      currentIndex !== 0 &&
      arr[currentIndex] >= 0 &&
      arr[currentIndex] < min
    ) {
      min = arr[currentIndex];
    }

    currentIndex++;

    return recursiveFunc(arr);
  };
})();

export default getMinNumber;
