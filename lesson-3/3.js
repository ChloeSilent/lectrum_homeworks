/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
// var f = function (a, b, c){
//     var calculated = 0;
//     var checkedArr = [];
//       for (let i = 0; i <= arguments.length - 1; i++) {
//           if (typeof arguments[i] === 'number') {
//               checkedArr[i] = arguments[i];
//           } else {
//             throw "all parameters should be a Number type";
//           }
//       }
//     return (checkedArr[0] - checkedArr[1]) / checkedArr[2];
//   }

/**
 * - Выполнено верно. Старайтесь оптимизировать условия. Проверить если аргумент не цифра, то выбросить ошибку. И уже за пределами условия if уже выполнить вычисления. + замечание из задачи #2.
 * - обновленное решение
 */
var f = function (...args) {
 if(args.length !=3) {
  throw newError ("Функция должна принимать три параметра");
 }

  for (let i of args.keys()) {
    if (typeof i !== 'number') {
      throw "all parameters should be a Number type";
    }
  }
  return (args[0] - args[1]) / args[2];
}


/* не удалять */
// console.log(f(9, 3, 2)); // 3
f('s', 9, 3); // Error: all parameters type should be a Number

//exports.f = f;
/* не удалять */
