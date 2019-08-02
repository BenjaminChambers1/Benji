//

function question2(max) {
    var next = null;
    var current = null;
    var previous = null;
    var total = null;
//loops through until max
   for (let index = 0; index < max; index++) { 
//for the first run through set previous as one and add one to the total
    if (index === 0){previous = 1;} 
//for the second run through set current as two and add it to the total 
    if (index === 1){current = 2;total = total + current;} 
    if (index > 1){ 
        //make the next number in the sequence the addition of the previous and the current 
        next = previous + current;
    if (next % 2 === 0) 
        // if the 'next' number is even then add it t the total
        {total = total + next;} 
        previous = current; 
        // move the numbers one along in the sequence by giving the current variable the value of next
    current = next; 
    //and the previous variable the value of current
    //console.log(next);
    }
    }   
    console.log(total);
}
question2(10);