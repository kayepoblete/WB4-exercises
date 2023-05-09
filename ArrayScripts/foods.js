// Exercise 3 page 30
"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

let sumPrice = 0;

for(let i = 0; i < lunch.length; i++) {
    sumPrice += lunch[i].price;
}

let tax = sumPrice*0.08;
let tip = sumPrice*0.18;
let total = sumPrice + tax + tip;

console.log(`Subtotal: $${sumPrice.toFixed(2)}`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`Tip: $${tip.toFixed(2)}`);
console.log(`Total due: $${total.toFixed(2)}`);