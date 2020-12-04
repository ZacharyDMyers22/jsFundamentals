/*

    -Loops offer us a quick and easy way to do something repeatedly, or loop over something

    - there are many different kinds of loops, but they all do roughly the same thing:
        - the loop will repeat until a specified condition evaluates to false

        - for loop
        - do while loop
        - while loop
        - for in
        - for of

        - for loop takes in 3 parameters
            1. initial expression
            2. condition
            3. increment expression

            *** separated by semi colon
*/

for (let i = 0; i < 10; i++) {// i += i + 1
    console.log(i);    
}

// Challenge: using a for loop, count to 20 by 2

for (let i = 0; i < 21; i = i+2){
    console.log(i)
}

for (let i = 10; i >=0; i--){
    console.log(i)
}

for (let i = 0; i >= -24; i= i-2){
    console.log(i)
}

let name = 'spongebob';
console.log(name[0])
for (let num = 0; num < name.length ; num++){
    //console.log(name.charAt(num))
    console.log(name[num])
}

for (let i = 1; i <= 1275; i = i+i){
    console.log(i)
}