
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
//for loop for the sum of the squares
//for loop for the square of the sum
function question6(number) {
   var sumOfSquare = null, SquareOfsum = null, total = 0;

    for (let index = 1; index <= number; index++) {
        total = total + (index * index);
    }
    sumOfSquare = total;
    total = 0;
    for (let count = 1; count <= number; count++) {
        total = total + count;
    }
    squareOfSum = total * total;
    console.log(squareOfSum,sumOfSquare , squareOfSum - sumOfSquare);
 }
 question6(100);