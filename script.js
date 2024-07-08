//============ I. Variables & Datatypes==========//

/* ==========     A. Q  +  A     ===============//
Q-1-How do we assign a value to a variable?
A-1-The assignment (=) operator is used to assign a value to a variable or property. for example: let x = 2;
Q-2-How do we change the value of a variable?
A-2-we can change the value of variable declared via let to whatever we want and whenever we want , the restriction comes in the form of the const keyword ,by relying on const , we can't change the value of variable
for examlpe:
let mytext= true;
// we can change the value of mytext to anything
const siteUrl= www.google.com
 // we can't change the value of siteURL to somthing else
Q-3-How do we assign an existing variable to a new variable?
A-3- After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.
for example:
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
Q-4-Remind me, what are declare, assign, and define?
A-4- 
Declare : we can declare in js in 4 ways :
-Automatically
-var :declares a variable, optionally initializing it to a value.
-let : Declares a block-scoped, local variable, optionally initializing it to a value.
-const: Declares a block-scoped, read-only named constant
Assign : The assignment (=) operator is used to assign a value to a variable or property.
Define:Functions are defined, or declared, with the function keyword
Q-5-What is pseudocoding and why should you do it?Pseudo code, as the name suggests, from Pseudo which means 'false', is a false code or a representation of code that can be understood by anyone
A-5- Pseudocode literally means ‘fake code’. It is an informal and contrived way of writing programs 
in which you represent the sequence of actions and instructions (aka algorithms) 
in a form that humans can easily understand.
Q-6-What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
A-6- t depends on what we're doing. 75-90% thinking, 10-25% typing
-*/

// =============     B. Strings    ==============
/*For all other questions that involve writing code, you can solve them via the following instructions.
1- Create a variable called firstVariable
==> let firstVariable
2- Assign it the value of the string "Hello World"
==>  let firstVariable =  "Hello World";
3- Change the value of this variable to some number
==> firstVariable =  10;
4- Store the value of firstVariable in a new variable called secondVariable
==> firstVariable = "secondVariable";
==> let secondVariable =  "JavaScript";
5- Change the value of secondVariable to any string.
==> let secondVariable =  "JavaScript";
6- What is the value of firstVariable? 
==>  "secondVariable"
6- Create a variable called yourNameand set it equal to your name as a string. 
==> let yourName = "Afnane";
Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
==> console.log(`Hello, this is my name ${yourName} `);
*/
let firstVariable = "Hello World";
firstVariable = 10;
firstVariable = "secondVariable";
let secondVariable = "JavaScript";
console.log(firstVariable);
let yourName = "Afnane";
console.log(`Hello, This is my name ${yourName}`);


/* ================   C. Booleans   ===============*/
//Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const f = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false && false)
//   console.log(e &&'Kevin');
//   console.log(a < b) && (b < c) //  (a < b) || (b > c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a === a) && (a < d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 !== '48');

  /* ================= D. The farm ===============
1- Declare a variable animal. Set it to be either "cow" or something else
var animal = "Cow"
2-Write code that will print out "mooooo" if the it is equal to cow*/
let animal1 = "cow";
 if (animal1) {
    console.log("moooooo")
}
/*3-Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
Commit*/

let animal = "cow";
animal = false;
if (animal) {
    console.log("moooooo")
}
else {
    console.log("Hey! You're not a cow.")
}



/*================   E. Driver's Ed  ==============
1- Make a variable that holds a person's age; be semantic
let  name = "Chris"
let age =  30;

2- Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/
let name = "Chris"
let age = 30;// You can change this value to test different cases

if (age >= 16) {
    console.log("Here are the keys!");// age =30
}
else if (age < 16) {
    console.log("Sorry, you're too young.");// age = 15
}
else {
    console.log("Chris");// 
}


/*======       II. Loops           ====================
Remember: USE letwhen you initialize your for loops!
This is GOOD: for(let i = 0; i < var name: "person";*/
var age1 = 30;// You can change this value to test different cases
if  (age1 => 16){ 
console.log("Here are the keys!")
}
else {
console.log("Sorry, you're too young." )}
//This is NO GOOD: for(i = 0; i < 100; i++)
// ============ A. The basics =================
// 1- Write a loop that will print out all the numbers from 0 to 10, inclusive
console.log('Numbers from 1 to 10');
for (let i = 1; i <= 10; i++) {
    console.log(i);

}
// 2- Write a loop that will print out all the numbers from 10 up to and including 400
console.log('Numbers from 1 to 401');
for (let i = 10; i <= 401; i++)
    if (i % 10 === 0) {
        console.log(i);
    }
