/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
const reduce = function (arr, func, accumulator) {
    let accumulated = null;

    if ((Array.isArray(arr)) && (func && {}.toString.call(func) === '[object Function]') && (arguments.length === 3)) {
        for (let i = 0; i < arr.length; i++) {
            accumulator = func(accumulator, arr[i], i, arr)
        }
        return accumulator;
    }
    throw new TypeError('types or arguments are wrong');
}

const result = reduce(
    array,
    function (accumulator, item, i, arrayRef) {
        // console.log(accumulator); // значение-аккумулятор
        // console.log(item); // элемент массива
        // console.log(i); // индекс элемента
        // console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);


exports.reduce = reduce;
