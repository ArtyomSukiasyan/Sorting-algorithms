function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let helpVar = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = helpVar;
      }
    }
  }
  return arr;
}
