let mydate = new Date()

// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
console.log(mydate.toString());
console.log(mydate.toDateString());

// let mycreateddate = new Date(2024, 12 , 24) // month is started by 0 in javascript so 0 = january and 11= december
// let mycreateddate = new Date(2024, 12 , 24, 0, 60)
let mycreateddate = new Date("1-30-2023") // you can define your date format 
console.log(mycreateddate.toLocaleString())

let mytimestamp = Date.now() // ***********Important topic for creating hotel apps and flight bokking websites****
// console.log(mytimestamp);
// console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
console.log(newdate.getDate());
console.log(newdate.getMonth() + 1);
// `${newdate.getDate()} and the time` (string interpolation)
newdate.toLocaleString('default', {
     weekday : "short",  
     
}) // for defining timezone weekday(mon = shorter , monday = long)

