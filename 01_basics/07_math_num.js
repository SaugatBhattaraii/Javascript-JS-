const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));


// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // it gives the comma in number and we can define whether it is american standard or indian 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4)); // if it is greater than .5 then it will automatically give number greater for example in this case it will give 5 or if it is smaller than .5 it will give 4 
console.log(Math.ceil(4.2));// if it is greater than even .1 then it will give greater number for example in this case it will give 5
console.log(Math.floor(4.9)); // even if it is greater than even .1 then it will give lower  number for example in this case it will give 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)