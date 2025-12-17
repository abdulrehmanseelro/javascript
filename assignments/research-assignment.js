//        ASSIGNMENT OPERATORS
// JavaScript assignment operators are used to assign values to variables.
//  VariableName = value
// 1. Simple Assignment [=]
let a=5  // Assigns value to x
console.log(a)
// 2. Addition Assignment [+=](Adds value of the right to left & assigns the result to left)
let b=10
b+=2 // b is now 12 (10+2)
console.log(b)
// 3. Subtraction Assignment [-=](Subtracts value of the right from the left & assigns the result to left)
let c=7
c-=3 // c is now 4 (7-3)
console.log(c)
// 4. Multiplication Assignment [*=](Multiplies value of the right & left & assigns the result to left)
let d=5
d*=5 // d is now 25 (5*5)
console.log(d)
// 5. Division Assignment [/=](Divide value of the left by right & assigns the result to left)
let e=30
e/=5 // e is now 6 (30/6)
console.log(e)
// 6. Remainder Assignment [%=](Divide value of the left by right & assigns the remainder to left)
let f=34
f%=6 // f is now 4 (34 % 6 = 4)
console.log(f)
// 7. Exponentiation Assignment [**=](Raises the value of left to the power of right)
let g=2
g**=5 // g is now 32 (2**5 = 32)
console.log(g)
//        COMPARISON OPERATORS
// 1. Loose Equality [==]
let h="5" == 5 // true (this checks only value it is not concerned with data types)
console.log(h)
//  2. Strict Equality [===]
let i="5" === 5 // false (this checks data types along with value)
console.log(i)
// 3. Inequality [!=]
let j="2"!=3 // true
console.log(j)
// 4. Greater than [>]
let k=2>1 //true
console.log(k)
// 5. Greather than & Equal [>=]
let l=3>=3 // true
console.log(l)
// 6. Less than [<]
let m=5<10 // true
console.log(m)
// 7. Less than & Equal
let n=6<=6 //true
console.log(n)
//        LOGICAL OPERATORS
// 1. Logical AND [&&]
// returns true if both values are true
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
// 2. Logical OR [ || ]
// returns true if and only one value is true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
// 3. Logical NOT
// converts the value to boolean and returns the inverse value
// always returns a boolean {true or false}
console.log(!true);   // false
console.log(!false);  // true
//           FUNCTIONS
// functions are reuseable block of code designed to perform a particular task
// General Syntax :
// function name(){
//         code 
//  }
// functions are excecuted when they are called/invoked.
function hello(){      // here we defined a funtion
    console.log("hello world!")
}
hello()  // here we called the function to be excecuted.
//           FUNCTIONS with parameters
// functions can be defined with parameters which act as placeholders for values that will be assigned when function is called.
// these values are called arguments.
// General Syntax :
// function name(parameter1,parameter2){
//         code
// }
function sum(a,b){     // here we defined a function
    console.log(a+b)
}
sum(10,20)     // here we called the function to be excecuted with arguments (arguments are the values for variables)
//           FUNCTIONS with return values
// the return statement stops the excecution anf returns the value
// function name(parameter1,parameter2){
//         code
//         return (value)
// }
function sum(x,y){     // here we defined a function
    return x+y
}
sum()