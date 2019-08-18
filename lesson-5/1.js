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
// const upperCaseFirst = function (str) {
//   if ((typeof str === 'string' || str instanceof String) && (str.length > 0)) {
//     return str[0].toUpperCase() + str.slice(1, str.length);
//   }
//   throw new TypeError('type is not a string');

// }

/**
 * - решение
 * - Выполнено верно. Я бы рекомендовал конкатенировать строки в стиле ES6 и использовал для этого шаблонную строку с обратными кавычками.
 * - На текущий момент код на проектах пишется по стандарту ES6 и выше.
 * - Так же я бы рекомендовал разделить валидацию и отдельно проверить тип аргументов, и отдельно на количество аргументов.
 * - Хорошей практикой будет возвращать ошибку с правильным сообщением что бы дать пользователю понять что пошло не так.
 */
const upperCaseFirst = function (str) {
  if (typeof str != 'string' && !(str instanceof String)) {
    throw new TypeError('Пармеметр функции должен быть string');
  }
  if (arguments.length != 1) {
    throw new Error('Функция принимает один параметр');
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); // ''

//exports.upperCaseFirst = upperCaseFirst;
