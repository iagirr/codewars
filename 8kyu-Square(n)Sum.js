/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9
*/

function squareSum(numbers){
  const cuadrado = numbers.map((x) => x**2);
  const suma = cuadrado.reduce((s,c) => s+c, 0);
  return suma;
}
const numbers = [4, 16, 8, 2];
const squareNumbers = squareSum(numbers);

console.log(squareNumbers);

/*
1. Doblar numeros
2  Sumar numeros
3 Devolver suma como numero
*/