// 3- Write a loop that will print out every third number starting with 12 and going no higher than 4000
console.log('Numbers from 1 to 4000');
for(let i=12;i<=4050;i++)
    if(i % 3 == 0){
  console.log(i);
}

/*===================  B. Get even=======================
Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/
let i = 0
for(let i=1;i<=10;i++)
    if (i % 2 === 0) {
      console.log(`"<-- is an even number" ${i}`);

    }



/* ===================  C. Give me Five==================
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Example Output:
I found a 5. High five!
I found a 10. High five!*/
let z = 0
for(let z=1;z<=100;z++)//We’ll need a way to loop through all the numbers from 1 to 100b
    if (z % 5 === 0) {
      console.log(`"I found a number. High five!" ${z}`);
    }//To only get the numbers which are multiples of 5 we’ll use an if statement
    

/*Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:
I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!

For numbers divisible by both three and five, be sure your code prints both messages*/
let e = 0
for(let e=1;e<=100;e++)//We’ll need a way to loop through all the numbers from 1 to 100b
    if (e % 5 === 0) {
      console.log(`"I found a number ${e}. High five!" `);//To only get the numbers which are multiples of 3 we’ll use an if statement

    }
    else if(e % 3 === 0 ){
        console.log(`"I found a number ${e}. Three is a crowd `); 
    }
    else {
        console.log(`"I found a number ${e}. High five!" ${e} Three is a crowd`); 
    }

/* ======================= D. Savings account =========
1-Write code that will save the sum of all the numbers between 1 - 10 to a variable called  bank_account.
Check your work! Your bank_account should have $55 in it.

2-You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.*/
let bank_account = 0;
for (let i = 1; i < 11; i++) {
    bank_account += i;
};
console.log(bank_account);
bank_account = 0;
for (i = 1; i < 101; i++) {
    bank_account += i * 2;
};
console.log(bank_account);


// ==========================  III. Arrays & Control flow=====================
/* =============== A. Talk about it:
1-What are the things in an array called? // Each things or item in an array is called an element

2-Do Arrays guarantee those things will be in order?//yes , Arrays are ordered as you can iterate all its elements in increasing order but JavaScript does not guarantee the order of object properties.

3-What real-life thing could you model with an array?Contacts on a cell phone, items in a shopping list,Book titles in a Library */

/*=========== B. Easy Does It
1-Create an array that contains three quotes and store it in a variable called quotes*/
const quotes = [" Hello!", "World", "This is Javascript"];
console.log(quotes)

/* =========== C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]
1-How do you access the 1st element in the array?
const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0])
2-Change the value of "Hello" to "World"
const randomThings = [1, 10, "Hello", true]
randomThings[2] = "World";
console.log(randomThings);
3-Check the value of the array to make sure it updated the array. How? Why, yes! console.log(); 
console.log(randomThings);// Print the updated array  */

/* =========== D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
1-What would you write to access the 3rd element of the array?
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);
2-Change the value of "Github" to "Octocat"
3-Add a new element, "Cloud City" to the array */
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[4] = "Octocat";//Change the value of "Github" to "Octocat"
ourClass.push("Cloud City"); //Add a new element, "Cloud City" to the array which is Sardine
console.log(ourClass[2]);// write to access the 3rd element of the array
console.log(ourClass);// output : [ 'Salty', 'Zoom', 'Sardine', 'Slack', 'Octocat', 'Cloud City' ]

