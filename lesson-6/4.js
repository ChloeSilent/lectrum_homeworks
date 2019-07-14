/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
const some = function (arr, func) {
    let newArr = [];
    if ((Array.isArray(arr)) && (func && {}.toString.call(func) === '[object Function]') && (arguments.length === 2)) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i], i, arr)) {
                return true;
            } else {
              return false;
            }
        }
        
    }
    throw new TypeError('types or arguments are wrong');
}

const result = some(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'string';
});

console.log(result); // true

exports.some = some;
