/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
var f = function (a, b, c){
    var calculated = 0;
    var checkedArr = [];
      for (let i = 0; i <= arguments.length - 1; i++) {
          if (typeof arguments[i] === 'number') {
              checkedArr[i] = arguments[i];
          } else {
            throw "all parameters should be a Number type";
          }
      }
    return (checkedArr[0] - checkedArr[1]) / checkedArr[2];
  }
/* не удалять */
f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number

exports.f = f;
/* не удалять */