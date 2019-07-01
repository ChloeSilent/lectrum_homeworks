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
var f = function (...theArgs) {
    let summ = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            summ += arguments[i];
        } else {
          throw "all parameters should be a Number type";
        }

    }

    return summ;
}
/* не удалять */
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

exports.f = f;
/* не удалять */