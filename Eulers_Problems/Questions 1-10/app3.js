//finding the largest prime factor 
// for loop to find all the factors which the modulus to the input number === 0, with the number input as the limit 

function question3(number) {
    var largestPrimeFactor = null;
    for (let factor = 0; factor < number; factor++) { //counts all the way up to the inputted number
        if (number % factor === 0) { // checking to see if the number inputted is divisible by any number counting up to it and if they are then
            primeFactor = true;
            //console.log(factor);
            for (let counter = 2; counter < factor; counter++) {
                if(factor % counter === 0){
                    primeFactor = false; 
                }
            } 
            if (primeFactor === true) { 
                largestPrimeFactor = factor; 
                console.log(factor);
            }
            }
    }
    //console.log(largestPrimeFactor);
}
question3(13195);