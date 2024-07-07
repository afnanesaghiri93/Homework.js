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
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase());
}//DONATELLO, LEONARDO, RAPHAEL, MICHAELANGELO


////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 
'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic')); // Index of Titanic: 8 // The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring.

// 1-Use the .sort method
favMovies.sort();
console.log(favMovies);
// 1- what did this do to the array? Did it permanently alter it? This method sorts the array in alphabetical order and permanently alert it.

//2- Use the method pop
favMovies.pop();
console.log(favMovies);// pop() :  removes the last element from the array which is 'Volver'

//3- Push "Guardians of the Galaxy"
favMovies.push('Guardians of the Galaxy');
console.log(favMovies);// push(): add element 'Guardians of the Galaxy' to final elemnt in the array 

//4- Reverse the array
favMovies.reverse();
console.log(favMovies);//reverses the order of the elements in an array.
//5- Use the shift method
favMovies.shift();
console.log(favMovies);//removes the first element from the array which is 'Guardians of the Galaxy'

//6- Unshift - what does it return? It returns the new length of the array which is 'The Godfather'
const unshiftReturn = favMovies.unshift('The Godfather');
console.log(favMovies); 
console.log(unshiftReturn); // Unshift returns: 19/ unshift adds new elements to the beginning of an array and returns the new length of the array.

// 7-Splice "Django Unchained" and add "Avatar"
const djangoIndex = favMovies.indexOf('Django Unchained');
if (djangoIndex !== -1) {
    favMovies.splice(djangoIndex, 1, 'Avatar');// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new .
}
console.log(favMovies);// 8-Thought question: did this permanently alter our array? ==> Yes, splice permanently alters our array.

// 9- Slice the last half of the array 
console.log(lastHalf);// The slice() method copies a given part of an array and returns that copied part as a new array. It doesn’t change the original array.
const lastHalf = favMovies.slice(0,8);
console.log(favMovies);
// 9- what is going on here? ==> Slice does not permanently alter the array.

// 10-Console log your final results
console.log(favMovies);

// 11-After running the above tasks, console.log the index of "Fast and Furious"
console.log(favMovies.indexOf('Fast and Furious')); // 
//Q1- what value do we get when we look for the index of something that is not in the array?
//A1- When looking for an index of an element that doesn't exist, it returns -1.
//Q2-that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
//A2-Using let would allow the reference to the array to be changed as well, but it is not necessary here because we only need to modify the contents, not the reference. 

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////
