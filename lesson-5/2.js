/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
// const checkSpam = function (source, example) {
//     if ((typeof source === 'string' && typeof example === 'string') || (source instanceof String && example instanceof String)) {
//         return source.toLocaleLowerCase().includes(example.toLocaleLowerCase(), 0);
//     }
//         throw new TypeError('arguments type is not a string');
// }

/**
 *
 * -  Выполнено верно. instanceof ← в данном случае лишняя проверка. return выглядит плохо, слишком много операций в одной строке.
 * - Лучше вынести в переменные, разбить на разные операции и вернуть результат.
 * - Так код будет легче читать, а соответственно сопровождать.
 * - решение
 */

const checkSpam = function (source, example) {
  if (typeof source === 'string' && typeof example === 'string') {
    let sourceForCheck = source.toLocaleLowerCase();
    let exampleForCheck = example.toLocaleLowerCase();
    return sourceForCheck.includes(exampleForCheck, 0);
  }
  throw new TypeError('arguments type is not a string');
};


console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true

//exports.checkSpam = checkSpam;
