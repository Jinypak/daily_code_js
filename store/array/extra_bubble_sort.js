function bubbleSort(arr) {
  const l = arr.length;

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

function doSort(arr) {
  arr.sort((a, b) => a - b);

  return arr;
}

function measureTime(callback, arr) {
  const start = Date.now();
  const result = callback(arr);
  const end = Date.now();
  return [end - start, result];
}

let arr = Array.from({ length: 10000 }, (_, k) => 10000 - k);

const [bubbleTime, bubbleResult] = measureTime(bubbleSort, arr);
console.log(`버블 : ${bubbleTime}ms`);

const [methodTime, methodResult] = measureTime(doSort, arr);
console.log(`메서드 : ${methodTime}ms`);
