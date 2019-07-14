/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение

const forEach = function (arr, func) {
    if ((Array.isArray(arr)) && (func && {}.toString.call(func) === '[object Function]') && (arguments.length === 2)) {
        for (let i = 0; i < arr.length; i++) {
            func(arr[i]);
        }
        return;
    }
    throw new TypeError('types or arguments are wrong');
}; 

const result = forEach(array, function (item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

exports.forEach = forEach;

