

// this Javascript file NOT LINKED to index.html

// this file is to document each code section that was placed
// inside the app.js file that is linked to 
// index.html which renders 

// to see code run open in browser inspect element > Console 


//------- CORE BASICS -------------

// Note: order matters in javascript

/* multi line comments */



//------------ VARRIABLES & CONSTANTS

// Traversy Media Crash Course videos - YouTube

//----- data types
// strings, numbers, bool, NULL is a object 

const pizzaSlices = 8;  // immutable
// you want to use constants as much as possible 
console.log(pizzaSlices)

// concatenation with template strings
const name = 'Wendy'
let age = 22
console.log(`Name is ${name} and age is ${age}`);

const hello = `Name is ${name} and age is ${age}`
console.log(hello);


const st = "hello javascript";
console.log(st.length);

// method to make string uppercase
console.log(st.toUpperCase());

// substring is slicing string
console.log(st.substring(2, 7));

console.log(st.substring(2, 7).toUpperCase());

console.log(st.split(', '));



//------------ arrays 
const numbers = new Array(1, 3, 5, 7, 8); // constructor
console.log(numbers)

const fruit = ['apple', 'bananas', '34', true, 'peaches'];
console.log(fruit)

// grab element from array  0 index
console.log(fruit[1])

// add to array
fruit[5] = 'cherries'
console.log(fruit)

// add to array with push()
fruit.push('mangos')
console.log(fruit)

// add to front of array
fruit.unshift('blackberry')
console.log(fruit)

// remove last item with .pop()

// get the index of item
console.log(fruit.indexOf('34'))


// object literals
const person = {
    firstName : 'Anna',
    lastName : 'Banana',
    job : 'Coder',
    hobbies: ['music', 'RLadies', 'hiking'],
    address : {
        street: '24 Rock Ave',
        city: 'Portland',
        state: 'Oregon'
    }
}

console.log(person)
console.log(person.job);
console.log(person.firstName, person.job)

// print out hobby item
console.log(person.hobbies[2], person.address.city )

// properties
person.email = 'example@email.com'; // need the ;

console.log(person)



//--------- object arrays
const todos = [
    {
        id: 1,
        text: 'empty dish washer',
        isCompleted: false
    },
    {
        id: 2,
        text: 'commit code to github',
        isCompleted: true
    },
    {
        id: 3,
        text: 'message someone',
        isCompleted: false
    }
];

console.log(todos)
// grab the 2nd item text
console.log(todos[1].text)

// convert object data to JSON to send to a server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)


//--------- for loops
for (let i = 0; i < 10; i++){
    console.log(`for loop number ${i}`);
}

// for loop the object array
for (let i = 0; i < todos.length; i++){
    console.log('for let: '+todos[i].text);
}

// for-of for loop of object array
for (let todo of todos) {
    console.log('for of: '+ todo.id);
}

//------- while loop
let i = 0;
while (i < 10) {
    console.log(`while loop number ${i}`);
    i++; // increment !! 
}

// forEach of object array
todos.forEach(function (todo) {
    console.log('forEach: ' + todo.text)
});

// map loop of object array
const todoText = todos.map(function (todo) {
    return 'map(): ' + todo.text;
});
console.log(todoText)

// filter 
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted)

// get just the text
const todoCompletedText = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){return todo.text})  // < todo.text
console.log(todoCompletedText)



//-------------- conditionals

const x = 10; // integer
const y = '10'; // string

if (x == 10) {
    console.log('x is 10')
}

// if else
// 3 === matches strict same data type
if (y === 10) {
    console.log('y is 10')
}
else {
    console.log('y is not 10 but "10" ')
}


// else, else if, else
const w = 5;
if (w === 10) {
    console.log('w is 10')
}
else if (w > 10) {
    console.log('w is greater than 10')
}
else {
    console.log('w is less than 10')
}



//-------------- conditionals

// OR in if else
const x = 5
const y = 13

// 1 condition has to be true
if (x > 5 || y > 10) {
    console.log('x > 5 || y > 10')
}

// both conditions have to be true
if (x > 5 && y > 10) {
    console.log('x > 5 AND y > 10')
}


// ternary operator
const k = 10;
const color = x > 10 ? 'red' : 'purple';
console.log(color)


// switches 
switch (color) {
    case 'red': console.log('color is red'); break;
    case 'blue': console.log('color is blue'); break;
    default: console.log('switch: color is NOT red or blue'); break;
}





// ---------- functions
function addNums(num1, num2) {
    y = num1 + num2
    console.log(y)
}
addNums(4, 7)





// ------- object oriented programming (OOP)

// constructor functions and classes

// constructors have capitals
function Person(firstName, lastName, dob) { 
    //           must match above !
    this.first = firstName;
    this.last = lastName;       // properties
    //this.dob = dob;
    this.dob = new Date(dob);
    this.getBirthYear = function () { return this.dob.getFullYear(); }
}
// instantiate object 
const person1 = new Person('Jane', 'Doo', '03-22-1977');

console.log(person1)
console.log(person1.first)
console.log(person1.dob)
console.log('person1.dob.getFullYear() ' + person1.dob.getFullYear());
console.log('person1.getBirthYear() ' + person1.getBirthYear());




// class ( same idea as above )
class Person2{
    constructor(firstName, lastName, dob) {
        this.first = firstName;
        this.last = lastName;   
        this.dob = new Date(dob);
    }
    getBirthYear() { return this.dob.getFullYear(); }

    getFullName() { return `${this.firstName} ${this.lastName}` }
    
}


// DOM document object model

// single element selectors

//console.log(document.getElementById('my-form'))
//console.log(document.querySelector('h1'))

// multiple element selectors
console.log(document.querySelectorAll('.item'));
console.log(document.querySelectorAll('item'));

// if HTML document has unorder list
const ul = document.querySelector('.items')
ul.remove()
ul.firstElementChild.textContent = "new 1st list item text!"
ul.lastElementChild.remove()
ul.children[1].innerText = 'new Name';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
btn.getElementsByClassName.background = 'red'; // overrides CSS style

btn.addEventListener('click', (e) => {
    e.preventDefault(); // prevents from 'click' quickly appearing in console
    console.log('click') // counts time submit clicked
    console.log(e.target.className); // prints out what was clicked
    
    // after click change form color to grey
    document.querySelector('#my-form').style.background = '#ccc';
 
})

=======
// Javascript file

// code that is here is from the p5.js online web code editor and pasted here for reference.


//-------------------- starter code
function setup() {
  createCanvas(500, 500); // canvas dimension
}

function draw() {
  background(100); // grey bg
//-------------------
  
  //   x    y   w   ht
  rect(230, 78, 56, 70);
}
>>>>>>> 5bc7d144d5c6f864a336619fec34e639dbd2f648
