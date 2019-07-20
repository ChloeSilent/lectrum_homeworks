const array = [1, 2, 3, 4];

let arraySum = 0;
for (let value of array) {
  arraySum += value;

}

console.log(arraySum);
/**Выполнена верно. Обратите внимание на то, что в циклах for..of и for..in можно использовать const. */
