/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function postpone(start, end, delay) {
    if (arguments.length > 3) {
        throw Error('Функция принимает только три параметра');
    }
    if (typeof start !== 'number' && typeof end !== 'number' && typeof delay !== 'number') {
        throw Error('Входные параметры функции должны иметь тип number');
    }

    let count;

    if (start <= end) {
        count = 1;

        let timerId = setTimeout(function tick() {
            if (count <= end) {
                console.log(count);
                timerId = setTimeout(tick, delay);
            } else {
                clearTimeout(timerId);
            }

            count++;
        }, delay);

    } else {
        count = start;

        let timerId = setTimeout(function tick() {
            if (count >= end) {
                console.log(count);
                timerId = setTimeout(tick, delay);
            } else {
                clearTimeout(timerId);
            }

            count--;
        }, delay);
    }

}


postpone(1, 3, 1000);
// 1
// 2
// 3

postpone(3, 1, 1000);
// 3
// 2
// 1


exports.postpone = postpone;