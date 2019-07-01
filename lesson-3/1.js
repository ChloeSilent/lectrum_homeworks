/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
var f = function (n) {
    if (typeof n === 'number') {
        return Math.pow(n, 3);
    } else {
        throw "Parameter is not a number!";
    }
}
/* не удалять */
f(2); // 8
f('Content'); // Error: parameter is not a number type

exports.f = f;
/* не удалять */