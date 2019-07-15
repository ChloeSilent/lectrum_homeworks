/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
const createArray = function (value, arrLength) {
    const startIdx = 0;
    checkLength = function (value) {
        return value === 2;
    };

    isNumber = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === "Number" && !isNaN(parseFloat(value))
    };

    isString = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === "String"
    };

    isObject = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === "Object"
    };

    isArray = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1) === "Array"
    };


    if (checkLength(arguments.length) && (isNumber(value) || isString(value) || isObject(value) || isArray(value)) && isNumber(arrLength)) {
        return new Array(arrLength).fill(value);;
    } else {
        throw Error('При вызове функции не было передано два аргумента или В качестве первого аргумента были переданы не число, не строка, не объект и не массив или В качестве второго аргумента был передан не число');
    }

};

//
const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
