/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
const upperCaseFirst = function (str) {
  if ((typeof str === 'string' || str instanceof String) && (str.length > 0)) {
    return str[0].toUpperCase() + str.slice(1, str.length);
  }
  throw new TypeError('type is not a string');

}

/**
 * - решение
 */
const upperCaseFirst = function (str) {
  if ((typeof str === 'string' || str instanceof String) && (str.length > 0)) {
    return `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
  }
  throw new TypeError('type is not a string');

}
upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
