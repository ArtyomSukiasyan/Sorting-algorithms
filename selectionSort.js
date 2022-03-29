function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }

    let helpVar = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = helpVar;
  }

  return arr;
}
