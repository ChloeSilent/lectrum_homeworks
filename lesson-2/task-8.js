const array = [1, 2, 3, 4, 5, 6];

let arrayEvenSum = 0;
for (let value of array) {
  if(value > 3){
    arrayEvenSum += value % 2 === 0 ? value : 0;

  }

}

console.log(arrayEvenSum);

/*Выполнено не корректно. Замечание из задачи #7.*/
