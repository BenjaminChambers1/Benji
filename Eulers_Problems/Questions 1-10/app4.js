function question4(number) {
    var largestMultiple1 = null;
    var largestMultiple2 = null;
    var ans = null;
for (let index = 0; index < number; index++) {
    var num = index.toString();
    numReverse = num.split("");
    numReverse= numReverse.reverse();
    numReverse = numReverse.join("");
    if (num === numReverse) {
        //console.log(index);
        for (let count = 0; count < index; count++) {
            if (index % count === 0 && count.toString().length <= 3){
                ans = index / count ;
                if (ans.toString().length <= 3) {
                    largestMultiple1 = count;
                    //console.log(largestMultiple1, index);
                    largestMultiple2 = ans;
                }
                //console.log(index, largestMultiple1);
            }
        }
       
    }
}

console.log(`${largestMultiple1} x ${largestMultiple2}`);
}

question4(1000000);