// array

const myarr = [0,1,2,3,4,5]
const myheros = ["Shakitman","Naagraj","Motu"]

const myarr2 = new Array(1,2,3)
console.log(myarr[1]);

myarr.push(6,7,8) // adds array
myarr.pop()// removes the last value
console.log(myarr);


myarr.unshift(10);     // add the value in first in array
myarr.shift()          // remove the value in first
console.log(myarr.includes(0));
console.log(myarr.indexOf(3));

console.log(myarr)

const newarray = myarr.join()  // gives the same value but newarray will be changed from array to string
console.log(myarr);
console.log(newarray);
console.log(typeof newarray); 

// +++++++++++++++ Slice and splice ++++++++++++++ !!!Important topic + interview
console.log("A", myarr);
const myn1 = myarr.slice(1,3); 
console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1,3, "feb");  // splice removes the whole declared parameters and replace with the desired parameters
console.log("c", myarr);
console.log(myn2);









