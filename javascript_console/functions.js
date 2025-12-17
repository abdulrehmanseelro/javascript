// Function is block of code that performs a specific task when called
function greet(){
    console.log("Hello World!")
}
greet()
// Functions with parameters
function hello(name){
    console.log("Hello "+name)
}
hello(rehman)
// Functions with return
function sum(a,b){
    return a+b
}
sum(5,6)
// Types of Functions
// 1.Normal Function
// declared using function keyword & has a name
// 2.Anonymous Function
// a function without a name, stored in a variable or used as a callback
// 3.Arrow Function (ES6)
// Arrow Functions allow a shorter syntax for function expressions.
// You can skip the function keyword, the return keyword, and the curly brackets


// Scope in JavaScript


// Types of scope
// 1.Global Scope
// 2.Local Scope
// Local have two more types
// 1.Function Scope
// 2.Block Scope

// Global Scope:
// A variable declared outside any function or block, accessible anywhere in the program.
// ● Accessible everywhere
// ● Long life
// ● Risky for security/conflict

// Function Scope:
// A variable declared inside a function, accessible only within that function.
// ● Variables declared inside a function are only accessible within that function.
// ● Cannot be accessed outside the function.
// ● Works with var, let, or const inside a function.
// ● Each function creates a separate scope.
// ● Prevents naming conflicts outside the function.
// ● Global variables can be accessed inside a function.

// Block Scope:
// A variable declared inside a block { } using let or const, accessible only within that block.
// ● Variables declared inside { } using let or const are only accessible inside that block.
// ● var does not have block scope (it becomes function scoped).
// ● Blocks can be created by if, for, while, or { } alone.


// Hoisting:
// JavaScript automatically moves variable and function declarations to the top before execution.
// Hoisting in JavaScript is a behavior where declarations of variables, functions, and classes are conceptually 
// moved to the top of their containing scope during the compilation phase, before the code is executed.
// This means you can use these entities before they are formally declared in your code.