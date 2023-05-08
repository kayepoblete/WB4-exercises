// Exercise 1 page 13
"use strict";



function printContact(persInfo) {
    console.log(persInfo.name);
    console.log(persInfo.address);
    console.log(`${persInfo.city}, ${persInfo.state} ${persInfo.zip}`);
}

let myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Benbrook",
    state: "Texas",
    zip: "76126"
};
printContact(myInfo);