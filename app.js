const person = {
  name: "Liam",
  age: 30,
  favouriteColour: "Purple",
};

console.log(person);
console.log(person.age);
console.log(person.favouriteColour);

person.favouriteFood = "Pizza";

console.log(person.favouriteFood);

const car = {
  colour: "White",
  make: "Dacia",
  model: "Sandero",
  ageOfCar: 8,
};

console.log(car);

const books = {
  favouriteAuthor: "J. R. R. Tolkein",
  firstRead: "Lord of the Rings",
  pageCount: 1137,
  advert: function (favouriteAuthor, firstRead, pageCount) {
    console.log(
      "Advert " + books.favouriteAuthor,
      books.firstRead,
      books.pageCount
    );
  },
};

books.advert();

// const person1 = {
//   name: "Liam",
//   age: 30,
//   faveColour: "Purple",
//   tags: ["code", "c#", "python"],
//   content: "this is my code",
//   sayHello: function (name) {
//     console.log("hello " + name + "!");
//   },
// };

// person1.sayHello("James");

// for (let i = 0; i < person1.tags.length; i++) {
//   console.log(person1.tags[i]);
// }

// console.log(person1.name);

// console.table(person1.tags.length);

// console.table(person1.tags[2]);

// console.log(
//   `There are ${person1.tags.length} tags for the language ${person1.tags[2]}`
// );

const person1 = {
  name: "Liam",
  age: 30,
  faveColour: "Purple",
  tags: ["code", "c#", "python"],
  content: "this is my code",
  getAge: function () {
    return this.age;
  },
};

const age = person1.getAge();
console.log("the age is " + age);
