/**
 * Задача 6.
 *
 * Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number.
 *
 * Заметки:
 * - Чётные числа могут делится на 2 без остатка.
 */

// Решение
var isEven = function(n) {
    if (typeof n === "number"){
      if(n % 2 == 0){
         return true;
         } else {
        return false;
           }
    } else {
      throw "parameter type is not a Number";
    }
  };
/* не удалять */
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number

exports.isEven = isEven;
/* не удалять */
