//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "saugat",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);
/*
type of myobj = object
type of myfunction = function (it is called as object function)
type of bignumber = bigint
*/



// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// concept of heap and stack memory
// stack memory example (stack memory is called all primitive datatype in which it gives only copy but no reference)
let myyoutubename = "saugatbhattaraidotcom"

let anothername = myyoutubename
anothername = "chaiaurcode"

console.log(anothername)
console.log(myyoutubename)
// heap memory example below
// heap memory are called all non-primitive datatype in which it gives references 
let userone = {
    email:"saugatbhattarai@gmail.com", //comma is necessary while writing other objects
    upi: "something@com"
}

let usertwo= userone
usertwo.email = "saugat@yahoo.com" // object is accessed by using . sign 

console.log(userone.email)
console.log(usertwo.email)