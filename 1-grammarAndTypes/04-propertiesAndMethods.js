/*

    Properties and Methods

        -In most cases, properties are qualities related to the data were working wit,
        and methods are actions wer can perform on the data were working with.
        Using a method causes somethinkmg to happen to the data, while using a 
        property returns information about the data


        - .property and .methods()
            -methods have parens behind tham, properties do not
        */


//String Porperties


//Length
let myName = 'Zachary';
console.log(myName.length);


//STRING METHODS
let myDogsName = 'Luna'
console.log(myDogsName.toUpperCase()); //  change a string to uppercase

let home = 'My home is Indianapolis';
console.log(home.includes('Indianapolis'));

// challenge: use google, find MDN documentation for string methods. Research the string '.split()' method,
// and use and implement it to get an array back from a string

let sent = 'This sentence will be split into individual parts';
let res = sent.split('');