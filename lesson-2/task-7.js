const array = [1, 2, 3, 4];

let arrayEvenSum = 0;
for (let value of array) {
  
  arrayEvenSum += value % 2 === 0 ? value : 0;
  
}

console.log(arrayEvenSum);