function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const split = Math.floor(arr.length / 2);
  let left = arr.slice(0, split);
  let right = arr.slice(split);

  left = mergeSort(left);
  right = mergeSort(right);

  const sorted = [];

  while (left.length > 0 || right.length > 0) {
    if (right.length === 0 || left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted;
}
