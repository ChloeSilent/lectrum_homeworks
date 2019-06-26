const array = [2, -1, -3, 15, 0, 4];
let positiveSum = 0;

for(value of array){
  positiveSum += value >= 0 ? value : 0;
  
}
 console.log(positiveSum);
