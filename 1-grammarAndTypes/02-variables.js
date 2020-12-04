/*

    - variables are named containers for storing data values or data types
    - we name variables so that we can refer to the data they're holding at a later point

*/

    let     number   =    2;

/*  (1)      (2)     (3)  (4)

     1- javascript keyword
     2- variable name
     3- assignment operator
     4- value of the variable

*/
let word = "Since"
let word1 = "plus"
let word2 = "equals"
let word3 = "and"
let word4 = "must"
let phrase1 = "We have three numbers..."
let phrase2 = "Two of these numbers add up to..."
let numberOne = 5;
let numberTwo = 3;



console.log(phrase1, number, numberOne, numberTwo);
console.log(phrase2, numberOne + numberTwo);

console.log(word, number, word1, numberOne, word2, number + numberOne);
console.log(word3, number, word1, numberTwo, word2, number + numberTwo);

console.log(numberOne, word1, numberTwo, word4, word2, numberOne + numberTwo);


/*

    -a variable name must begin with a letter, underscore, or a dollar sign ($)
    - a number may follow the above characters, but they cannot come first
    - javascript is case sensitive - 'hello' and 'Hello' are different variables
    - camelCase is the best practice for making variables

*/

/*


    -var, let, const

        -var: old keyword for variables
        -let: 'new' keyword for variables
        -const: 'new' keyword for variables; declares an unchangeable value
*/
/*

    declaration vs initialization

        declarations are the LEFT SIDE of the assignment operator when writing a variable

        initialization is the right of the assignment operator, or the value we're assigning to a variable

*/

let x;
console.log('Declaration', x)


x=10;
console.log('Initialzation', x);

x = 20;
console.log('re-Initilization', x);