# Different module formats in JavaScript


## CommonJS(CJS) Approach

#### Description: 

CommonJS is a module format used in environments like Node.js.

#### Syntax: 

It uses require() for importing modules and module.exports or exports for exporting functionalities.

#### Usage:

Primarily utilized in server-side JavaScript (Node.js).

### How its works in NOde.js Environments

Lets say you have a file called module.js like below: 

```js
// Declare a function
const add = (a, b) => a + b;
// and Export them
module.exports = add;
```

Now we can import it inside our node environment like below:

```js
// app.js (CommonJS)
// require that module.js file and save it as a variable
const addFunction = require('./module.js');

//Now we can use it
console.log(addFunction(2, 3)); // Output: 5
```
How to export multiple functions or values in commonJS ?

Here's an example:
```js
// myModule.js

// Function 1
function add(a, b) {
  return a + b;
}

// Function 2
function multiply(a, b) {
  return a * b;
}

// Exporting multiple functions
module.exports = {
  add: add,
  multiply: multiply
};
// or we can also use a shorthand in JavaScript ES6 syntax
module.exports = {
  add,
  multiply
};
```
And use it inside app.js file like: 

```js
//app.js file

// import myModule.js file
const myModule = require('./myModule');

// Accessing the exported functions
const result1 = myModule.add(2, 3); // result1 = 5
const result2 = myModule.multiply(4, 5); // result2 = 20
```

## ES6 or EcmaScript Module(ESM) Approach

#### Description: 
ESM is the native module system introduced in ES6 (ES2015) for JavaScript. Native support in modern browsers and Node.js, making it the standard module system.

Provides a clean and straightforward syntax with `import` and `export` statements.

#### Syntax: 

It uses import and export statements to define and use modules.

#### Usage:

Preferred for modern frontend development due to native browser support, clean syntax, and enhanced performance through static analysis.

### How its works in NOde.js Environments

Lets see how its works.

```js
// Exporting module

// module.js
export const add = (a, b) => a + b;
```
Now we are ready to use it inside app.js file ? Like this : 

```js
// Importing module

// app.js
import { add } from './module.js';
console.log(add(2, 3)); // Output: 5
```

Not realy why ? we will get this error when you exsicute node app.js in our commad line.

