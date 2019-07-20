/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
// var f = function (...theArgs) {
//     let summ = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] === 'number') {
//             summ += arguments[i];
//         } else {
//           throw "all parameters should be a Number type";
//         }

//     }

//     return summ;
// }

/**
 * - Задача 2: Выполнено верно. Я думаю что более оптимально тут было бы использовать цикл for..of. Так как нам в любом случае нужно пробегаться по всему массиву, а так же в этом цикле мы сразу имеет доступ к значению массива.
 * - Решение 2 после комментария
 */


var f = function (...theArgs) {
  let summ = 0;
  for (let i of theArgs) {
      if (typeof i === 'number') {
          summ += i;
      } else {
        throw "all parameters should be a Number type";
      }

  }

  return summ;
}

/* не удалять */
console.log(f(1, 2, 3)); // 6
console.log(f(1, 1, 1, 1, 1, 1, 1, 1)); // 8
//f(1, 2, 's', 4); // Error: all parameters should be a Number type

// exports.f = f;
/* не удалять */


