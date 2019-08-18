/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */
// Решение
// const extractCurrencyValue = function(source){
//   if (typeof source === 'string' || source instanceof String) {
//       return parseInt(source.substring(1));
//   }
// throw new TypeError('type is not a string');
// }


const PRICE = '$120';
/**
 *
 * -  Выполнено верно.
 * - Следуя хорошим практикам, сначала делают валидацию и выбрасывают ошибку если что-то пошло не так. И только затем выполняют необходимую бизнес логику.
 * - решение
 */

const extractCurrencyValue = function (source) {
  if (typeof source != 'string') {
    throw new TypeError('type is not a string');
  }
  return parseInt(source.substring(1));
}

console.log(extractCurrencyValue(PRICE)); // 120

//exports.extractCurrencyValue = extractCurrencyValue;
