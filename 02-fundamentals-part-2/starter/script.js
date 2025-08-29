
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

console.log(jonasArray[0]); // 'Jonas'
console.log(jonasArray[1]); // 'Schmedtmann'
console.log(jonasArray[2]); // 46


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);
console.log(jonas.firstName);
console.log(jonas.lastName);
console.log(jonas.age);
console.log(jonas.job);
console.log(jonas.friends);


jonas.job = "programmer";
jonas.age = 35;
jonas.location = "Portugal";
jonas.twitter = "@jonasschmedtman";
jonas.hasDriversLicense = true;

console.log(jonas);


const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 197,
  isRead: true,
  publisher: "HarperCollins",
};
book.pages = 200;

const playlist = {
  name: "Chill Vibes",
  creator: "Sarah",
  songs: ["Song 1", "Song 2", "Song 3"],
  genre: "Lo-fi / Chill",
  description: "Relaxing music for studying",
};

console.log(book.title);
console.log(book.author);
console.log(playlist.name);
console.log(playlist.creator);
console.log(book);
console.log(playlist);

const calculator = {
  num1: 10,
  num2: 5,
  operator: "+",
  add() { return this.num1 + this.num2; },
  subtract() { return this.num1 - this.num2; },
  multiply() { return this.num1 * this.num2; },
  divide() { return this.num1 / this.num2; },
  calculate() {
    switch (this.operator) {
      case "+": return this.add();
      case "-": return this.subtract();
      case "*": return this.multiply();
      case "/": return this.divide();
      default: return "Invalid operator";
    }
  },
  getResult() {
    return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
  },
};

console.log(calculator.calculate());
console.log(calculator.getResult());

const user = {
  firstName: "Princess",
  lastName: "Sarmiento",
  birthYear: 2005,
  location: "New Zealand",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Paula", status: "active" },
    { name: "Maureen", status: "inactive" },
    { name: "Krisha", status: "active" },
  ],
  isActive: true,
  calcAge() { this.age = new Date().getFullYear() - this.birthYear; return this.age; },
  addFriend(name, status = "active") { this.friends.push({ name, status }); },
  getActiveFriends() { return this.friends.filter(f => f.status === "active").length; },
  toggleStatus() { this.isActive = !this.isActive; },
  getSummary() {
    const age = this.age || this.calcAge();
    return `${this.firstName} ${this.lastName} is ${age} years old, lives in ${this.location}, and is currently ${this.isActive ? "active" : "inactive"}.
She has ${this.friends.length} friends, ${this.getActiveFriends()} of them active.
Her interests include: ${this.interests.join(", ")}.`;
  },
};

console.log(user.getSummary());
user.addFriend("Maureen", "active");
user.toggleStatus();
console.log("\nAfter updates:");
console.log(user.getSummary());
