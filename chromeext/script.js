`use strict`

var datetime = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March"];
// ,"Wednesday","Thursday","Friday","Saturday"];
//const today = new Date();
let h = datetime.getHours();
let m = datetime.getMinutes();
let s = datetime.getSeconds();
let month = months[datetime.getMonth()];
let year = 	datetime.getFullYear();
let day = weekday[datetime.getDay()];
let date = datetime.getDate()

let clock = h + ":" + m 
let info = day + ", " + month + " " + date + ", " + year

console.log(datetime);
console.log(clock)
console.log("month = " + datetime.getMonth());
console.log("Day = " + datetime.getDate());
document.getElementById("time").textContent = clock;
document.getElementById("details").textContent = info;
