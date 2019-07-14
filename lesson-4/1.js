/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение
Object.defineProperties(person, {
    'salary': {
        get: function () {

            let date = new Date();
            let day = date.getDate();
            let year = date.getFullYear();
            let month = date.getMonth();

            let lastDayOfMonth = new Date(year, month + 1, 0).getDate();
            let diffTime = Math.abs(lastDayOfMonth - day);
            return diffTime > 20 ? "good salary" : "bad salary";
        }
    }

});

person.salary; // good salary

exports.person = person;
