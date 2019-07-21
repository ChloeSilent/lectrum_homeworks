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

const shallowMerge = function (obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        throw new TypeError("Парметры функции должны быть объектами");
    }
    const mergedObj = {};

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];

        Object.getOwnPropertyNames(obj).forEach(function (prop) {
            const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            Object.defineProperty(mergedObj, prop, descriptor);
        });

    };

    return mergedObj;
}

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