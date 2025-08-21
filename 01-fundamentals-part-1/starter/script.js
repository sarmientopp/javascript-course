
// // // let js = "amazing";
// // // console.log(40 + 8 + 23 - 10);

// // // console.log("=== VARIABLES ===");

// // // let firstName = "Jonas";
// // // console.log(firstName);

// // // let age = 30;
// // // age = 31;
// // // console.log(age);

// // // const birthYear = 1991;
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI);

// // // var job = "programmer";
// // // job = "teacher";
// // // console.log(job);

// // // const country = "Portugal";
// // // const language = "Portuguese"; 
// // // const population = 10;
// // // console.log(country, language, population);

// // // age = 26;
// // // firstName = "Sarah";
// // // let myCurrentJob = "teacher";

// // // console.log(firstName, age, myCurrentJob, PI);

// // // console.log("=== DATA TYPES ===");

// // // let newAge = 23; 
// // // console.log(newAge);
// // // console.log(typeof newAge);

// // // let anotherName = "Princess"; 
// // // console.log(anotherName);
// // // console.log(typeof anotherName);

// // // let javascriptIsFun = true; 
// // // console.log(javascriptIsFun);
// // // console.log(typeof javascriptIsFun);

// // // let year;
// // // console.log(year);
// // // console.log(typeof year);

// // // let dynamicVariable = 23;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // dynamicVariable = "Now I'm a string!";
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // console.log(typeof 42);
// // // console.log(typeof "Hello");
// // // console.log(typeof true);
// // // console.log(typeof undefined);

// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log("Math operations:");
// // console.log("Addition:", 10 + 5);
// // console.log("Subtraction:", 20 - 8);
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division:", 15 / 3);
// // console.log("Exponentiation:", 2 ** 3);

// // const firstName = "Jonas";
// // const lastName = "Schmedtmann";
// // console.log(firstName + " " + lastName);

// // console.log("Hello " + "World" + "!");
// // console.log("I am " + 25 + " years old");

// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 5;
// // console.log("x starts as:", x);

// // x += 10;
// // console.log("After x += 10:", x);

// // x *= 4;
// // console.log("After x *= 4:", x);

// // x /= 2;
// // console.log("After x /= 2:", x);

// // x++;
// // console.log("After x++:", x);

// // x--;
// // x--;
// // console.log("After x-- twice:", x);

// // let score = 100;
// // score += 50;
// // score *= 2;
// // score -= 25;
// // score++;
// // score++;
// // console.log("Final score:", score);

// // console.log("=== COMPARISON OPERATORS ===");

// // console.log("Age comparison:");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);

// // console.log("Number comparisons:");
// // console.log(25 > 20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult:", isFullAge);

// // const isJonasOlder = ageJonas > ageSarah;
// // console.log("Jonas is older:", isJonasOlder);

// // console.log("Complex comparison:");
// // console.log(now - 1991 > now - 2018);

// // const myAge = 25;
// // console.log("My age >= 18:", myAge >= 18);
// // console.log("Is 100 > 99:", 100 > 99);
// // const compareResult = myAge > ageSarah;
// // console.log("Am I older than Sarah?", compareResult);
// // console.log("Compare calculations:", (50 - 20) > (10 + 5));

// // let a, b;
// // a = b = 25 - 10 - 5;
// // console.log(a, b);

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);

// // // Test Data 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // //1. Calculate BMI
// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / heightJohn * heightJohn;

// // //2. Create markHigherBMI variable
// // const markHigherBMI = BMIMark > BMIJohn;

// // //3. Log results to console
// // console.log("Mark's BMI:", BMIMark); [ 'Mark\'s BMI:', 27.309968138370508 ],
// // console.log("John's BMI:", BMIJohn); ['John\'s BMI:', 24.194608809993426 ]

// // console.log("Mark has a higher BMI than John:", markHigherBMI);

// // // === QUICK QUIZ ANSWERS ===

// // // 1. What does x += 5 mean?
// // // It adds 5 to the current value of x (same as x = x + 5).
// // let numX = 10;
// // numX += 5; 
// // console.log("x after x += 5:", numX); // 15

// // // 2. What's the result of 2 + 3 * 4?
// // // Multiplication happens first → 3 * 4 = 12, then 2 + 12 = 14.
// // console.log("2 + 3 * 4 =", 2 + 3 * 4); // 14

