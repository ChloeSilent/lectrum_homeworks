const arr = [6, 5, 4, 3, 2, 1];
// [1,2,3,4,5,6]

let done = false;


  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
}

console.log(arr);
//Задача 10: Выполнена верно. Замечание из задачи #9.
