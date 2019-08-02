// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.
function question10(n) {
    IsPrime = null;
    primeNumber = null;
    total = null;
    for (let number = 2; number < n; number++) {
        IsPrime = true;
        for (let divider = 2; divider < number; divider++) {
            if (number % divider === 0){ 
                IsPrime = false;
            }
        }
        if (IsPrime === true) {
            total = total + number;
            console.log(number);
        }
    }
    console.log(total);
}
question10(2000000);