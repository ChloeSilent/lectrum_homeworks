/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение

// const shallowMerge = function (obj1, obj2) {
//     if (typeof obj1 !== "object" || typeof obj2 !== "object") {
//         throw new TypeError("Парметры функции должны быть объектами");
//     }
//     const mergedObj = {};
//     [].forEach.call(arguments, (element) => {
//         Object.getOwnPropertyNames(element).forEach(function (prop) {
//             const descriptor = Object.getOwnPropertyDescriptor(element, prop);
//             Object.defineProperty(mergedObj, prop, descriptor);
//         });
//     });

//     return mergedObj;
// }

/**
 * - вариант 2
 */

// const shallowMerge = function (obj1, obj2) {
//     if (typeof obj1 !== "object" || typeof obj2 !== "object") {
//         throw new TypeError("Парметры функции должны быть объектами");
//     }
//     const mergedObj = {};​
//     for (let i = 0; i < arguments.length; i++) {
//         ​
//         let obj = arguments[i];​
//         Object.getOwnPropertyNames(obj).forEach(function (prop) {
//             const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
//             Object.defineProperty(mergedObj, prop, descriptor);
//         });​
//     };​
//     return mergedObj;
// }

/**
 * Мне второй вариант решения больше всего нравится. Первый так же ок, но там жостко зашито применение 2-х аргументов. 3-й вариант выглядит костыльно.
   Во втором варианте всего 2 недостатка. 1-й это то что ты в аргументах оставила 2 объекта. Тут лучше вообще убрать аргументы или использовать рест оператор.
   А второй недостаток это то что ты валидируешь первые 2 объекта.

   я бы валидацию конвертировал в цикл.
 * - решение
 */

const shallowMerge = function (...args) {
    Array.from(args).forEach(function (obj) {
        if (typeof obj !== "object") {
            throw new TypeError("Парметры функции должны быть объектами");
        };
    });

    console.log("works");

    let mergedObj = {};

    for (let i = 0; i < 2; i++) {
        let obj = arguments[i];
        Object.getOwnPropertyNames(obj).forEach(function (prop) {
            const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            Object.defineProperty(mergedObj, prop, descriptor);
        });
    };

    return mergedObj;
}
/**
 * Задача 1: Выполнена верно. Есть несколько моментов, первое [].forEach… выглядит как костыль (заранее прошу прощения). 
 * Заимствовать методы для решения задач работы с объектами не нужно. 
 * У нас достаточно инструментов для работы с объектами. Так же слишком много вложенных операций. 
 * Нужно разбить на более простые выражения что бы код было легко читать.
 */
const user = {
    firstName: 'Marcus',
    lastName: 'Kronenberg'
};
const userData = {
    job: 'developer',
    country: 'Germany',
    lastName: 'Schmidt'
};

Object.defineProperty(user, 'firstName', {
    writable: false
});
Object.defineProperty(userData, 'job', {
    configurable: false
});

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

//exports.shallowMerge = shallowMerge;