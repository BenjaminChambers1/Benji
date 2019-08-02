function question9(n){
    c = null;
    found = false;
 for (let a = 0; a < n; a++) { //for every value of a
     for (let b = 0; b < a; b++) { //for everyvalue of b
        c = n - a - b; 
        if ((a * a) + (b * b) === (c * c)){
            console.log(`a = ${a}, b = ${b}, c = ${c}. Sum is ${n}`)
            found = true;
            }     
        if (found === true){break;}
        }
     if (found === true){break;}
    }
}
question9(1000);