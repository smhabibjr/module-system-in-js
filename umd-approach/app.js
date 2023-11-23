// Using the UMD module
if (typeof require === 'function') {
    const addFunction = require('./module.js');
    console.log(addFunction(2, 3)); // Output: 5
} else {
    console.log(add(2, 3)); // Output: 5
}
