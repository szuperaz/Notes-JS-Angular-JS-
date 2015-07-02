/*
-JavaScript output:
	- window.alert()
	- document.write() - csak tesztelésre
	- innerHTML = ...
	- console.log()

- to access an HTML element: document.getElementById(id)

- JavaScript uses the Unicode character set

- Keywords
	- break: Terminates a switch or a loop
	- continue: Jumps out of a loop and starts at the top
	- debugger: Stops the execution of JavaScript, and calls (if available) the debugging function
	- do ... while: Executes a block of statements, and repeats the block, while a condition is true
	- function: Declares a function
	- etc.

- If you re-declare a JavaScript variable, it will not lose its value

- Data types:
	- JavaScript has dynamic types. This means that the same variable can be used as different types
	- Strings are written with quotes. You can use single or double quotes
		- You can use quotes inside a string, as long as they dont match the quotes surrounding the string
	- JavaScript has only one type of numbers */
	var y = 123e5;								   //Number
	var length = 16;                               // Number
	var lastName = "Johnson";                      // String
	var cars = ["Saab", "Volvo", "BMW"];           // Array
	var x = {firstName:"John", lastName:"Doe"};    // Object
/*
- typeof operator:*/
	typeof "John"                // Returns string 
	typeof 3.14                  // Returns number
	typeof false                 // Returns boolean
	typeof [1,2,3,4]             // Returns object
	typeof {name:'John', age:34} // Returns object

/*
- Functions
	- The code inside the function will execute
		- When an event occurs (when a user clicks a button)
		- When it is invoked (called) from JavaScript code
		- Automatically (self invoked)*/
	var x = myFunction(4, 3);        // Function is called, return value will end up in x
	function myFunction(a, b) {
    return a * b;                // Function returns the product of a and b
	}
	/*
	- function refers to the function object, and function() refers to the function result

- Objects
	- JavaScript objects are containers for named values, called properties and methods
	- If you access a function property, without (), it will return the function definition

- Scope
	- local
	- global
		- Global variables are deleted when you close the page
		- automatically global: If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable
	- In HTML, the global scope is the window object: All global variables belong to the window object

- Don't create strings as objects. It slows down execution speed, and produces nasty side effects

- When using the === equality operator, equal strings are not equal

- Numbers
	- JavaScript Numbers are Always 64-bit Floating Point
	- Infinity (Number a típusa)
	- not a number - NaN*/
		var x = 100 / "Apple";  // x will be NaN (Not a Number)
		var x = 100 / "10";     // x will be 10
		/*
		- You can use the global JavaScript function isNaN() to find out if a value is a number
		- NaN is number
	- Don't create Number objects. They slow down execution speed, and produce nasty side effects
	