/*=== E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
Given the following array: const myArray = [5, 10, 500, 20]
1-Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
2-Remove the 5from the beginning of the array.
3-Add the string "Bob Marley"to the beginning of the array.
4-Remove the string of your choice from the end of the array.
5-Reverse this array using Array.prototype.reverse(). 
Did you mutate the array?//Yes, The reverse() method does not create a new array but rather reverses the elements in place.
 What does mutate mean? //Mutation means directly altering the original data structure (in this case, the array). 
When an array is mutated, its elements are changed, added, or removed directly, and the change is reflected in the original array variable.
 Did the .reverse() method return anything? //Yes, the reverse() method returns the array after reversing i
 */
const myArray = [5, 10, 500, 20]
myArray.push("Aegon");//Add the string "Aegon"to the end of the arra
myArray.push("Alex");//Add another string of your choice to the end of the array
console.log(myArray)// output: [ 5, 10, 500, 20, 'Aegon', 'Alex' ]
const removed = myArray.splice(4, 2);//Remove the string of your choice from the end of the array
myArray.pop()// or we can use pop to Remove the string of your choice from the end of the array
console.log(myArray)// output:[ 5, 10, 500, 20 ]
const reversedArray = myArray.reverse();//Reverse this array using Array.prototype.reverse() 
console.log(myArray);//output:[ 20, 500, 10, 5 ]

/*===========F. Biggie Smalls
Create a variable that contains an integer.
Write an if ... elsestatement that:
1-console.log()s "little number" if the number is entered is less than 100
2-console.log()s  big number if the number is greater than or equal to 100.*/

const n0 = 30; // You can change this value to test different cases

if (n0 < 100) {
    console.log("little number");//little number" if the number is entered is less than 100
} else {
    console.log("big number");//big number if the number is greater than or equal to 100.
}


/*===========G. Monkey in the Middle
Write an if ... else if ... elsestatement:
1-console.log() little number if the number entered is less than 5.
2-If the number entered is more than 10, log  big number.
3-Otherwise, log "monkey".*/

let n = 1; // You can change this value to test different cases

if (n < 5) {
    console.log("little number");//little number if the number entered is less than 5.
} else if (n >= 10) {
    console.log("big number");//If the number entered is more than 10, log  big number
} else {
    console.log("monkey");// if n = "string"
}

/* ==========H. What's in Your Closet?*///Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset1 = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
console.log(kristynsCloset)
/*1-What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset,
log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
2-Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
3-Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
4-Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
5-In the same way, access one item from Thom's pants array.
6-Access one item from Thom's accessories array.
7-Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
8-Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.*/
const kristynsCloset1 = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
 
console.log("Kristyn is wearing the " + kristynsCloset1[2] + " today!");//1- What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset,
kristynsCloset1.splice(6, 0, "raybans");//2- Add "raybans" to her closet after "yellow knit hat"
console.log(kristynsCloset1)// 
kristynsCloset1[5] = "stained knit hat";// 3- Modify "yellow knit hat" to "stained knit hat".
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  
  const thomsShirt = thomsCloset[0][3];// 4- Access the first element in Thom's shirtsarray. :"blue button-up"
  const thomspants = thomsCloset[1][1];//accesses the second item in the pants array: "jeans".
  const thomsAccessory = thomsCloset[2][0];//accesses the third item in the accessories array: "wool mittens"
  console.log(kristynsCloset)

  //==========         IV. Functions     ==================//
/*==== A. printGreeting
Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
Like so?
console.log(printGreeting("Slimer"));
=> Hello there, Slimer!
You think you could? I think so too. Feel free to skip this problem, because you've already done it. 
If you've done the problem twice, read entire problems carefully before doing them from now on.*/
function printGreeting (name){
    return `Hello there, ${name}`
}
console.log(printGreeting("Slimer")); // output: Hello there, Slimer!

// /* ====B. printCool
// 1-Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";*/
// function printCool(name) {//This function printCool takes one parameter "name"
//     return `${name} is cool`;
// }

// console.log(printCool("Captain Reynolds")); // => "Captain Reynolds is cool"

