function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const largeArray = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 100000)
);

console.time("Merge Sort");
const sortedArray = mergeSort([...largeArray]);
console.timeEnd("Merge Sort"); // 1.489s

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return arr;
}

console.time('Bubble Sort');
const bubbleSortedArray = bubbleSort([...largeArray]);
console.timeEnd('Bubble Sort'); // 21.192s
