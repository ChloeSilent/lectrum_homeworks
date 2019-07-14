/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение
const filter = function (arr, func) {
    let newArr = [];
    if ((Array.isArray(arr)) && (func && {}.toString.call(func) === '[object Function]') && (arguments.length === 2)) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i], i, arr)) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
    throw new TypeError('types or arguments are wrong');
}

const filteredArray = filter(array, function (item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
