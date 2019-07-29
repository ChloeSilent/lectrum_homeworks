/**
 * Задача 2.
 *
 * Создайте функцию createFibonacciGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение

const createFibonacciGenerator = function () {
    let n = 2;
    let result


    const innerFibonacci = function () {
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
    }

    return innerFibonacci;
}

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

exports.createFibonacciGenerator = createFibonacciGenerator;