// // // 3. How do you calculate 2 to the power of 3?
// // // Using the exponentiation operator (**)
// // console.log("2 ** 3 =", 2 ** 3); // 8

// // // 4. What type of value do comparison operators return?
// // // They return a boolean value (true or false).
// // console.log("Is 5 > 3?", 5 > 3); // true

// // // 5. Why use parentheses in (a + b) / 2?
// // // Parentheses ensure (a + b) is calculated first before division.
// // let numA = 4, numB = 6;
// // console.log("(a + b) / 2 =", (numA + numB) / 2); // 5

// ////////////////////////////////////
// // Strings and Template Literals
// // Personal info

// ////////////////////////////////////
// // Personal Info
// const firstName = "Princess";
// const job = "student";
// const birthYearOriginal = 2005;
// let currentYear = 2025;

// const princess = "I'm " + firstName + ", a " + (currentYear - birthYearOriginal) + " year old " + job + "!";
// console.log(princess);

// // Modern ES6 Template Literals
// const princessNew = `I'm ${firstName}, a ${currentYear - birthYearOriginal} year old ${job}!`;
// console.log(princessNew);

// // Expressions inside template literals
// console.log(`I'm ${2024 - 2005} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`); // true

// // Multiline strings
// console.log(`String
// multiple
// lines`);

// // Introduction
// const myName = "Princess"; 
// const myAge = 18; 
// const myJob = "student"; 
// const intro = `Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`;
// console.log(intro);

// ////////////////////////////////////
// // Function to generate info
// function generateInfo(age) {
//   const birthYear = currentYear - age;
//   const multiplicationResult = 10 * 5;
//   const isAdult = age >= 18;
//   return `Born in ${birthYear}, 10 * 5 = ${multiplicationResult}, Adult: ${isAdult}`;
// }

// console.log(generateInfo(30));
// console.log(generateInfo(15));
// console.log(generateInfo(22));

// ////////////////////////////////////
// // If / Else Examples
// const ageSarah = 15;
// if (ageSarah >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - ageSarah;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYearChild = 2012;
// let century = birthYearChild <= 2000 ? 20 : 21;
// console.log(century);

// const score = 85;
// if (score >= 60) {
//   console.log(`You passed with ${score} points! 🎉\nCongratulations!`);
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. Need ${pointsNeeded} more points.`);
// }

// ////////////////////////////////////
// // Grade Calculator
// const testScore = 78;
// if (testScore >= 90) {
//   console.log("Excellent! Grade A");
// } else if (testScore >= 80) {
//   console.log("Good job! Grade B");
// } else if (testScore >= 70) {
//   console.log("Not bad! Grade C");
// } else if (testScore >= 60) {
//   console.log("You passed! Grade D");
// } else {
//   console.log("You failed! Study harder");
// }

// ////////////////////////////////////
// // Age Verification
// const userAge = 20;
// if (userAge >= 18) {
//   console.log("Welcome! You can access all content");
// } else if (userAge >= 13) {
//   console.log("Welcome! Restricted content only");
// } else {
//   console.log("Sorry, you're too young");
// }

// ////////////////////////////////////
// // Truthy and Falsy Values
// let height = 0; // Example
// if (height !== undefined && height !== 0) {
//   console.log("Height is defined");
// } else {
//   console.log("Height is UNDEFINED or 0");
// }

// const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];
// values.forEach(val => {
//   console.log("Value:", val, "| Boolean:", Boolean(val), "|", Boolean(val) ? "Truthy" : "Falsy");
// });

// ////////////////////////////////////
// // BMI Challenge
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(`BMIs -> Mark: ${BMIMark.toFixed(2)}, John: ${BMIJohn.toFixed(2)}`);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})`);
// } else if (BMIMark < BMIJohn) {
//   console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})`);
// } else {
//   console.log(`Mark and John have the same BMI (${BMIMark.toFixed(2)})`);
// }

// // 1. Three main advantages of template literals over string concatenation:
// console.log("1. Advantages of Template Literals:");
// console.log("- Easier syntax with backticks, no need for + operators.");
// console.log("- Supports multiline strings without \\n.");
// console.log("- Allows embedded expressions with ${expression}.\n");

// // Example:
// const name = "Princess";
// const age = 18;
// console.log(`Hello, my name is ${name} and I am ${age} years old.\n`);


// // 2. What happens if the condition in an if statement is falsy?
// console.log("2. If statement with a falsy condition:");
// if (0) {
//   console.log("This will NOT run, because 0 is falsy.");
// } else {
//   console.log("The 'else' block runs when the condition is falsy.\n");
// }


