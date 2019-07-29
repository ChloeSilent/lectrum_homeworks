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
        let fibArr = [0, 1];

        if (n <= 2) {
            result = 1;
        } else {
            for (i = 0; i < n - 2; i++) {
                fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
            }
            result = fibArr[fibArr.length - 1];
        }
        n++
        return (result);
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