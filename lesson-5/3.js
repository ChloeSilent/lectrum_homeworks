/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
// const truncate = function(str, maxLngth){
//     if ((typeof str === 'string' || str instanceof String) && (Number.isInteger(maxLngth))) {
//         return (str.substring(0,maxLngth) + "...");
//     }
//     throw new TypeError('first argument type is not a string or second is not a number');
// }
/**
 * - Выполнено верно. Валидации нужно оптимизировать.
 * -  Они дублируют друг друга, в итоге выполняется лишняя операция.
 * - решение
 */
const truncate = function(str, maxLngth){
  if (typeof str != 'string' ) {
    throw new TypeError('the first argument type is not a string');
  }
  if (!(Number.isInteger(maxLngth))) {
    throw new TypeError (' the second argument type is not a number');

  }
  return (str.substring(0,maxLngth) + "...");
}



console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'

//exports.truncate = truncate;
