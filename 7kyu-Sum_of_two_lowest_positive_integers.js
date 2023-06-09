/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
 */

//SOLUCION 1

function sumTwoSmallestNumbers(numbers) {
    let min1 = Math.min(...numbers);
    let min2 = Math.min(...numbers.filter(num => num !== min1));
    let suma = min1 + min2;
    return suma;
  }

//SOLUCION 2

const sumTwoSmallestNumbers = numbers => {
    numbers.sort((a,b) => a-b)
    return numbers[0]+numbers[1]
  }

