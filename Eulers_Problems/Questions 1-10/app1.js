function question1(number) {
    var total = 0;
for (let counter = 0; counter < number; counter++) {
    if (counter % 3 === 0 || counter % 5 === 0) {total = total + counter;}
}
console.log(total);
}
question1(10);