/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
const createFibonacciGenerator = function () {
    let n = 2;
    let result;


    let fibonacciObject = {
        print: function () {

            let f = [0, 1];

            if (n <= 2) {
                result = 1; //записываем в результат срез f от 0 до n
            } else {

                for (i = 0; i < n - 2; i++) { // повторяем n-2 раза, т.к. 2 элемента уже есть
                    f.push(f[f.length - 1] + f[f.length - 2]); //заполняем (n+2)-й элемент
                }

                result = f[f.length - 1]; //записываем в result наш массив f

            }
            n++
            return (result); //вывод result на экран (через алерт)

        },

        reset: function () {
            n = 2;
            result = 0;
        }


    }

    return fibonacciObject;

}


const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

exports.createFibonacciGenerator = createFibonacciGenerator;