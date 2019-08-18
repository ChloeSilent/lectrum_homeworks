/**
 * Задача 5.
 *
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
 * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
 * Создайте для этого вспомогательную функцию `isPositive(-3)`,
 * которая параметром будет принимать число и возвращать true,
 * если число положительное, и false — если отрицательное.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 * - пустую строку перед return ещё добавить )
 *  - И для переменной я бы выбрал название filteredArray. Так как это не просто новый массив, а отфильтрованный
 */

const array = [1, 2, -4, 3, -9, -1, 7];

// Решение
const isPositive = function (arr) {
  const filteredArray = [];

  for (const i of arr) {
    if (typeof i !== "number") {
      throw new Error ("Входной параметр должен обладать типом number");
    }
    if (i > 0) {
      filteredArray.push(i);
    }
  }

  return filteredArray;
}
/* не удалять */
console.log(isPositive([1, 2, -4, 3, -9, -1, 7])); // false
//console.log(isPositive(3)); // true
console.log(isPositive([1, 2, -4, 3, -9, "s", 7])); // Error: parameter type is not a Number

//exports.isPositive = isPositive;
/* не удалять */
