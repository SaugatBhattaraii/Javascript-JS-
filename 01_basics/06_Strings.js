const name = "saugat"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('saugat-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   saugat    "
console.log(newStringOne);
console.log(newStringOne.trim()); // it is used to cut extra spaces 

const url = "https://saugat.com/saugat%20bhattarai" // space is automatically converted into %20 by brower for example saugat bhattarai is ocnverted into saugat%20bhattarai

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // it is to check whether that keyword is included or not 

console.log(gameName.split('-'));