// // 3. All 5 falsy values in JavaScript:
// console.log("3. The 5 falsy values in JavaScript are:");
// console.log("- 0");
// console.log("- '' (empty string)");
// console.log("- null");
// console.log("- undefined");
// console.log("- false\n");


// // 4. How to check if a variable is not undefined:
// console.log("4. Checking if a variable is not undefined:");
// let myVar;
// if (typeof myVar !== "undefined") {
//   console.log("myVar is defined.");
// } else {
//   console.log("myVar is undefined.\n");
// }


// // 5. Difference between '5' == 5 and '5' === 5:
// console.log("5. '5' == 5 vs '5' === 5:");
// console.log("'5' == 5 → true (loose equality, does type coercion).");
// console.log("'5' === 5 → false (strict equality, no type coercion).\n");

////////////////////////////////////
// Type Conversion and Coercion

// Type Conversion (manual) 
const inputYear = "1991";
console.log(Number(inputYear) + 18); // 2009
console.log(String(23), typeof String(23)); // "23", "string"

// Type Coercion (automatic) 
console.log("I am " + 23 + " years old"); // "I am 23 years old"
console.log("23" - "10" - 3); // 10
console.log("23" / "2"); // 11.5
console.log("23" * "2"); // 46

// Tricky Examples
let n = "1" + 1; // "11"
n = n - 1;       // 10
console.log(n);

console.log(2 + 3 + 4 + "5");    // "95"
console.log("10" - "4" - "3" - 2 + "5"); // "15"

// Exercise 1: Conversion Detective 
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5

const userAge = "25";
const userScore = 95;
const ageNumber = Number(userAge);
const scoreString = String(userScore);
console.log("ageNumber:", ageNumber, typeof ageNumber);
console.log("scoreString:", scoreString, typeof scoreString);

// Exercise 2: Fix the Bug 
const num1 = "10"; // simulate prompt input
const num2 = "5";  // simulate prompt input
const sum = Number(num1) + Number(num2);  
console.log(`Sum: ${sum}`); // 15


////////////////////////////////////
// Equality Operators: == vs. ===

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

console.log("18" === 18); // false
console.log("18" == 18);  // true
console.log(18 === 18);   // true

// Dangerous == cases
console.log("0" == 0);          
console.log(0 == false);        
console.log("0" == false);      
console.log(null == undefined); 

// Favourite Number 
const favourite = 23;
if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23, 7, or 9");
}
if (favourite !== 23) console.log("Why not 23?");

// Exercise 1: Equality Detective
console.log(5 === "5");   // false
console.log(5 == "5");    // true
console.log(true === 1);  // false
console.log(true == 1);   // true
console.log(false === 0); // false
console.log(false == 0);  // true

// Exercise 2: Fix the Login System
const username = "admin"; 
const password = "1234";
if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}


////////////////////////////////////
// Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// Complex Scenario
const agePerson = 20;
const hasPermission = true;
const hasExperience = false;
if ((agePerson >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}

// Exercise 1: Club Entry System
const clubAge = 19;
const hasID = true;
const isVIP = false;
if ((clubAge >= 21 && hasID) || isVIP) {
  console.log("Welcome to the club!");
} else {
  console.log("Sorry, you cannot enter");
}

// Exercise 2: Weather Advisor
const temperature = 25;
const raining = false;
const windy = true;
if (temperature >= 20 && temperature <= 30 && !raining && !windy) {
  console.log("Perfect day! Go outside and enjoy!");
} else if (temperature >= 15 && temperature <= 35 && !raining) {
  console.log("Good day! Maybe go for a walk.");
} else {
  console.log("Stay inside. It's not safe or comfortable.");
}


////////////////////////////////////
// The Conditional (Ternary) Operator

const userAge2 = 23;
const drink = userAge2 >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// Exercise 1: Status Messages
const isLoggedIn = true;
const welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
console.log(welcomeMessage);

const isPremium = false;
const price = isPremium ? 100 * 0.8 : 100;
console.log(price);

// Exercise 2: Smart Responses 
const score = 85;
const weather = "sunny";
const battery = 15;
console.log(`Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`);
console.log(`Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`);
console.log(`Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`);


////////////////////////////////////
// Coding Challenge #4

const bill = 275; // Try with 275, 40, and 430

const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
