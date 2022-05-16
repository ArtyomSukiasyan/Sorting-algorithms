function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const less = [];
  const more = [];
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      more.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(more)];
}
