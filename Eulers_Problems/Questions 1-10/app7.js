
// What is the 10 001st prime number

function question7(numberOfPrimes) {
    
    IsPrime = null;
    primeCounter = 0;
    primeNumber = null;
    largestPrime = null;
    for (let number = 0; primeCounter < numberOfPrimes; number++) {
        IsPrime = true;
        for (let divider = 2; divider < number; divider++) {
            if (number % divider === 0){ 
                IsPrime = false;
            }
            else {primeNumber = number;}
        }
        if (IsPrime === true) {
            //console.log(primeNumber); 
            primeCounter++;
            largestPrime = primeNumber;
        }
    }
    console.log(largestPrime);
}
question7(10001);