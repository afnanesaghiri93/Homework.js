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
//Using a switch statement
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

////////////////////////////////
// Wild Wild Life
////////////////////////////////
//Use the following arrays to answer the questions below (name,species ,age, hometown):
// You should be modifying the elements by accessing them. It is up to you which methods to use.
// I will use the splice method

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
plantee.splice(2, 1, plantee[2] + 1); // Change Plantee's age is now 5001
wolfy.splice(3,1,"Gotham City" ); //Change Wolfy's hometown is now "Gotham City"
dart.splice(4,0,"Hawkins");//Give D'Art a second hometown by adding "Hawkins"
wolfy.splice(0,1,"Gameboy");//Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

console.log(plantee); // ["Plantee", "plant", 5001, "Mordor"]
console.log(wolfy); // ["Gameboy", "wolf", 16, "Gotham City"]
console.log(dart); // ["D'Art", "Demogorgan Dog", 2, "Upside Down", "Hawkins"]
console.log(porgee); // ["Porgee", "Porg", 186, "Ahch-To"]
console.log(sharky);//[ 'Sharky', 'shark', 20, 'Left Coast' ]




////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////
