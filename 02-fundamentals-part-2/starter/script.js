
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]); // 'Jonas'
// console.log(jonasArray[1]); // 'Schmedtmann'
// console.log(jonasArray[2]); // 46


// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);
// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);


// jonas.job = "programmer";
// jonas.age = 35;
// jonas.location = "Portugal";
// jonas.twitter = "@jonasschmedtman";
// jonas.hasDriversLicense = true;

// console.log(jonas);


// const book = {
//   title: "The Alchemist",
//   author: "Paulo Coelho",
//   pages: 197,
//   isRead: true,
//   publisher: "HarperCollins",
// };
// book.pages = 200;

// const playlist = {
//   name: "Chill Vibes",
//   creator: "Sarah",
//   songs: ["Song 1", "Song 2", "Song 3"],
//   genre: "Lo-fi / Chill",
//   description: "Relaxing music for studying",
// };

// console.log(book.title);
// console.log(book.author);
// console.log(playlist.name);
// console.log(playlist.creator);
// console.log(book);
// console.log(playlist);

// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",
//   add() { return this.num1 + this.num2; },
//   subtract() { return this.num1 - this.num2; },
//   multiply() { return this.num1 * this.num2; },
//   divide() { return this.num1 / this.num2; },
//   calculate() {
//     switch (this.operator) {
//       case "+": return this.add();
//       case "-": return this.subtract();
//       case "*": return this.multiply();
//       case "/": return this.divide();
//       default: return "Invalid operator";
//     }
//   },
//   getResult() {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// console.log(calculator.calculate());
// console.log(calculator.getResult());

// const user = {
//   firstName: "Princess",
//   lastName: "Sarmiento",
//   birthYear: 2005,
//   location: "New Zealand",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Paula", status: "active" },
//     { name: "Maureen", status: "inactive" },
//     { name: "Krisha", status: "active" },
//   ],
//   isActive: true,
//   calcAge() { this.age = new Date().getFullYear() - this.birthYear; return this.age; },
//   addFriend(name, status = "active") { this.friends.push({ name, status }); },
//   getActiveFriends() { return this.friends.filter(f => f.status === "active").length; },
//   toggleStatus() { this.isActive = !this.isActive; },
//   getSummary() {
//     const age = this.age || this.calcAge();
//     return `${this.firstName} ${this.lastName} is ${age} years old, lives in ${this.location}, and is currently ${this.isActive ? "active" : "inactive"}.
// She has ${this.friends.length} friends, ${this.getActiveFriends()} of them active.
// Her interests include: ${this.interests.join(", ")}.`;
//   },
// };

// console.log(user.getSummary());
// user.addFriend("Maureen", "active");
// user.toggleStatus();
// console.log("\nAfter updates:");
// console.log(user.getSummary());

// const guessInput = document.querySelector(".guess");
// console.log(guessInput);

// const buttonQuery = document.querySelector("#btn");
// const buttonById = document.getElementById("btn");
// console.log(buttonQuery);
// console.log(buttonById);
// console.log(buttonQuery === buttonById);

// const allSpans = document.querySelectorAll("span");
// console.log(allSpans);

// const firstSpan = document.querySelector("span");
// console.log(firstSpan.textContent);

// const highlighted = document.querySelector(".highlight");
// const spanInsideDiv = document.querySelector("div span");
// console.log(highlighted, spanInsideDiv);

// const message = document.querySelector(".message");

// console.log(message.textContent);
// message.textContent = "Hello from JavaScript!";
// message.innerHTML = "<strong>Bold text from JS!</strong>";
// console.log(message.innerText);

// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default text";
// input.placeholder = "Type here";

// const heading = document.querySelector("h1");

// heading.style.color = "black";
// heading.style.backgroundColor = "pink";
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

// const heading = document.querySelector("h1");
// const button = document.querySelector("#btn");
// const input = document.querySelector(".guess");
// const message = document.querySelector(".message");
// const scoreValue = document.querySelector(".score-value");

// heading.textContent = "Your Name Here";

// button.style.backgroundColor = "blue";
// button.style.color = "white";
// button.style.padding = "10px 20px";
// button.style.border = "none";
// button.style.borderRadius = "5px";

// input.placeholder = "Type something cool...";

// message.innerHTML = "This is <strong>bold</strong> text from JavaScript!";

// scoreValue.style.fontSize = "2rem";
// scoreValue.style.color = "green";
// scoreValue.style.fontWeight = "bold";

// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "green";
// });

// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// input.addEventListener("input", function () {
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
// });

// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);
//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = "";
//   }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// heading.addEventListener("click", function () {
//   heading.style.color = "purple";
// });

// input.addEventListener("input", function () {
//   const count = input.value.length;
//   message.textContent = `Character count: ${count}`;
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === " ") {
//     message.textContent = "Spacebar pressed!";
//   }
// });

// button.addEventListener("mouseover", function () {
//   button.textContent = "Hovering!";
// });

// button.addEventListener("mouseout", function () {
//   button.textContent = "Click Me!";
// });

// heading.addEventListener("dblclick", function () {
//   heading.textContent = "Double-clicked!";
//   heading.style.backgroundColor = "lightblue";
// });

// const score1El = document.getElementById("score-1");
// const score2El = document.getElementById("score-2");
// const btnAdd = document.querySelectorAll(".btn-add");
// const btnReset = document.getElementById("btn-reset");
// const winningScoreInput = document.getElementById("winning-score");
// const statusText = document.querySelector(".status");
// const winnerText = document.querySelector(".winner");
// const winnerNameEl = document.querySelector(".winner-name");
// const player1Div = document.querySelector(".player-1");
// const player2Div = document.querySelector(".player-2");

// let scores = { 1: 0, 2: 0 };
// let winningScore = Number(winningScoreInput.value);
// let gameOver = false;

// function updateScore(player) {
//   if (gameOver) return;
//   scores[player]++;
//   document.getElementById(`score-${player}`).textContent = scores[player];
//   if (scores[player] >= winningScore) {
//     gameOver = true;
//     winnerText.classList.remove("hidden");
//     winnerNameEl.textContent = `Player ${player}`;
//     if (player === 1) {
//       player1Div.classList.add("winner");
//       player2Div.classList.add("loser");
//     } else {
//       player2Div.classList.add("winner");
//       player1Div.classList.add("loser");
//     }
//   }
// }

// btnAdd.forEach(button => {
//   button.addEventListener("click", function () {
//     const player = this.dataset.player;
//     updateScore(player);
//   });
// });

// btnReset.addEventListener("click", resetGame);

// winningScoreInput.addEventListener("input", function () {
//   winningScore = Number(this.value);
//   document.querySelector(".target").textContent = winningScore;
//   resetGame();
// });

// function resetGame() {
//   scores = { 1: 0, 2: 0 };
//   gameOver = false;
//   score1El.textContent = 0;
//   score2El.textContent = 0;
//   winnerText.classList.add("hidden");
//   player1Div.classList.remove("winner", "loser");
//   player2Div.classList.remove("winner", "loser");
//   statusText.textContent = `First to ${winningScore} wins!`;
// }

// document.addEventListener("keydown", function (e) {
//   if (e.key === "1") updateScore(1);
//   if (e.key === "2") updateScore(2);
//   if (e.key.toLowerCase() === "r") resetGame();
// });

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]); // 'Jonas'
// console.log(jonasArray[1]); // 'Schmedtmann'
// console.log(jonasArray[2]); // 46


// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);
// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);


// jonas.job = "programmer";
// jonas.age = 35;
// jonas.location = "Portugal";
// jonas.twitter = "@jonasschmedtman";
// jonas.hasDriversLicense = true;

// console.log(jonas);


// const book = {
//   title: "The Alchemist",
//   author: "Paulo Coelho",
//   pages: 197,
//   isRead: true,
//   publisher: "HarperCollins",
// };
// book.pages = 200;

// const playlist = {
//   name: "Chill Vibes",
//   creator: "Sarah",
//   songs: ["Song 1", "Song 2", "Song 3"],
//   genre: "Lo-fi / Chill",
//   description: "Relaxing music for studying",
// };

// console.log(book.title);
// console.log(book.author);
// console.log(playlist.name);
// console.log(playlist.creator);
// console.log(book);
// console.log(playlist);

// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",
//   add() { return this.num1 + this.num2; },
//   subtract() { return this.num1 - this.num2; },
//   multiply() { return this.num1 * this.num2; },
//   divide() { return this.num1 / this.num2; },
//   calculate() {
//     switch (this.operator) {
//       case "+": return this.add();
//       case "-": return this.subtract();
//       case "*": return this.multiply();
//       case "/": return this.divide();
//       default: return "Invalid operator";
//     }
//   },
//   getResult() {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// console.log(calculator.calculate());
// console.log(calculator.getResult());

