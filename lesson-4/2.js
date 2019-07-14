/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 * Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * Свойство `salary` можно читать, но нельзя менять.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 * Если rate не установлен — возвращаем число 0.
 */

const person = {};

// Решение

person.rate = 30;
Object.defineProperty(person, "rate", { value: 30, writable: true, configurable: false, enumerable: false });
// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
Object.defineProperty(person, "salary", { value: person.rate * new Date().getDate(), writable: false, configurable: false });
person.salary;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

exports.person = person;
