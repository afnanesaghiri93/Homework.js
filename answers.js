// Homework for 07/06/2024
// 

// Part II: JavaScript Reps
////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {//Write a for loop that will log the numbers 1 through 20.
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i++ ) {// Write a for loop that will log only the even numbers in 0 through 200.
    if  (i % 2 === 0)
        console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {//1-Write a javascript application that logs all numbers from 1 - 100
    switch (true) {
        case (i % 3 === 0 && i % 5 === 0):
            console.log('FizzBuzz');//4-If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
            break;
        case (i % 3 === 0):
            console.log('Fizz');//2-If a number is divisible by 3 log "Fizz" instead of the number.
            break;
        case (i % 5 === 0):
            console.log('Buzz');//3-If a number is divisible by 5 log "Buzz" instead of the number.
            break;
        default:
            console.log(i);
    }
}