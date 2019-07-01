/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение
function getDivisors(n){
    if(typeof n === "number"){

        if (n < 1)
            throw "Error: parameter can't be a 0";
        var small = [];
        var large = [];
        var end = Math.floor(Math.sqrt(n));
        for (var i = 1; i <= end; i++) {
            if (n % i == 0) {
                small.push(i);
                if (i * i != n)  // Don't include a square root twice
                    large.push(n / i);
            }
        }
        large.reverse();
        return small.concat(large);
    } else {
      throw "Error: parameter type is not a Number";
    }
    };
/* не удалять */
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

exports.getDivisors = getDivisors;
/* не удалять */
