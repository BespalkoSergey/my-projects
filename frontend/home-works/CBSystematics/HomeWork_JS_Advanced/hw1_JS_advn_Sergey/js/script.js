// Задание 1 -----------------------------------------
function Man(name, age, hello, country) {
  this.name = name;
  this.age = age;
  this.hello = hello;
  this.country = country;
  this.sayHello = () => {
    return `${this.hello}, My name is ${this.name}, and I\`m from ${this.country}, ${this.age} years old.`;
  };
}

let Sergio = new Man("Sergio", 27, "Hola", "Spain");
let Serge = new Man("Serge", 28, "Salut", "France");
let Serginho = new Man("Serginho", 29, "Oi", "Portugal");
let Sergius = new Man("Sergius", 30, "Gratissimum", "Rome");

function showSolution() {
  console.log(Sergio.sayHello());
  console.log(Serge.sayHello());
  console.log(Serginho.sayHello());
  console.log(Sergius.sayHello());
}

//showSolution(); //<------------- Solution

// Задание 2 -----------------------------------------
function Human(name, age) {
  this.name = name;
  this.age = age;
}

let isa = new Human("Isa", 30);
let ismail = new Human("Ismail", 45);
let abel = new Human("Abel", 41);
let cain = new Human("Cain", 30);

function sortingAge(array) {
  array.sort(function(a, b) {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });
}

let array = [isa, ismail, abel, cain];
sortingAge(array);

console.log(array); //<----------- Solution

// Задание 3 -----------------------------------------
function HumanTsk3(age, name, sex, nationality) {
  this.age = age;
  this.name = name;
  this.sex = sex;
  this.nationality = nationality;
  this.sayName = () => {
    return `My name is ${this.name}`;
  };
  this.sayAge = () => {
    if (this.sex == "women") {
      return `my age is ${this.age < 23 ? this.age : this.age * 0.7}`;
    } else return `${this.age} years old`;
  };
  this.sayNationality = () => {
    return `and I\`m ${this.nationality}, ${
      this.nationality == "Ukrainian" ? "Україна понад усе!" : ""
    }`;
  };
  this.saySex = () => {
    return `${this.sayName()}, and I\`m a ${this.sex}`;
  };
}

let Sergey = new HumanTsk3(27, "Sergii", "men", "Ukrainian");
let eli = new HumanTsk3(40, "Eliška", "women", "Czech");
let val = new HumanTsk3(23, "Valentina", "?", "Brazilian");

val.sname = "Sampaio";
val.sayName = function() {
  return `My name is ${this.name} ${this.sname}`;
};
val.saySex = function() {
  return `${this.sayName()}, and I\`m open transgender model`;
};

function showResult() {
  console.log(Sergey.sayName(), Sergey.sayAge(), Sergey.sayNationality());
  console.log(Sergey.saySex());
  console.log("--------------------------------");
  console.log(eli.sayName(), eli.sayAge(), eli.sayNationality());
  console.log(eli.saySex());
  console.log("--------------------------------");
  console.log(val.sayName(), val.sayAge(), val.sayNationality());
  console.log(val.saySex());
  console.log("--------------------------------");
}

//showResult();  //<----------- Solution

// Задание 4 -----------------------------------------

function Book(title, publicationDate, country, author) {
  this.title = title;
  this.publicationDate = publicationDate;
  this.country = country;
  this.author = author;
}

Book.prototype.toString = function toString() {
  return `<div>${this.link}<p> Title: ${this.title}<br/> Author: ${this.author}<br/> Country: ${this.country}<br/> Publication date: ${this.publicationDate}</p></div>`;
};

let book1 = new Book(
  "The God Delusion",
  "2 October 2006",
  "United Kingdom",
  "Richard Dawkins"
);

book1.url = "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/The_God_Delusion_UK.jpg/220px-The_God_Delusion_UK.jpg";
book1.image = `<img src="${book1.url}" alt="The God Delusion">`;
book1.link = `<a href="https://en.wikipedia.org/wiki/The_God_Delusion">${book1.image}</a>`;

//document.write(book1.toString());   //<----------- Solution
