// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// const country = "Portugal";
// const language = "Portuguese"; 
// const population = 10;
// console.log(country, language, population);

// age = 26;
// firstName = "Sarah";
// let myCurrentJob = "teacher";

// console.log(firstName, age, myCurrentJob, PI);

// console.log("=== DATA TYPES ===");

// let newAge = 23; 
// console.log(newAge);
// console.log(typeof newAge);

// let anotherName = "Princess"; 
// console.log(anotherName);
// console.log(typeof anotherName);

// let javascriptIsFun = true; 
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// console.log(typeof 42);
// console.log(typeof "Hello");
// console.log(typeof true);
// console.log(typeof undefined);

console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

console.log("Hello " + "World" + "!");
console.log("I am " + 25 + " years old");

console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5;
console.log("x starts as:", x);

x += 10;
console.log("After x += 10:", x);

x *= 4;
console.log("After x *= 4:", x);

x /= 2;
console.log("After x /= 2:", x);

x++;
console.log("After x++:", x);

x--;
x--;
console.log("After x-- twice:", x);

let score = 100;
score += 50;
score *= 2;
score -= 25;
score++;
score++;
console.log("Final score:", score);

console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder);

console.log("Complex comparison:");
console.log(now - 1991 > now - 2018);

const myAge = 25;
console.log("My age >= 18:", myAge >= 18);
console.log("Is 100 > 99:", 100 > 99);
const compareResult = myAge > ageSarah;
console.log("Am I older than Sarah?", compareResult);
console.log("Compare calculations:", (50 - 20) > (10 + 5));

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//1. Calculate BMI
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn * heightJohn;

//2. Create markHigherBMI variable
const markHigherBMI = BMIMark > BMIJohn;

//3. Log results to console
console.log("Mark's BMI:", BMIMark); [ 'Mark\'s BMI:', 27.309968138370508 ],
console.log("John's BMI:", BMIJohn); ['John\'s BMI:', 24.194608809993426 ]

console.log("Mark has a higher BMI than John:", markHigherBMI);
