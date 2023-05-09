// Exercise 2 page 37
"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Skittles", price: 3.78},
    {product: "Sour Patch Kids", price: 6.48},
    {product: "Twizzlers", price: 4.74},
    {product: "Reese's Pieces", price: 3.98},
    {product: "Jolly Rancher", price: 3.24},
    {product: "Haribo Gummy bears", price: 6.98},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

// Which candies costs less than $4.00?
function getCandy4(_products, price){
    for(let i = 0; i < _products.length; i++){
        if(Number(_products[i].price < price)){
            console.log(_products[i].product);
        }
    }
}
getCandy4(products, 4.00);

// Which candies has "M&M" its name?
function getCandyName(_products, candyName){
    for(let i = 0; i < _products.length; i++){
        if(_products[i].product.indexOf(candyName) > -1){
            console.log(_products[i].product);
        }
    }
}
getCandyName(products, "M&M");

// Do we carry "Swedish Fish"?
function checkIfCarry(_products, candyName){
    for(let i = 0; i < _products.length; i++){
        if(_products[i].product == candyName){
            console.log(`Yes, we carry ${_products[i].product}`);
        }
    }
}
checkIfCarry(products, "Swedish Fish");