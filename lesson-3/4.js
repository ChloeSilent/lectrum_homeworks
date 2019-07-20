/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение
// var f = function(n) {
//     const DAYS = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

//     if (typeof  n === 'number') {
//         if ( n >= 1 && n <= 7) {
//           return DAYS[n - 1];
//         } else {
//           throw "parameter should be in the range of 1 to 7";
//         }
//     } else {
//           throw "parameter type is not a Number";
//         }
//   }
/* не удалять */

/**
 * - Задача 4: Выполнено верно. Обратите внимание что словарь лучше всего инициализировать за пределами функции, так как это по сути константа.
 */
const DAYS = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];


var f = function(n) {


  if (typeof  n === 'number') {
      if ( n >= 1 && n <= 7) {
        return DAYS[n - 1];
      } else {
        throw "parameter should be in the range of 1 to 7";
      }
  } else {
        throw "parameter type is not a Number";
      }
}
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

exports.f = f;
/* не удалять */