// const user = {
//   firstName: "Princess",
//   lastName: "Sarmiento",
//   birthYear: 2005,
//   location: "New Zealand",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Paula", status: "active" },
//     { name: "Maureen", status: "inactive" },
//     { name: "Krisha", status: "active" },
//   ],
//   isActive: true,
//   calcAge() { this.age = new Date().getFullYear() - this.birthYear; return this.age; },
//   addFriend(name, status = "active") { this.friends.push({ name, status }); },
//   getActiveFriends() { return this.friends.filter(f => f.status === "active").length; },
//   toggleStatus() { this.isActive = !this.isActive; },
//   getSummary() {
//     const age = this.age || this.calcAge();
//     return `${this.firstName} ${this.lastName} is ${age} years old, lives in ${this.location}, and is currently ${this.isActive ? "active" : "inactive"}.
// She has ${this.friends.length} friends, ${this.getActiveFriends()} of them active.
// Her interests include: ${this.interests.join(", ")}.`;
//   },
// };

// console.log(user.getSummary());
// user.addFriend("Maureen", "active");
// user.toggleStatus();
// console.log("\nAfter updates:");
// console.log(user.getSummary());


console.log("=== ARRAYS ===");

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const mixed = ["Jonas", 27, true, friends];
console.log(mixed);


const years = new Array(1991, 1984, 2008, 2020);
console.log(years);


console.log(friends[0]); 
console.log(friends[1]); 
console.log(friends[2]); 
console.log(friends.length); 
console.log(friends[friends.length - 1]); 


friends[1] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
console.log(ages);

const hobbies = ["reading", "drawing", "basketball"];
const numbers = [5, 12, 8, 20, 7];
console.log(hobbies[0], hobbies[hobbies.length - 1]);
console.log(numbers[0], numbers[numbers.length - 1]);
hobbies[1] = "coding";
const personalArray = ["Princess", 18, true];
console.log(hobbies, numbers, personalArray);


const friends2 = ["Michael", "Steven", "Peter"];
const newLength = friends2.push("Jay");
console.log(friends2, newLength);
friends2.unshift("John");
console.log(friends2);
const popped = friends2.pop();
console.log(popped, friends2);
const shifted = friends2.shift();
console.log(shifted, friends2);
console.log(friends2.indexOf("Steven"));
console.log(friends2.indexOf("Bob"));
console.log(friends2.includes("Steven"));
console.log(friends2.includes("Bob"));


let fruits = ["apple", "banana"];
fruits.push("orange");
fruits.unshift("grape");
fruits.pop();
console.log(fruits.includes("banana"));
console.log(fruits.indexOf("grape"));
console.log(fruits);

const friends3 = ["Michael", "Steven", "Peter"];
for (let i = 0; i < friends3.length; i++) {
  console.log(friends3[i]);
}

const years2 = [1991, 2007, 1969, 2020];
const ages2 = [];
for (let i = 0; i < years2.length; i++) {
  ages2.push(2037 - years2[i]);
}
console.log(ages2);

friends3.forEach(function (friend, index) {
  console.log(`${index}: ${friend}`);
});

friends3.forEach((friend, index) => {
  console.log(`Friend ${index + 1}: ${friend}`);
});

const grades = [85, 92, 78, 96, 88, 74];
let total = 0;
for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}
const average = total / grades.length;
console.log(`Average grade: ${average.toFixed(2)}`);

let passedCount = 0;
grades.forEach((grade) => {
  if (grade >= 70) passedCount++;
});
console.log(`${passedCount} out of ${grades.length} students passed`);

const numbers2 = [10, 25, 30, 15, 40];
const doubled = [];
for (let i = 0; i < numbers2.length; i++) {
  doubled.push(numbers2[i] * 2);
}
console.log(doubled);
numbers2.forEach((num, index) => {
  console.log(`Number at index ${index}: ${num}`);
});
let sum = 0;
for (let i = 0; i < numbers2.length; i++) {
  sum += numbers2[i];
}
console.log(`Sum: ${sum}`);
let countGreaterThan20 = 0;
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > 20) countGreaterThan20++;
}
console.log(`Numbers greater than 20: ${countGreaterThan20}`);

const studentGrades = [78, 85, 92, 67, 88, 95, 73, 82];

function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) highest = grades[i];
  }
  return highest;
}

function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) lowest = grades[i];
  }
  return lowest;
}

function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) count++;
  }
  return count;
}

const avg = calculateAverage(studentGrades);
const high = findHighestGrade(studentGrades);
const low = findLowestGrade(studentGrades);
const passing = countPassing(studentGrades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${avg.toFixed(2)}`);
console.log(`Highest: ${high}`);
console.log(`Lowest: ${low}`);
console.log(`Passing students: ${passing} out of ${studentGrades.length}`);

