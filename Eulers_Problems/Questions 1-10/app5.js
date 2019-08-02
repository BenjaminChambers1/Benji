
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//for oop count up 
//running a for loop for each number checking if they are divisable by 1 through 20
function question5() {
   var divisible = false;
    for (let index = 1; divisible === false; index++) {
        if (index % 2 === 0 && index % 3 === 0 && index % 4 === 0 && index % 5 === 0 && index % 6 === 0 && index % 7 === 0 && index % 8 === 0 && index % 9 === 0 && index % 10 === 0 && index % 11 === 0 && index % 12 === 0 && index % 13 === 0 && index % 14 === 0 && index % 15 === 0 && index % 16 === 0 && index % 17 === 0 && index % 18 === 0 && index % 19 === 0 && index % 20 === 0) {
            console.log(index);
            divisible = true;
        }
    }
}
question5();