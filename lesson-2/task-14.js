const n = 1000;
let num = 0;
let devider = 2;

for(let k = n / devider; k >= 50; k /= devider){
  ++num;
}

console.log("num is " + num)

/*Задача 14: Выполнена верно. Но я думаю что семантически, для решения данного задания подошел бы цикл while.*/
