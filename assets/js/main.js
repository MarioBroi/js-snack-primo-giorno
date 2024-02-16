//console.log ('prova')

//EX 1

let number = 100; //this variable *number* will contain the number *100*
console.log(number);

//EX 2

const pi = 3.14; //this constant *pi* will contain the number *3.14*
console.log(pi);

//EX 2/B

/* 

const pi = 3.1416;  
console.log(pi);

In this case i'm reciving an error from the console because the variable *pi* is a constant and cannot be defined only once. 
To fix this problem i can modify my variable const whit a variable let

*/

//EX 2/C

let radius = 8; //this variable will contain the value: 8 
let circle = ((radius*2)*pi); //this variable will multiply the variable 8 for 2 times (8*2=16) and multiply the total for the constant pi (16*3.14=50.24)
console.log (circle);

//EX 3

let name = "Carlo" //this variable will display the string "Carlo"
name = "Marco" //this variable will display the string "Marco" and "Carlo" gonna be overwritten 
console.log(name);