// /* =======C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125*/
// function calculateCube(number) {
//     const volume = number ** 3; // Calculating volume of the cube
//     console.log(volume); // Printing the volume
//   }
  
//   calculateCube(5); // => 125



// /*======== D.isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
// console.log(isVowel("a"));
// => true*/

//   function isVowel(char) {
//     // Convert the character to lowercase to handle case insensitivity
//     var lowerCaseChar = char.toLowerCase();
    
//     // Check if the character is a vowel
//     return lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u';
//   }
   
//   console.log(isVowel("a")); // => true
//   console.log(isVowel("E")); // => true
//   console.log(isVowel("x")); // => false

//   /*===== E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]*/
// function getTwoLengths(str1, str2) {
//     var length1 = str1.length;
//     var length2 = str2.length;
    
//     // Return an array of the lengths
//     return [length1, length2];
//   }
  
//   console.log(getTwoLengths("Hank", "Hippopopalous")); // => [4, 13]

  /* ======= F. getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]*/
function getMultipleLengths(arr) {
    // Initialize an empty array to store lengths
    var lengths = [];
  
    for (var i = 0; i < arr.length; i++) {
      
      lengths.push(arr[i].length);
    }
  
    // Return the array of lengths
    return lengths;
  }
  
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); // => [5, 4, 2, 2, 4]

  /* ======= G. maxOfThree
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
console.log(maxOfThree(6, 9, 1));
=> 9
Did you use Google and find Math.max()? If so, 
great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().*/
function maxOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  }
  
  console.log(maxOfThree(6, 9, 1)); // => 9
  console.log(maxOfThree(100, 25, 80)); // => 100
  console.log(maxOfThree(10, 10, 10)); // => 10

  /* ======= H. printLongestWord
Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter"
*/
function printLongestWord(arr) {
    // Initialize variables to keep track of the longest word and its length
    let longestWord = "";
    let maxLength = 0;
  
    // Iterate through each word in the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current word is longer than the current longest word
      if (arr[i].length > maxLength) {
        // Update the longest word and its length
        longestWord = arr[i];
        maxLength = arr[i].length;
      }
    }
  
    // Return the longest word found
    return longestWord;
  }
  
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
  // => "Peanutbutter"

  /* ===============  Objects============== 
Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
========= A. Make a user object
1-Create an object called user.
2-Write in to the object the key-value pairs for name, email, age, and purchased. 
Set the value of purchased to an empty array []. Set the other values to whatever you would like.*/
// let user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     age: 30,
//     purchased: []
//   };
//   /* ===== B. Update the user
// Our user has changed his or her email address. Without changing the original user object, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++*/
  
//   // Update email address
//   let updatedUser = { ...user, email: "john.smith@example.com" };
  
//   // Increment age
//   let userWithBirthday = { ...user, age: user.age + 1 };
  
//   console.log(updatedUser);
//   console.log(userWithBirthday);
  /* ======= C. Adding keys and values
You have decided to add your user's location to the data that you want to collect.
1- Without changing the original user object, add a new key locationto the object, and give it a value or some-or-other location (a string).*/
// Add location key and value without modifying the original user object
let user0 = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    purchased: []
  };
  
  // Add location key and value without modifying the original user object
  let updatedUser0 = {
    ...user0,
    location: "New York City"
  };
  
  console.log(updatedUser0);
//   /* ===== D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
// Console.log just the "Merino jodhpurs" from the purchased array.*/
// // Simulate purchases using .push()
let user1 = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    purchased: []
  };
  
user1.purchased.push("carbohydrates");
user1.purchased.push("peace of mind");
user1.purchased.push("Merino jodhpurs");
// console.log(user1.purchased[2]); // 

