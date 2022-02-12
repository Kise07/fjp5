// starting JS -> JavaScript
// var let const

// variable declaration
var a; // int string float ?(boolean)

// variable initialization
a = 10;
// variable re-initialize
a = 20;
// console.log(typeof a);
// console.log(a);

a = 'hello'; // re-initialize of variable 'a'
// console.log(a);

// typeof operator -> it tells us the type of data stored in a variable
// console.log(typeof a);

a = true;
// console.log(a);
// console.log(typeof a);

a = null;
// console.log(a);
// console.log(typeof a);

// Number
var num = 10;
// console.log(num);
var float = 2.4;
// console.log(float);

// Boolean
var t = true;
var f = false;
// console.log(t);
// console.log(f);

// String
// ' ', " ", ` `
// single quotes, double quotes, backtick
var str = 'a';
// console.log(typeof str);
str = 'How are you doing ?\ni am fine, how are you ?';
// backslash num("\n")
// console.log(str);

var b = 'I hope you guys are able to grasp the concepts';
// console.log(b);

var num = 4500;
// ${}
// console.log(`half of ${num} is ${num / 2}`);

// var has some problem

// redeclaration is allowed
var r = 'hello';
// console.log(r);

var r = 100;
// console.log(r);

// overcome krne ke liye

// let keyword is used
let l = 100;
// console.log(l);

// let l = '200';
// console.log(l); // 1-SyntaxError: Identifier 'l' has already been declared

// we can re-initialize a variable but we cannot redeclare it
// l = 300;
// console.log(l);

// loops in JS
var num = 10;

for (var i = 0; i < num; i++) {
  if (i % 2 == 0) {
    console.log('num is even');
  }
}
// 2nd problem with var keyword
// var keyword is function scoped in case of function else it is global scope
// let keyword is block scoped

let j = 20;
for (var i = 0; i < num; i++) {
  let j = 20;
  if (i % 2 == 0) {
    let hello = 1000;
    console.log(i);
    console.log(hello);
  }

  console.log('inner' + j);
}
console.log('outer ' + j);
console.log(`value of i is " ${i}`);
console.log(hello); // error dega hello is not defined

// {

//     //this space between opening and closing of curly braces is a block
// }

// const keyword
const a = 2;
// console.log(a);
// na hi redeclare na hi re-initialize
// const a = 5;
// a = 4; // 2-TypeError: Assignment to constant variable.
// console.log('hey');
