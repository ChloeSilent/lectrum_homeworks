/**
 * - lesson-2/9
 * - нужно возвращать  из [1, 2, 3, 4, 5, 6] => [6,5,4,3,2,1]
 */
let arr = [1, 2, 3, 4, 5, 6];


let done = false;


// while (!done) {
//   done = true;
//   for (var i = 1; i < arr.length; i += 1) {
//     if (arr[i - 1] < arr[i]) {
//       done = false;
//       var tmp = arr[i - 1];
//       arr[i - 1] = arr[i];
//       arr[i] = tmp;
//     }
//   }
// }

//console.log(arr);
/**
 * - Задача 9: Выполнена верно. Следуя хорошим практикам я бы рекомендовал arr[i] ← этот код сохранить в переменную над условием.
 * - Тогда вам не пришлось бы извлекать элемент массива в двух местах
 * - оно не уменьшит код, а минимизурет места где можно допстуть ошибку, например вместо i написать j.
 * - Так же это немного повысит читабельность кода, так как не нужно будет каждый раз вникать что у тебя происходит.
 * - Дальше если вдург потребуется изменить логику извлечения переменной из массива, то это нужно будет сделать в одном месте.
 * - новое решение
 */

// while (!done) {
//   done = true;
//   for (var i = 1; i < arr.length; i += 1) {
//     let j = arr[i];
//     let k = arr[i - 1];
//     if (k < j) {
//       done = false;
//       var tmp = k;
//       k = j;
//       j = tmp;
//     }
//   }
// }

/**
 * - в новом решение у меня немного вызывает дискомфорт имена переменных k и j. Думаю лучше было бы назвать currentValue и prevValue.
 * - Закрыто обсуждение!
 */

while (!done) {
  done = true;
  for (let i = 1; i < arr.length; i += 1) {
    let currentValue = arr[i];
    let prevValue = arr[i - 1];

    if (prevValue < currentValue) {
      done = false;
      let tmp = prevValue;

      prevValue = currentValue;
      currentValue = tmp;
    }
  }
}


console.log(arr);