/* ========= E. Object-within-object
Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
If we want to give our user a friend with a name and age, we could write:
user.friend = {
    name: "Grace Hopper",
    age: 85
}
When we console.log user, we would see the friendobject added to our user object.
Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
Console.log just the friend's name
Console.log just the friend's location
CHANGE the friend's age to 55
The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
Console.log just "A latte" from the friend's purchased array.*/
let user2 = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    purchased: [],
    friend: {
      name: "Grace Hopper",
      age: 85,
      location: "New York",
      purchased: []
    }
  };
  
  console.log(user2.friend.name); // => "Grace Hopper"
  console.log(user2.friend.location); // => "New York"
  
  user2.friend.age = 55;
  user2.friend.purchased.push("The One Ring");
  user2.friend.purchased.push("A latte");
  
  console.log(user2.friend.purchased[1]); // => "A latte"

// /* === F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.*/
// console.log("User's purchased items:");
// for (let i = 0; i < user.purchased.length; i++) {
//   console.log(user.purchased[i]);
// }


// console.log("\nFriend's purchased items:");// Iterate over Friend's purchased array
// for (let i = 0; i < user2.friend.purchased.length; i++) {
//   console.log(user2.friend.purchased[i]);
// }
/* ==== G. Functions can operate on objects
Write a single function updateUser that takes no parameters. When the function is run, it should:
it should increment the user's age by 1
make the user's name uppercase
The function does not need a return statement, it will merely modify the user object.
Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, 
and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.*/

let user3 = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    purchased: ["carbohydrates", "peace of mind", "Merino jodhpurs"],
    friend: {
      name: "Grace Hopper",
      age: 85,
      location: "New York",
      purchased: ["The One Ring", "A latte"]
    }
  };
  
  // Function to update user object
  function updateUser() {
    user3.age++;
    user3.name = user3.name.toUpperCase();
  }
  
  // Function to modify any person object
  function oldAndLoud(person) {
    person.age++;
    person.name = person.name.toUpperCase();
  }
  
  // Testing updateUser function
  console.log("Before updateUser:");
  console.log(user3);
  updateUser();
  console.log("After updateUser:");
  console.log(user3);
  
  // Testing oldAndLoud function with user as argument
  console.log("\nBefore oldAndLoud:");
  console.log(user3);
  oldAndLoud(user3);
  console.log("After oldAndLoud:");
  console.log(user3);


  // ============================   Cat Combinator ===================================
  /* 1. Mama cat
*Define an object called cat1 that contains the following properties:
name
breed
age (a number)
*console.log the cat's age
*console.log the cat's breed*/
// let cat1 = {
//     name: "Mama",
//     breed: "Siamese",
//     age: 5
//   };
  
//   console.log(cat1.age);   // Logs: 5
//   console.log(cat1.breed); // Logs: Siamese
//   /* 2. Papa cat
// Define an object called cat2 that also contains the properties:
// name
// breed
// age (a number)*/
// let cat2 = {
//     name: "Papa",
//     breed: "Maine Coon",
//     age: 7
//   };
//   /* 3. Combine Cats!
// The cats are multiplying!
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
// Example:
// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }
// { name: "Jam", age: 45, breed: "Siamese" }*/
let cat11 = {
    name: "Joe",
    age: 19,
    breed: "Mog"
  };
  
  let cat22 = {
    name: "Jam",
    age: 45,
    breed: "Siamese"
  };
 
  function combineCats(mama, papa) {
   
    let combinedName = mama.name + papa.name;
  
    let combinedAge = 1;
  
    let combinedBreed = mama.breed + "-" + papa.breed;
  
    // Return the combined cat object
    return {
      name: combinedName,
      age: combinedAge,
      breed: combinedBreed
    };
  }
  
  console.log(combineCats(cat11, cat22));

/* 4. Cat brain bender
If combineCatsreturns an object, and if combineCats takes objects as arguments, then it stands to reason that:
catCombinator can use itself as its own argument.
Take a second to stew on that . . .
What is the result of:
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
Whoa . . .
The above console.log is two levels deep of combineCats.
Write a console.log that is three levels deep of combineCats. 
combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.*/
// console.log(combineCats(combineCats(combineCats(cat11, cat22), combineCats(cat11, cat22)), combineCats(combineCats(cat1, cat22), combineCats(cat11, cat22))));